//console.log("hi");
var TypeClass = /** @class */ (function () {
    function TypeClass(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    TypeClass.prototype.display = function () {
        console.log("name is " + this._name + " and age is " + this._age);
    };
    Object.defineProperty(TypeClass.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return TypeClass;
}());
var obj = new TypeClass("srini", 2);
obj.display();
obj.Name = "vasan";
obj.display();
