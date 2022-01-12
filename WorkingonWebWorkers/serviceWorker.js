self.addEventListener("install", function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches
      .open("v2")
      .then(cache => {
        debugger;
        cache.addAll([
          "/my.html",
          "/Index.js",
          "/webWorker.js",
          "/Ganesh2.jpg",
          "/Ganesha1.jpg"
        ]);
      })
      .catch(error => {
        console.log("cache not happned");
      })
  );
});

self.addEventListener("activate", function(event) {
  debugger;
  console.log("2.Service Worker Activated Successfully");
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        debugger;
        if (response != null) {
          return response;
        }
        fetch(event.request).then(response => {
          caches
            .open("v2")
            .then(cache => {
              cache.put(event.request, response);
            })
            .catch(error => {
              console.log("Error in updating the cache");
            });
          return response;
        });
      })
      .catch(error => {
        console.log("Error will processing fetch");
      })
  );
});
