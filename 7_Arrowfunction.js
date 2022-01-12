console.log("Arrow fuction");

function sum(...num) {
  const sumArray = num.reduce(getsum);
  console.log(`sum of items in the array ${sumArray}`);
}

function getsum(total, currentValue) {
  return total + currentValue;
}

sum(1, 2, 3, 4, 5, 6);

//Arrow function.

function sum2(...num) {
  const sumArray = num.reduce((total, currentValue) => {
    return total + currentValue;
  });
  console.log(`sum of items in the array  ${sumArray}`);
}

sum2(1, 2, 3, 4, 5, 6);
