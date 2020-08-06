"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// number
var num = 1;
// string
var str;
// boolean
var isComplete = false;
// ES6 Function && reset operator
var add = function (a, b) {
    var param = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        param[_i - 2] = arguments[_i];
    }
    var sum = 0;
    sum = a + b;
    if (param.length) {
        for (var _a = 0, param_1 = param; _a < param_1.length; _a++) {
            var item = param_1[_a];
            sum += item;
        }
        ;
    }
    ;
    return sum;
};
console.log(add(1, 2, 5, 6, 8, 4, 5, 82, 4445));
// JS function && reset operator
function add2(a, b) {
    var param = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        param[_i - 2] = arguments[_i];
    }
    var sum = 0;
    sum = a + b;
    if (param.length) {
        for (var _a = 0, param_2 = param; _a < param_2.length; _a++) {
            var item = param_2[_a];
            sum += item;
        }
    }
    return sum;
}
;
// array
var arr = [1, 2, 35, 22];
// tuple
var tuple = [1, 'sss', [1, 2, 3]];
// distructing
var _a = __spreadArrays(tuple), x = _a[0], y = _a[1], z = _a[2];
console.log(x, y, z);
// object && "?" option
var obj = {
    name: "amer",
    age: 22
};
// Enum 
var Directions;
(function (Directions) {
    Directions["RIGHT"] = "right";
    Directions["LEFT"] = "left";
    Directions["UP"] = "up";
    Directions["Down"] = "down";
})(Directions || (Directions = {}));
console.log(Directions.Down);
;
var obj3 = {
    email: "amr@mm.com",
    password: "dddddd",
    age: 22,
    salary: 5000,
    getSalary: function (salary) { return salary; }
};
console.log(obj3);
console.log(obj3.getSalary(5555));
// classes
var Polygon = /** @class */ (function () {
    function Polygon(h, w) {
        this.height = h;
        this.weight = w;
    }
    Polygon.prototype.test = function () {
        console.log(this.height);
    };
    Polygon.prototype.getWeight = function () {
        return this.weight;
    };
    return Polygon;
}());
var poly1 = new Polygon(1.7, 80);
var poly2 = new Polygon(1.9, 90);
console.log(poly1);
console.log(poly1.test());
console.log(poly1.getWeight());
console.log(poly2);
console.log(poly2.test());
console.log(poly2.getWeight());
// inheritance
var NewPolygon = /** @class */ (function (_super) {
    __extends(NewPolygon, _super);
    function NewPolygon(h, w, price) {
        var _this = _super.call(this, h, w) || this;
        _this.price = price;
        return _this;
    }
    NewPolygon.prototype.getPrice = function () {
        return this.price;
    };
    return NewPolygon;
}(Polygon));
var poly3 = new NewPolygon(2, 110, 3000);
var poly4 = new NewPolygon(2.1, 120, 4000);
console.log(poly3);
console.log(poly3.test());
console.log(poly3.getWeight());
console.log(poly4);
console.log(poly4.test());
console.log(poly4.getWeight());
var LoginClass = /** @class */ (function () {
    function LoginClass(name, pass) {
        this.username = name;
        this.password = pass;
    }
    LoginClass.prototype.getLoginUser = function () {
        return this;
    };
    return LoginClass;
}());
;
var obj6 = new LoginClass("amer", "1234");
var obj7 = new LoginClass("ahmed", "56789");
console.log(obj6.getLoginUser());
console.log(obj7.getLoginUser());
