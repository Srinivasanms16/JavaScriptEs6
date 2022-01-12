import empCode, { emp1, cube, empexp1 } from "./modules/importexport";
import { promise1 } from "./modules/AsyncProgramming";
import Worker from "worker-loader!./Worker.js";

console.log("Testing web Worker");
debugger;
let worker = new Worker();
worker.postMessage({ name: "srinivasan A" });
worker.addEventListener("message", function(event) {
  console.log(`Message posted is ${event.data.result}`);
});

// console.log(`Employee Code : ${empCode}`);

// let { name, city } = emp1;

// console.log(`Employee name is ${name} and his city is ${city}`);

// empexp1.numofexp();

// console.log(`cube of 3 is ${cube(3)}`);

// function do_a() {
//   // simulate a time consuming function

//   setTimeout(function() {
//     console.log(`do_a is first`);
//   }, 1000);
//   console.log("inside the do_a");
// }

// function do_b() {
//   console.log(`do_b is second`);
// }

// do_a();
// do_b();

// let isWorkDone = false;

// let workcompleted = new Promise(function(resolve, reject) {
//   if (isWorkDone) {
//     resolve(`completed.`);
//   } else {
//     reject(`work not completed.`);
//   }
// });

// /*workcompleted
//   .then(function(result) {
//     return new Promise(function(resolve, reject) {
//       if (result === `completed.`) {
//         console.log(`Resolved-called 1st ${result}`);
//         resolve("work completed");
//       } else {
//         console.log(`called 1st ${result}`);
//         reject(`work not completed.`);
//       }
//     });
//   })
//   .then(function(result) {
//     console.log(`Resolved-called 2nd ${result}`);
//   })
//   .catch(function(result) {
//     console.log(`Rejected-called 2nd ${result}`);
//   })
//   .catch(function(result) {
//     console.log(`Rejected-called 1st ${result}`);
//   });*/

// function abc(result) {
//   let a = new Promise(function(resolve, reject) {
//     if (result === `completed.`) {
//       console.log(`Resolved-called 1st ${result}`);
//       resolve("work completed");
//     } else {
//       console.log(`called 1st ${result}`);
//       reject(`work not completed.`);
//     }
//   });

//   a.then(function(result) {
//     console.log(`Resolved-called 2nd ${result}`);
//   }).catch(function(result) {
//     console.log(`Rejected-called 2nd ${result}`);
//   });
// }
// console.log(`latest promise`);
// console.log(`latest promise`);
// promise1(true)
//   .then(
//     function(result) {
//       console.log(`1 success fuction called - ${result}`);
//       return 1;
//     },
//     function(result) {
//       console.log(`1 faliure fuction called - ${result}`);
//       return -1;
//     }
//   )
//   .then(
//     function(result) {
//       console.log(`2 success fuction called - ${result}`);
//       return 2;
//     },
//     function(result) {
//       console.log(`2 faliure fuction called - ${result}`);
//       return -2;
//     }
//   )
//   .then(
//     function(result) {
//       console.log(`3 success fuction called - ${result}`);
//       return -3;
//     },
//     function(result) {
//       console.log(`3 faliure fuction called - ${result}`);
//       return -3;
//     }
//   );

// workcompleted.then(abc).catch(function(result) {
//   console.log(`Rejected-called 1st ${result}`);
// });

// //console.log(`completed`);

// //console.log("my function is called waiting for result ......");
