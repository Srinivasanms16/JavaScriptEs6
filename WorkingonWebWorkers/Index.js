(function() {
  var worker = new Worker("webWorker.js");
  worker.postMessage({ name: "srini" });
  worker.addEventListener("message", function(event) {
    console.log(`data from web worker is ${event.data.result}`);
  });
})();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function(event) {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(data => {
        console.log(`Service Worker Registered Successfully ${data.scope}`);
      })
      .catch(error => {
        Console.log(`Service worker is not registered - ${error.log}`);
      });
  });
}
