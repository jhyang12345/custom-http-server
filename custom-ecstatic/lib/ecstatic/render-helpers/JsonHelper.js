const styles = require('../show-dir/styles');
const he = require('he');
const permsToString = require('../show-dir/perms-to-string');
const sizeToString = require('../show-dir/size-to-string');

const supportedIcons = styles.icons;
const css = styles.css;

class JsonHelper {
    constructor(parsed) {
        this.parsed = parsed;
        this.pathname = decodeURIComponent(parsed.pathname)
        this.humanReadable = true
        this.hidePermissions = true
        this.object = {
            pathName: he.encode(this.pathname),
            content: []
        }

        this.html = ""
    }

    writeRow(file) {
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

        this.object.content.push({
          displayName: displayName,
          ext: ext,
          classForNonDir: classForNonDir,
          iconClass: iconClass,  
        })
   
    }

    finishHtml() {
        this.html = JSON.stringify(this.object)
    }

}

module.exports = JsonHelper