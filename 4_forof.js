console.log("For of");
//it use to iterate the iteratables.
const nums = [5, 10, 15];

let total = 0;

for (const num of nums) {
  console.log(num);
  total += num;
}
console.log(total);

const name = "srinivasan";

for (const item of name) {
  console.log(item);
}
