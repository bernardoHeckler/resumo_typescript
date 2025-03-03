"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// string, boolean, number, ...
let x = 10;
x = 25;
console.log(x);
// inferencia x annotation
let y = 12;
// y = "teste" nao consegu usar string
let z = 12;
// tipos básicos
let firstName = 'Bernardo';
let age = 2004 - 2025;
const isAdmin = true;
// String != string
console.log(typeof firstName);
firstName = 'Heckler';
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
// tuplas
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
console.log(myTuple);
// object literals -> {prop: value}
const user = {
    name: "Bernardo",
    age: 21
};
console.log(user);
console.log(user.name);
// user.job = 'programador'
// any
let a = 0;
a = 'teste';
a = 2;
a = [];
// union type
let id = '10';
id = 200;
const userId = 10;
const productId = '00001';
const shirtId = 123;
// enum
// tamanho de roupas (size: mpedio, size: pequeno...)
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: 'Camisa Pollo',
    size: size.P,
};
console.log(camisa);
// literal types
let teste;
// teste = 'outrovalor'
teste = 'autenticado';
teste = null;
// funções
function sum(a, b) {
    return a + b;
}
console.log(sum(30, 20));
// console.log(sum('12', true))
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Bernardo'));
function logger(msg) {
    console.log(msg);
}
logger('teste!');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    return console.log(`Olá ${name}`);
}
greeting('Bernardo');
greeting('Heckler', 'Sir');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 3, n2: 8 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(someNumbers));
// narrowing
// checagem de tipos
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`o numero é ${info}`);
        return;
    }
    console.log('Não foi passado um numero');
}
doSomething(5);
doSomething(true);
// generics <>
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArraysItems(a1);
showArraysItems(a2);
// classes
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`o nome do Admin é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`o cargo do usuario é ${this.role}`);
            return;
        }
        console.log("Informação Restrita!");
    }
}
;
const manoBernas = new User('ManoBernas', 'Admin', true);
console.log(manoBernas);
manoBernas.showUserName();
manoBernas.showUserRole(false);
class Car {
    brand;
    wheels;
    year;
    constructor(brand, wheels, year) {
        this.brand = brand;
        this.wheels = wheels;
        this.year = year;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
    showCarYear() {
        console.log(`o modelo do caro foi criado no ano de: ${this.year}`);
    }
}
const fusca = new Car('VW', 4, 1953);
fusca.showBrand();
fusca.showCarYear();
// herança
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, year, engine) {
        super(brand, wheels, year);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 2004, 2.0);
console.log(a4);
a4.showBrand();
a4.showCarYear();
// decorators
// constructor decorator
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person('Sam');
console.log(sam);
//https://youtu.be/lCemyQeSCV8?si=cnJd5FtGtxtcbMqG
