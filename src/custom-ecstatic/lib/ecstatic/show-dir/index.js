'use strict';

const sortFiles = require('./sort-files');
// fs stands for file system
const fs = require('fs');
const path = require('path');
const etag = require('../etag');
const url = require('url');
const status = require('../status-handlers');
const RenderHelper = require("../render-helpers/RenderHelper")
const JsonHelper = require("../render-helpers/JsonHelper")
const ReactHelper = require("../render-helpers/ReactHelper")

module.exports = (opts) => {
  // opts are parsed by opts.js, defaults already applied
  const cache = opts.cache;
  const root = path.resolve(opts.root);
  const baseDir = opts.baseDir;

  const handleError = opts.handleError;
  const showDotfiles = opts.showDotfiles;
  const weakEtags = opts.weakEtags;

  // node express app middleware format
  // req for request and res to response
  return function middleware(req, res, next, requestJsonFlag) {
    // Figure out the path for the file from the given url
    const parsed = url.parse(req.url);
    const pathname = decodeURIComponent(parsed.pathname);

    const dir = path.normalize(
      path.join(
        root,
        path.relative(
          path.join('/', baseDir),
          pathname
        )
      )
    );

    

    fs.stat(dir, (statErr, stat) => {
      if (statErr) {
        if (handleError) {
          status[500](res, next, { error: statErr });
        } else {
          next();
        }
        return;
      }

      // files are the listing of dir
      fs.readdir(dir, (readErr, _files) => {
        let files = _files;

        if (readErr) {
          if (handleError) {
            status[500](res, next, { error: readErr });
          } else {
            next();
          }
          return;
        }

        // Optionally exclude dotfiles from directory listing.
        if (!showDotfiles) {
          files = files.filter(filename => filename.slice(0, 1) !== '.');
        }

        res.setHeader('content-type', 'text/html');
        res.setHeader('etag', etag(stat, weakEtags));
        res.setHeader('last-modified', (new Date(stat.mtime)).toUTCString());
        res.setHeader('cache-control', cache);

        function render(dirs, renderFiles, lolwuts) {
          
          let renderHelper = requestJsonFlag === true ? new JsonHelper(parsed) : new ReactHelper(parsed);
          
          const failed = false;
          const writeRow = renderHelper.writeRow.bind(renderHelper)

          // each entry in the array is a [name, stat] tuple
          dirs.sort((a, b) => a[0].toString().localeCompare(b[0].toString())).forEach(writeRow);
          renderFiles.sort((a, b) => a.toString().localeCompare(b.toString())).forEach(writeRow);
          lolwuts.sort((a, b) => a[0].toString().localeCompare(b[0].toString())).forEach(writeRow);

          renderHelper.finishHtml.call(renderHelper)

          if (!failed) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(renderHelper.html);
          }
        }

        sortFiles(dir, files, (lolwuts, dirs, sortedFiles) => {
          // It's possible to get stat errors for all sorts of reasons here.
          // Unfortunately, our two choices are to either bail completely,
          // or just truck along as though everything's cool. In this case,
          // I decided to just tack them on as "??!?" items along with dirs
          // and files.
          //
          // Whatever.

          // if it makes sense to, add a .. link
          if (path.resolve(dir, '..').slice(0, root.length) === root) {
            fs.stat(path.join(dir, '..'), (err, s) => {
              if (err) {
                if (handleError) {
                  status[500](res, next, { error: err });
                } else {
                  next();
                }
                return;
              }
              dirs.unshift(['..', s]);
              render(dirs, sortedFiles, lolwuts);
            });
          } else {
            render(dirs, sortedFiles, lolwuts);
          }
        });
      });
    });
  };
};
