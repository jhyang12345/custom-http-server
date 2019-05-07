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
   const upDirectory = []
   const {directories, files} = separateContentByDirectory(content);

   if (!reverse) {
      directories.sort((a, b) => (new Date(b.stat.mtime) - new Date(a.stat.mtime)))
      files.sort((a, b) => (new Date(b.stat.mtime) - new Date(a.stat.mtime)))
   } else {
      directories.sort((b, a) => (new Date(b.stat.mtime) - new Date(a.stat.mtime)))
      files.sort((b, a) => (new Date(b.stat.mtime) - new Date(a.stat.mtime)))
   }

   return [...directories, ...files];
}

// sort by name
export function sortByName(content, reverse=false) {
   const upDirectory = [];
   const {directories, files} = separateContentByDirectory(content)

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

   return [...directories, ...files];
}

export function sortBySize(content, reverse=false) {
   const upDirectory = [];
   const {directories, files} = separateContentByDirectory(content);

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

export function sortByMethodAndReverse(content, method, reverse) {
   switch (method) {
       case "modified" :
           return [...sortByModifiedTime(content, reverse)]
           
       case "name" :
           return [...sortByName(content, reverse)]
           
       case "size" :
           return [...sortBySize(content, reverse)]
   }
   return content
}

function separateContentByDirectory(content) {
   let directories = []
   let files = []

   for (let item of content) {
      const { stat } = item
      if (stat.isDir) directories.push(item)
      else files.push(item)
   }

   return {directories, files}
}

export function filterByKeywords(content, keywords) {
   let {directories, files} = separateContentByDirectory(content);

   if(keywords === undefined || keywords.length === 0 || keywords.split().length === 0) return content 

   directories = directories.filter((directory) => (nameContainsKeywords(directory.displayName, keywords)))
   files = files.filter((file) => (nameContainsKeywords(file.displayName, keywords)))
   
   return [...directories, ...files]
}

function nameContainsKeywords(fileName, keywords) {
   const words = keywords.split()
   let wordsInFileName = false;
   for(let word of words) {
      wordsInFileName = wordsInFileName || fileName.toLowerCase().includes(word.toLowerCase())
   }
   return wordsInFileName
}

export function filterOutParentDirectory(content) {
   return content.filter((item) => !item.displayName.includes(".."))
}

export function fetchManager({ url, method, body, callback }) {
  // TODO: response status 를 자연스럽게 넘기기
  fetch(url, {
    method,
    body,
    headers: { "Content-type": "application/json", "Request-type": "api" },
    credentials: "same-origin"
  })
    .then(response => {
      return response.json();
    })
    .then(result => {
      callback(result.status, result);
    });
}

export function fetchDirectory(directory) {
   return fetch(directory, {
      method: "GET",
      headers: { "Content-type": "application/json", "Request-type": "api" },
      credentials: "same-origin",
   })
   .then(response => {
      return response.json()
   })
}


export function absorbEvent(evt) {
   evt.preventDefault()
   evt.stopPropagation()
}

// assuming that both objects have the same properties
export function getUnmatchingKeys(a, b) {
   const diffKeys = []
   for(let key in a) {
      if (a[key] != b[key]) diffKeys.push(key)
   }
   return diffKeys
}