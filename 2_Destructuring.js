const personalInformation = {
  firstname: "srini",
  lastname: "amar",
  city: "chennai"
};

console.log(personalInformation.firstname);

//Destructuring object.

const { firstname: fName, lastname: lName } = personalInformation;
console.log(`${fName} , ${lName}`);

//Destructuring Arrays.

const name = ["srini", "amar"];
[, last] = name;
console.log(last);
