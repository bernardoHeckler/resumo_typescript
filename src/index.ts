// string, boolean, number, ...
let x: number = 10;

x = 25;

console.log(x);

// inferencia x annotation
let y = 12;

// y = "teste" nao consegu usar string

let z: number = 12;

// tipos básicos

let firstName: string = 'Bernardo'
let age: number = 2004 - 2025
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName)

firstName = 'Heckler';

console.log(firstName);

// object

const myNumbers: number[] = [1, 2, 3]


console.log(myNumbers)

console.log(myNumbers.length)

console.log(firstName.toUpperCase());

myNumbers.push(5);

console.log(myNumbers);

// tuplas
let myTuple: [number, string, string[]]
myTuple = [5, 'teste', ['a', 'b']];

console.log(myTuple)

// object literals -> {prop: value}

const user: { name: string, age: number } = {
    name: "Bernardo",
    age: 21
};

console.log(user);

console.log(user.name);

// user.job = 'programador'

// any
let a: any = 0;

a = 'teste';
a = 2;
a = [];

// union type

let id: string | number = '10'

id = 200
// id = true
// id = []


// type allias

type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = '00001'
const shirtId: myIdType = 123

// enum
// tamanho de roupas (size: mpedio, size: pequeno...)

enum size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'
}

const camisa = {
    name: 'Camisa Pollo',
    size: size.P,
};

console.log(camisa);

// literal types
let teste: 'autenticado' | null;

// teste = 'outrovalor'
teste = 'autenticado';
teste = null;

// funções

function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(30, 20));
// console.log(sum('12', true))

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo('Bernardo'));

function logger(msg: string) {
    console.log(msg);
}

logger('teste!');

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    } return console.log(`Olá ${name}`);
}
greeting('Bernardo');
greeting('Heckler', 'Sir');

// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({ n1: 3, n2: 8 }));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10,
};

console.log(multiplyNumbers(someNumbers));

// narrowing
// checagem de tipos

function doSomething(info: number | boolean) {
    if (typeof info === 'number') {
        console.log(`o numero é ${info}`)
        return;
    }
    console.log('Não foi passado um numero');
}

doSomething(5);
doSomething(true);


// generics <>
function showArraysItems<T>(arr: T[]) {
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
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }
    showUserName() {
        console.log(`o nome do Admin é ${this.name}`);
    }
    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`o cargo do usuario é ${this.role}`);
            return;
        }
        console.log("Informação Restrita!");
    }
};

const manoBernas = new User('ManoBernas', 'Admin', true);
console.log(manoBernas);

manoBernas.showUserName();
manoBernas.showUserRole(false);

// interfaces em classes

interface IVehicle {
    brand: string
    showBrand(): void
    showCarYear(): void
}
class Car implements IVehicle {
    brand
    wheels
    year

    constructor(brand: string, wheels: number , year: number) {
        this.brand = brand
        this.wheels = wheels
        this.year = year
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
    showCarYear(): void{
        console.log(`o modelo do caro foi criado no ano de: ${this.year}`)
    }
}
const fusca = new Car('VW', 4, 1953);


fusca.showBrand();
fusca.showCarYear();

// herança

class SuperCar extends Car {
    engine;

    constructor(brand: string, wheels: number, year: number, engine: number){
        super(brand, wheels, year);
        this.engine = engine;
    }
}
const a4 = new SuperCar ('Audi', 4, 2004, 2.0);
console.log(a4);

a4.showBrand();
a4.showCarYear();


// decorators

// constructor decorator
function BaseParameters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random()
            createdAt = new Date();
        }
    }
}

@BaseParameters()

class Person {
    name

    constructor(name: string){
        this.name = name
    }
}

const sam = new Person('Sam');
console.log(sam);






//https://youtu.be/lCemyQeSCV8?si=cnJd5FtGtxtcbMqG