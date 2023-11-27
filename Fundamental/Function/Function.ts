/* 함수의 기본적인 타입 선언 */

// 이전 기본 자바스크립트 함수
// function javascript_sum(a, b) {
//     let sum = a+b;
//     console.log(sum);
//     return sum;
// }

// 타입스크립트 선언
function typescript_sum(a: number, b: number) {
    let sum = a+b;
    console.log(sum);
    return sum;
}

// void 선언
// 함수의 반환 값에 타입을 정하지 않을 때는 void라도 사용
function void_sum(a: number, b: number): void {
    let sum = a+b;
    console.log(sum);
}

/* 함수의 인자 */
function parameterSum(a: number, b: number): number {
    return a + b;
}
parameterSum(10, 20); // 30
// parameterSum(10, 20, 30); // error, too many parameters
// parameterSum(10); // error, too few parameters

function parameterSum2(a: number, b = '100'): number {
    return a + Number(b);
}
    parameterSum2(10, undefined); // 110
//  parameterSum2(10, 20, 30); // error, too many parameters
//  parameterSum2(10); // 110

/* ES6 문법 */
function ex6Sum(a: Number, ...nums: number[]): number {
    let totalOfNums = 0;
    for(let key in nums){
        totalOfNums += nums[key];
    }
    return totalOfNums;
;}

/* this */
/* 예시
function 함수명(this: 타입) {
    //...
}
*/
interface Vue {
    el: string,
    count: number,
    init(this: Vue): () => {}
}

let vm: Vue = {
    el: 'app',
    count: 10,
    init: function(this: Vue) {
        return () => {
            return this.count;
        }
    }
}

let getCount = vm.init();
let count = getCount();
console.log(count); // 10


/* Callback에서의 this */
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

// 잘못된 callback
// class Handler {
//     info: string;
//     onClick(this: Handler, e: Event) {
//         this.info = '?';
//     }
// }

// 수정 후
class Handler {
    info: string;
    onClick(this: void, e: Event){
        console.log('clicked');
    }
}
let handler = new Handler();
this.UIElement.addClickListener(handler.onClick);
