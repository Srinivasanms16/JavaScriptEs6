function cube(num = 0) {
  return num * num * num;
}

class emp {
  constructor(name, state, city) {
    (this.name = name), (this.state = state), (this.city = city);
  }
  numofexp() {
    console.log("no information");
  }
}

class empwithexp extends emp {
  constructor(name, state, city, exp) {
    super(name, state, city);
    this.exp = exp;
  }
  numofexp() {
    console.log(`Employee ${this.name} is ${this.exp} experience`);
  }
}

let emp1 = new emp("srini", "TN", "chennai");

let empexp1 = new empwithexp("srini", "TN", "chennai", 3);

export { emp1, cube, empexp1 };

export default 465;
