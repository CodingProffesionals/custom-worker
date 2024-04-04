const cacheName = "MyCache_1";
const precachedResources = ["/", "/app.js", "/style.css","/gallery/wifi-off.svg","/gallery/wifi-on.jpg"];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

// service-worker.js
function sendMessage(){
  console.log('in the sendMessage function');
}
self.addEventListener("sync", (event) => {
  console.log('called sync');
  if (event.tag == "send-message") {
    event.waitUntil(sendMessage());
  }
});


  