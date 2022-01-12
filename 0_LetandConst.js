//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
//Variables and constants declared with let or const are not hoisted!

if (true) {
  num = 5;
  console.log(num);
}
var num;

//Due to javaScript hoisting behaviour. var num will be moved up .
/* var num;
if (true) {
  num = 5;
  console.log(num);
} */

//lets use Let keyword. scope of the variable is within the block.

/*if (true) {
  num = 5;
  console.log(num);
}
let num;*/

//Const keyword. once its value is inilized it cannot changed for primitive data type.
//for obejct types value can be altered butnot the type .

/*if (true) {
  const num = 5;
  num = 6;
  console.log(num);
}*/
