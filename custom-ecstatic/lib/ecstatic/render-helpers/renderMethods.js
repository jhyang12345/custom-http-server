module.exports = {
    writeRow : (file) => {
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
        html += `${'<tr>' +
            '<td><i class="icon '}${iconClass}"></i></td>`;
        if (!hidePermissions) {
            html += `<td class="perms"><code>(${permsToString(file[1])})</code></td>`;
        }
        html +=
            `<td class="file-size"><code>${sizeToString(file[1], humanReadable, si)}</code></td>` +
            `<td class="display-name"><a href="${href}">${displayName}</a></td>` +
            '</tr>\n';
    },
    
}