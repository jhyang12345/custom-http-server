const styles = require('../show-dir/styles');
const he = require('he');
const permsToString = require('../show-dir/perms-to-string');
const sizeToString = require('../show-dir/size-to-string');

const supportedIcons = styles.icons;
const css = styles.css;

class RenderHelper {

    constructor(parsed) {
        console.log("Constructor called")
        this.parsed = parsed;
        this.html = ""
        this.humanReadable = true
        this.hidePermissions = true
        // no idea what si is
        this.si = false
        this.initHtml.call(this)
    }

    initHtml() {
        const pathname = decodeURIComponent(this.pathname)

        this.html = `${[
            '<!doctype html>',
            '<html>',
            '  <head>',
            '    <meta charset="utf-8">',
            '    <meta name="viewport" content="width=device-width">',
            `    <title>Index of ${he.encode(pathname)}</title>`,
            `    <style type="text/css">${css}</style>`,
            '  </head>',
            '  <body>',
            `<h1>Index of ${he.encode(pathname)}</h1>`,
        ].join('\n')}\n`;

        this.html += '<table>';
    }
    
    writeRow (file) {
        const parsed = this.parsed

        // render a row given a [name, stat] tuple
        const isDir = file[1].isDirectory && file[1].isDirectory();
        let href = `${parsed.pathname.replace(/\/$/, '')}/${encodeURIComponent(file[0])}`;

        // append trailing slash and query for dir entry
        if (isDir) {
            href += `/${he.encode((parsed.search) ? parsed.search : '')}`;
        }

        const displayName = he.encode(file[0]) + ((isDir) ? '/' : '');
        const ext = file[0].split('.').pop();
        const classForNonDir = supportedIcons[ext] ? ext : '_page';
        const iconClass = `icon-${isDir ? '_blank' : classForNonDir}`;

        // TODO: use stylessheets?
        this.html += `${'<tr>' +
            '<td><i class="icon '}${iconClass}"></i></td>`;
        if (!this.hidePermissions) {
            this.html += `<td class="perms"><code>(${permsToString(file[1])})</code></td>`;
        }
        this.html +=
            `<td class="file-size"><code>${sizeToString(file[1], this.humanReadable, this.si)}</code></td>` +
            `<td class="display-name"><a href="${href}">${displayName}</a></td>` +
            '</tr>\n';
    }

    finishHtml() {
        this.html += '</table>\n';
        this.html += `<br><address>Node.js ${
            process.version
            }/ <a href="https://github.com/jfhbrook/node-ecstatic">ecstatic</a> ` +
            '</body></html>'
            ;
    }
}

module.exports = RenderHelper