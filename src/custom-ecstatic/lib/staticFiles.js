import path from 'path'

const mapper = {
    "/client/bundle.js": "../../../assets/client.js",
    "/pretty-file-icons/svg/7z.svg": "ecstatic/pretty-file-icons/svg/7z.svg",
    "/pretty-file-icons/svg/aac.svg": "ecstatic/pretty-file-icons/svg/aac.svg",
    "/pretty-file-icons/svg/ai.svg": "ecstatic/pretty-file-icons/svg/ai.svg",
    "/pretty-file-icons/svg/archive.svg": "ecstatic/pretty-file-icons/svg/archive.svg",
    "/pretty-file-icons/svg/arj.svg": "ecstatic/pretty-file-icons/svg/arj.svg",
    "/pretty-file-icons/svg/audio.svg": "ecstatic/pretty-file-icons/svg/audio.svg",
    "/pretty-file-icons/svg/avi.svg": "ecstatic/pretty-file-icons/svg/avi.svg",
    "/pretty-file-icons/svg/css.svg": "ecstatic/pretty-file-icons/svg/css.svg",
    "/pretty-file-icons/svg/csv.svg": "ecstatic/pretty-file-icons/svg/csv.svg",
    "/pretty-file-icons/svg/dbf.svg": "ecstatic/pretty-file-icons/svg/dbf.svg",
    "/pretty-file-icons/svg/doc.svg": "ecstatic/pretty-file-icons/svg/doc.svg",
    "/pretty-file-icons/svg/dwg.svg": "ecstatic/pretty-file-icons/svg/dwg.svg",
    "/pretty-file-icons/svg/exe.svg": "ecstatic/pretty-file-icons/svg/exe.svg",
    "/pretty-file-icons/svg/fla.svg": "ecstatic/pretty-file-icons/svg/fla.svg",
    "/pretty-file-icons/svg/flac.svg": "ecstatic/pretty-file-icons/svg/flac.svg",
    "/pretty-file-icons/svg/gif.svg": "ecstatic/pretty-file-icons/svg/gif.svg",
    "/pretty-file-icons/svg/html.svg": "ecstatic/pretty-file-icons/svg/html.svg",
    "/pretty-file-icons/svg/iso.svg": "ecstatic/pretty-file-icons/svg/iso.svg",
    "/pretty-file-icons/svg/jpg.svg": "ecstatic/pretty-file-icons/svg/jpg.svg",
    "/pretty-file-icons/svg/js.svg": "ecstatic/pretty-file-icons/svg/js.svg",
    "/pretty-file-icons/svg/json.svg": "ecstatic/pretty-file-icons/svg/json.svg",
    "/pretty-file-icons/svg/mdf.svg": "ecstatic/pretty-file-icons/svg/mdf.svg",
    "/pretty-file-icons/svg/mp2.svg": "ecstatic/pretty-file-icons/svg/mp2.svg",
    "/pretty-file-icons/svg/mp3.svg": "ecstatic/pretty-file-icons/svg/mp3.svg",
    "/pretty-file-icons/svg/mp4.svg": "ecstatic/pretty-file-icons/svg/mp4.svg",
    "/pretty-file-icons/svg/mxf.svg": "ecstatic/pretty-file-icons/svg/mxf.svg",
    "/pretty-file-icons/svg/nrg.svg": "ecstatic/pretty-file-icons/svg/nrg.svg",
    "/pretty-file-icons/svg/pdf.svg": "ecstatic/pretty-file-icons/svg/pdf.svg",
    "/pretty-file-icons/svg/png.svg": "ecstatic/pretty-file-icons/svg/png.svg",
    "/pretty-file-icons/svg/ppt.svg": "ecstatic/pretty-file-icons/svg/ppt.svg",
    "/pretty-file-icons/svg/psd.svg": "ecstatic/pretty-file-icons/svg/psd.svg",
    "/pretty-file-icons/svg/rar.svg": "ecstatic/pretty-file-icons/svg/rar.svg",
    "/pretty-file-icons/svg/rtf.svg": "ecstatic/pretty-file-icons/svg/rtf.svg",
    "/pretty-file-icons/svg/svg.svg": "ecstatic/pretty-file-icons/svg/svg.svg",
    "/pretty-file-icons/svg/text.svg": "ecstatic/pretty-file-icons/svg/text.svg",
    "/pretty-file-icons/svg/tiff.svg": "ecstatic/pretty-file-icons/svg/tiff.svg",
    "/pretty-file-icons/svg/txt.svg": "ecstatic/pretty-file-icons/svg/txt.svg",
    "/pretty-file-icons/svg/unknown.svg": "ecstatic/pretty-file-icons/svg/unknown.svg",
    "/pretty-file-icons/svg/video.svg": "ecstatic/pretty-file-icons/svg/video.svg",
    "/pretty-file-icons/svg/wav.svg": "ecstatic/pretty-file-icons/svg/wav.svg",
    "/pretty-file-icons/svg/xls.svg": "ecstatic/pretty-file-icons/svg/xls.svg",
    "/pretty-file-icons/svg/xml.svg": "ecstatic/pretty-file-icons/svg/xml.svg",
    "/pretty-file-icons/svg/zip.svg": "ecstatic/pretty-file-icons/svg/zip.svg",
}

export default function staticFileName(pathname) {
    if (mapper[pathname] !== undefined) {
        return path.join(__dirname, mapper[pathname])
    }
    return pathname
}