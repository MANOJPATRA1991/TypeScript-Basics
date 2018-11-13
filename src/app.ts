/**
 * ARROW FUNCTIONS DEMO
 */

// console.log('Ahoy TypeScript!');

// const pizzas = [
//     { name: 'Pepperoni', toppings: ['pepperoni'] }
// ];

// const mappedPizza = pizzas.map(pizza => pizza.name.toUpperCase());

// console.log(mappedPizza);

// const pizza = {
    // name: 'Blazing Inferno',
    // getName: function() {
    //     // const self = this;
    //     setTimeout(() => {
    //         console.log(this.name);
    //     }, 100);
    // }
    // getName: () => pizza.name,
// };

// console.log(pizza.getName());

// ---------------------------------------------------------------------------------------- // 

/**
 * DEFAULT FUNCTION PARAMETERS DEMO
 */

// function multiply(a: number, b = 25) {
    // if (!b) {
    //     b = 25;
    // }

    // return a * b;
// }

// console.log(multiply(5));
// console.log(multiply(5, 35));

// ---------------------------------------------------------------------------------------- //

/**
 * OBJECT LITERAL IMPROVEMENTS DEMO
 */

// const pizza = {
//     name: 'Pepperoni',
//     price: 15,
//     // getName: function () {
//     //     return this.name;
//     // }
//     // getName () => {
//     //     return this.name;
//     // }
//     getName() {
//         return this.name;
//     }
// };

// console.log(pizza.getName());

// const toppings = ['pepperoni'];

// const order = {
//     pizza: pizza,
//     toppings: toppings
// };

//  In ES6, we do the above as follows:

// 1.
// const order = { pizza, toppings };

// 2.
// function createOrder(pizza: any, toppingForPizza: Array<string>) {
//     return { pizza, toppingForPizza };
// }

// console.log(createOrder(pizza, toppings));

// ---------------------------------------------------------------------------------------- //

/**
 * REST PARAMETERS DEMO
 */

// function sumAll(arr: Array<number>) {
//     return arr.reduce((prev, next) => prev + next);
// }

// const sum = sumAll([1,2,3,4,5,6,7,8,9,10]);
// console.log(sum);

// Improved way of doing what we did above is as follows:

// function sumAll(message: string, ...arr: Array<number>) {
//     // console.log(message);
//     // console.log(arguments);
//     //  |
//     // \/
//     /**
//      * { '0': 'Hello!',
//         '1': 1,
//         '2': 2,
//         '3': 3,
//         '4': 4,
//         '5': 5,
//         '6': 6,
//         '7': 7,
//         '8': 8,
//         '9': 9,
//         '10': 10 }
//      */

//     return arr.reduce((prev, next) => prev + next);
// }

// const sum = sumAll('Hello!', 1,2,3,4,5,6,7,8,9,10);
// console.log(sum);

// ---------------------------------------------------------------------------------------- //

/**
 * ARRAY SPREAD OPERATOR DEMO
 */

// const toppings = ['bacon', 'chilli'];

// const newToppings = ['pepperoni'];

// // Does not keep references to toppings and newToppings, but
// // creates copies of both and puts those copies into allToppings

// // Useful when dealing with immutable objects or patterns
// const allToppings = [...newToppings, ...toppings];

// console.log(allToppings);

// ---------------------------------------------------------------------------------------- //

/**
 *OBJECT DESTRUCTURING DEMO
 */

// const pizza = {
//     name: 'Pepperoni',
//     toppings: ['pepperoni']
// };

// // function order({ name, toppings }) {
// //     console.log(name, toppings);
// // }

// // Mapping properties of an object to different variables
// function order({ name: pizzaName, toppings: pizzaToppings }: any) {
//     // console.log(pizzaName, pizzaToppings);
//     return { pizzaName, pizzaToppings };
// }

// const { pizzaName } = order(pizza);
// console.log(pizzaName);

// ---------------------------------------------------------------------------------------- //

/**
 * ARRAY DESTRUCTURING DEMO
 */

// const toppings = ['pepperoni', 'bacon', 'chilli'];

// const firstItem = toppings[0];

// The above code can be executed with ES6 syntax as follows:
// const [ first, second, third ] = toppings;
// console.log(first, second, third);

// Mapping array elements to variables
// function logToppings([ first, second, third ]: any) {
//     console.log(first, second, third);
// }

// logToppings(toppings);

// ---------------------------------------------------------------------------------------- //

/**
 * PRIMITIVE NUMBER TYPE DEMO
 */

// JavaScript types
//  new Number();
//  15
// new Boolean();
// new String();

// TypeScript types are all lowercase

// const pizzaCost: number = 10; // Cost of a pizza
// const pizzaToppings: number = 2; // Amount of toppings we can have on a pizza

// function calculatePrice(cost: number, toppings: number): number {
//     return cost + 1.5 * toppings;
// }

// const cost: number = calculatePrice(pizzaCost, pizzaToppings);

// console.log(`Pizza costs: ${cost}`);

// ---------------------------------------------------------------------------------------- //

/**
 * PRIMITIVE STRING TYPE DEMO
 */

// const coupon: string = 'pizza25'; // underneath it's calling new String()

// function normalizeCoupon(code: string): string {
//     return code.toUpperCase();
// }

// const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

// console.log(couponMessage);

// ---------------------------------------------------------------------------------------- //

/**
 * PRIMITIVE BOOLEAN TYPE DEMO
 */

// const pizzas: number = 5;

// function offerDiscount(orders: number): boolean {
//     return orders >= 3;
// }

// if (offerDiscount(pizzas)) {
//     console.log(`You're entitled to a discount!`);
// } else {
//     console.log(`Order more than 3 pizzas for a discount!`);  
// }

// ---------------------------------------------------------------------------------------- //

/**
 * SPECIAL ANY TYPE DEMO
 */

// let coupon: any;

// coupon = 25;
// coupon = 'pizza25';
// coupon = true;

// ---------------------------------------------------------------------------------------- //

/**
 * IMPLICIT VS. EXPLICIT TYPES DEMO
 */

// let implicitCoupon = 'pizza25';
// let explicitCoupon: string;
// explicitCoupon = 'pizza25'; 

// ---------------------------------------------------------------------------------------- //

/**
 * VOID TYPE DEMO
 */

// // It doesn't exist in the JavaScript language.
// // Void type means no type at all.

// // A pure function is a function which won't mutate any values outside of its scope.

// let selectedTopping: string = 'pepperoni';

// function selectedToppingModifier(topping: string): void {
//     selectedTopping = topping;
// }

// selectedToppingModifier('bacon');

// console.log(selectedTopping);

// ---------------------------------------------------------------------------------------- //

/**
 * NEVER TYPE DEMO
 */

// // A never type tells the tsc that a value will never occur.

// // We may use never type when the return type never actually returns anything
// // or in our case, throwing an error, which means we are never going to continue down
// function orderError(error: string): never {
//     throw new Error(error);
//     // never going to return a value!
// }

// orderError('Something went wrong');

// ---------------------------------------------------------------------------------------- //

/**
 * NULL, UNDEFINED, STRICT NULL CHECKS DEMO
 */

// let coupon: string | null = 'pizza25';

// function removeCoupon(): void {
//     coupon = null;
// }

// console.log(coupon);

// removeCoupon();

// console.log(coupon);

// ---------------------------------------------------------------------------------------- //

/**
 * UNION AND LITERAL TYPES DEMO
 */

// let pizzaSize: string = 'small';

// function selectSize(size: 'small' | 'medium' | 'large'): void {
//     pizzaSize = size;
// }

// selectSize('large');

// let pizzaSize: number = 1;

// function selectSize(size: 1 | 2 | 3): void {
//     pizzaSize = size;
// }

// selectSize(2);


// console.log(`Pizza size: ${pizzaSize}`);

// ---------------------------------------------------------------------------------------- //

/**
 * FUNCTION TYPES DEMO
 */

// function sumOrder(price: number, quantity: number): number {
//     return price * quantity;
// }

// Be explicit
// let sumOrder: Function; // Used when we have no idea about the signature of the function

// Be more explicit
// let sumOrder: (price: number, quantity: number) => number;

// sumOrder = (x, y) => x * y;

// const sum = sumOrder(25, 2);

// console.log(`Total sum: ${sum}`);

// ---------------------------------------------------------------------------------------- //

/**
 * FUNCTIONS AND OPTIONAL ARGUMENTS DEMO
 */

// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y) => {
//     if (y) {
//         return x * y;
//     }
//     return x;
// }

// const sum = sumOrder(25);

// console.log(`Total sum: ${sum}`);

// ---------------------------------------------------------------------------------------- //

/**
 * TYPED FUNCTIONS AND DEFAULT PARAMS DEMO
 */

// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y) => {
//     const q = y || 1; // if y is available the y otherwise 1
//     return x * q;
// }

// sumOrder = (x, y = 1) => x * y;

// const sum = sumOrder(25, 5);

// console.log(`Total sum: ${sum}`);

// ---------------------------------------------------------------------------------------- //

/**
 * OBJECT TYPES DEMO
 */

// let pizza: { name: string; price: number; getName(): string };

// pizza = {
//     name: 'Plain Old Pepperoni',
//     price: 20,
//     getName() {
//         return pizza.name;
//     }
// };

// console.log(pizza.getName());

// ---------------------------------------------------------------------------------------- //

/**
 * ARRAY TYPES AND GENERICS DEMO
 */

// let sizes: number[];
// sizes = [1, 2, 3];

// let toppings: Array<string>;
// toppings = ['pepperoni', 'tomato', 'bacon'];

// ---------------------------------------------------------------------------------------- //

/**
 * TUPLE TYPES FOR ARRAYS DEMO
 */

// // The order must be maintained
// let pizza: [string, number, boolean];
// pizza = ['Pepperoni', 20, true];

// ---------------------------------------------------------------------------------------- //

/**
 * TYPE ALIASES DEMO
 */

// // Doesn't compile down to JS code, purely virtual for type-checking purposes
// type Size = 'small' | 'medium' | 'large';
// type Callback = (size: Size) => void;

// let pizzaSize: Size = 'small';

// const selectSize: Callback = (x) => {
//     pizzaSize = x;
// };

// selectSize('medium');

// ---------------------------------------------------------------------------------------- //

/**
 * TYPE ASSERTIONS DEMO
 */

// type Pizza = { name: string, toppings: number };

// const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 };

// const serialized = JSON.stringify(pizza);

// function getNameFromJSON(obj: string): string {
//     // OLD WAY
//     // return (<Pizza>JSON.parse(obj)).toppings;

//     // NEW AND PREFERRED WAY
//     return (JSON.parse(obj) as Pizza).name;

// }

// getNameFromJSON(serialized);

// ---------------------------------------------------------------------------------------- //

/**
 * INTERFACES DEMO
 */

// // Interface is the preferred way when we are dealing with more complex
// // data structures or datasets

// // Interface is a special type in TypeScript which allows us to
// // define the structure or shape of a particular object

// interface Sizes {
//     sizes: string[];
// }

// interface Pizza extends Sizes {
//     name: string;
//     toppings?: number; // optional property
//     getAvailableSizes(): string[];
//     [key: number]: string; // index signatures
//     [key: string]: any;
// };

// // Index signatures are useful if we want to add more dynamic properties 
// // or more dynamic values to an object

// // type getAvailableSizes = () => string[];

// interface Pizzas {
//     data: Pizza[]
// };

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//     return {
//         name,
//         sizes,
//         getAvailableSizes() {
//             return this.sizes;
//         }
//     };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);
// pizza[1] = 'xyz';
// pizza.toppings = 1;

// ---------------------------------------------------------------------------------------- //

/**
 * CLASSES DEMO
 */

// Class is syntactic sugar for creating our own contructor function
// and prototypal inheritance

class Pizza {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

// JS way of creating classes

// function Pizza(name: string) {
//     this.name = name;
//     this.toppings = [];
// }

// Pizza.prototype.addTopping = function addTopping(topping: string) {
//     this.toppings.push(topping);
// };

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);