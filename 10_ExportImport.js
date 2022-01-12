/* The export statement is used when creating JavaScript modules to export functions, objects, 
or primitive values from the module so they can be used by other programs with the import 
statement. */

/*
They are two type 
1)Named -> we can have any number of named type.
2)default -> we have only one.
*/

let employeeObject = {
  Fname: "srini",
  Lname: "Amar",
  City: "Chennai",
  State: "TN"
};

let num = 166;

//export default employeeObject;
console.log("Exporting the employeeObject");
