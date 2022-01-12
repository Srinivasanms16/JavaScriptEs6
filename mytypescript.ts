//console.log("hi");

class TypeClass {
  constructor(private _name: string, private _age: number) {}

  display() {
    console.log(`name is ${this._name} and age is ${this._age}`);
  }
  get Name() {
    return this._name;
  }

  set Name(name: string) {
    this._name = name;
  }
}

let obj = new TypeClass("srini", 2);
obj.display();
obj.Name = "vasan";
obj.display();
