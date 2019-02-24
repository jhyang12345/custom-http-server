export function bytesToSize(bytes) {
   var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

export function stripSlashes(value) {
   let pathName = value.trim()
   if (pathName[0] === "/") pathName = pathName.substring(1, pathName.length - 1)
   if (pathName[pathName.length - 1] === "/") pathName = pathName.substring(0, pathName.length - 1)
   return pathName
}

// sort reverse for now newest top
export function sortByModifiedTime(content, reverse=false) {
   const directories = []
   const files = []

   for (let item of content) {
      const { stat } = item
      if (stat.isDir) directories.push(item)
      else files.push(item)
   }

   if (!reverse) {
      directories.sort((a, b) => (new Date(b.stat.mtime) - new Date(a.stat.mtime)))
      files.sort((a, b) => (new Date(b.stat.mtime) - new Date(a.stat.mtime)))
   } else {
      directories.sort((b, a) => (new Date(b.stat.mtime) - new Date(a.stat.mtime)))
      files.sort((b, a) => (new Date(b.stat.mtime) - new Date(a.stat.mtime)))
   }

   return [...directories, ...files]
}

// sort by name
export function sortByName(content, reverse=false) {
   const directories = []
   const files = []

   for (let item of content) {
      const { stat } = item
      if (stat.isDir) directories.push(item)
      else files.push(item)
   }

   if (!reverse) {
      directories.sort((a, b) => {
         if (a.displayName < b.displayName) return -1
         else if (a.displayName > b.displayName) return 1
         return 0
      })

      files.sort((a, b) => {
         if (a.displayName < b.displayName) return -1
         else if (a.displayName > b.displayName) return 1
         return 0
      })
   } else {
      directories.sort((b, a) => {
         if (a.displayName < b.displayName) return -1
         else if (a.displayName > b.displayName) return 1
         return 0
      })

      files.sort((b, a) => {
         if (a.displayName < b.displayName) return -1
         else if (a.displayName > b.displayName) return 1
         return 0
      })
   }

   return [...directories, ...files]
}

export function sortBySize(content, reverse=false) {
   const directories = []
   const files = []

   for (let item of content) {
      const { stat } = item
      if (stat.isDir) directories.push(item)
      else files.push(item)
   }

   if (reverse) {
      directories.sort((a, b) => {
         if (a.stat.size < b.stat.size) return 1
         else if (a.stat.size > b.stat.size) return -1
         return 0
      })

      files.sort((a, b) => {
         if (a.stat.size < b.stat.size) return 1
         else if (a.stat.size > b.stat.size) return -1
         return 0
      })
   } else {
      directories.sort((b, a) => {
         if (a.stat.size < b.stat.size) return 1
         else if (a.stat.size > b.stat.size) return -1
         return 0
      })

      files.sort((b, a) => {
         if (a.stat.size < b.stat.size) return 1
         else if (a.stat.size > b.stat.size) return -1
         return 0
      })
   }


   return [...directories, ...files]
}