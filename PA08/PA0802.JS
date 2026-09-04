//PA0802&0803
//This creates a name for our cache

const CACHE_NAME="Tech conference"

//This is the list of files that should be cached

const filesToCache = [
    
    "index.html" ,
    "style.css" ,
    "./app.js" 
]

//Save important files in the cache

self.addEventListener("install" , function(event){
    event.waitUntil(
        cache.open(CACHE_NAME)
        .then(function(cache){
            console.log("CACHING WEBSITE FILE. . .");
            return cache.addAll(filesToCache)
        })
        
    )
})