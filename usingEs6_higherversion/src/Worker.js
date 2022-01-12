self.addEventListener("message", function(event) {
  debugger;
  self.postMessage({ result: `data from webWorker is ${event.data.name}` });
});
