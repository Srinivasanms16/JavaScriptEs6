self.addEventListener("message", function(event) {
  self.postMessage({ result: `data is ${event.data.name}` });
});
