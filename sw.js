const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      "/index.html",
      "/app.js",
      "/gallery/bountyHunters.jpg",
      "/gallery/myLittleVader.jpg",
      "/gallery/snowTroopers.jpg",
      "/gallery/wifi-off.svg",
      "/gallery/wifi-on.jpg"
    ]),
  );
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


  