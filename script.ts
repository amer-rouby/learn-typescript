// number
let num: number = 1;
// string
let str: string;
// boolean
let isComplete: boolean = false;

// ES6 Function && reset operator
const add = (a:number, b:number, ...param:number[]): number => {
    let sum = 0;
    sum = a + b;

    if(param.length){
        for(let item of param){
            sum += item;
        };
    };

    return sum;
};

console.log(add(1, 2, 5,6,8,4,5,82,4445));

// JS function && reset operator
function add2(a:number, b:number, ...param:number[]): number {
    let sum = 0;
    sum = a + b;

    if(param.length){
        for(let item of param){
            sum += item;
        }
    }

    return sum;
};

// array
let arr:number[] = [1,2,35,22];
// tuple
let tuple:[number, string, number[]] = [1, 'sss', [1,2,3]];

// distructing
let [x, y, z] = [...tuple];
console.log(x,y,z);

// object && "?" option
let obj: {name: string, age?: number} = {
    name: "amer",
    age: 22
};

// Enum 
enum Directions {
    RIGHT = "right",
    LEFT = "left",
    UP = "up",
    Down = "down",
}

console.log(Directions.Down);


// Interface
interface User {
    email: string,
    password: string,
    age: number,
    salary?: number,
    getSalary: (param: number) => number
};

let obj3: User = {
    email: "amr@mm.com",
    password: "dddddd",
    age: 22,
    salary: 5000,
    getSalary: (salary) => salary
};
 

console.log(obj3);
console.log(obj3.getSalary(5555));

// classes
class Polygon {
    height: number;
    weight: number;
    constructor(h: number, w: number){
        this.height = h;
        this.weight = w;
    }
    
    test(){
        console.log(this.height);
    }

    getWeight(){
        return this.weight;
    }
}

let poly1 = new Polygon(1.7, 80);
let poly2 = new Polygon(1.9, 90);
console.log(poly1);
console.log(poly1.test());
console.log(poly1.getWeight());
console.log(poly2);
console.log(poly2.test());
console.log(poly2.getWeight());

// inheritance
class NewPolygon extends Polygon {
    price: number;
    constructor(h: number, w: number, price: number){
        super(h, w);
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
}

let poly3 = new NewPolygon(2, 110, 3000);
 let poly4 = new NewPolygon(2.1, 120, 4000);
console.log(poly3);
console.log(poly3.test());
console.log(poly3.getWeight());
console.log(poly4);
console.log(poly4.test());
console.log(poly4.getWeight());

// interface with class
interface Login {
    username: string;
    password: string;
    getLoginUser: () => {}
}

class LoginClass implements Login {
    username: string;
    password: string;
    constructor(name: string, pass: string){
        this.username = name;
        this.password = pass;
    }
    getLoginUser(){
        return this;
    }
};

let obj6 = new LoginClass("amer", "1234");
let obj7 = new LoginClass("ahmed", "56789");
console.log(obj6.getLoginUser());
console.log(obj7.getLoginUser());


