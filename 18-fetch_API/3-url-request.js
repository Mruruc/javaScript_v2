

// URL and Request Object:
/**
 * Url: href, host, hostname, port, protocol, origin, pathname, hash,search, searchParams.
 * 
 * Request: method, body, headers, cache.
 * 
 * Cache: 
 * -default : cache first, server request if stale, update cache if newer.
 * - reload : always go to server and update the cache. 
 * - no-store : always go to server but do not update the cache.
 * - no-cache : make a conditional request to server and compare,update the cache use latest.
 * - force-cache : only makes request if there is no HTTP Cache file.
 * -only-if-cache : from cache or 504 gateway timeout error.
 * 
 * Headers:
 * -string | object literal | new Headers().
 */



const urlStringFormat = 'https://api.github.com/users/Mruruc';
const url=new URL(urlStringFormat);

/*
for (const key in url) {
  console.log(key +': '+ url[key])
  } 

*/

const request=new Request(url,{
 // headers:{},
  method: 'GET',
  cache: 'no-store'
});
for (const key in request) {
  console.log(key + ': ' + request[key]);
} 

 // console.log(request);

fetch(request)
.then((response)=>{
  if(!response.ok) throw new Error('Oppss');
  return response.json();
})
.then((data)=>{
  console.log(data)
}
)
.catch((error)=>{
  console.log(error)
});         