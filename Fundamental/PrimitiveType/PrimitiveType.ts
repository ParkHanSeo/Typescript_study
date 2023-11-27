// String
let str: string = 'hi';
console.log(str); // hi

// Number
let num: number = 10;
console.log(num);

// Boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn);

/* Object */

// Array
let numArr: number[] = [1,2,3];
console.log(numArr);
let numArr2: Array<number> = [1,2,3];
console.log(numArr2);

// Tuple
let tupleArr: [string, number] = ['hi', 10];
console.log(tupleArr);

// Enum
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;
console.log(hero);

// any
let anyStr: any = 'hi';
console.log(anyStr);
let anyNum: any = 10;
console.log(anyNum);
let anyArr: any = ['a', 2, true];
console.log(anyArr);

// void
printSomething();
function printSomething(): void {
    console.log('void log...');
}

// Never
// neverEnd();
function neverEnd(): never {
    while (true) {

    }
}