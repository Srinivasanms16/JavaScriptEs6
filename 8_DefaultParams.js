console.log("Default Parameter");

function sum(num = []) {
  if (num.length > 0) {
    console.log(num.reduce((total, currentValue) => total + currentValue));
  }
  console.log("Default value");
}
//We cannot have default value for rest parameter.
sum();
