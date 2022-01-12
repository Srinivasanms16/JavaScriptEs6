const promise1 = out =>
  new Promise(function(resolve, reject) {
    //true
    if (out === true) {
      setTimeout(() => {
        resolve("i am resolved");
      }, 2000);
    } else {
      setTimeout(() => {
        reject("I am rejected");
      }, 2000);
    }
  });

export { promise1 };

/*{
Promise systex -

inilizating promise:

var promise1 = new Promise(callbackfunction(successfunction , failurefunction){

    //Success
    if(true)
    {
        successfunction();
    }

    if(false)
    {
        failurefunction();
    }
})

//call or use  promise
1)
promise.then(successfunctiondefenition)
.catch(failurefunctiondefenition)

function successfunctiondefenition()
{
    console.log("success");
}

function failurefunctiondefenition()
{
    console.log("failure");
}

2)
promise.then(successfunctiondefenition,failurefunctiondefenition)

}*/
