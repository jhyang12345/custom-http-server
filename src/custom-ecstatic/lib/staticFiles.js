import path from 'path'

const mapper = {
    "/client/bundle.js": "ecstatic/client/index.js"
}

export default function staticFileName(pathname) {
    if (mapper[pathname] !== undefined) {
        return path.join(__dirname, mapper[pathname])
    }
    return pathname
}