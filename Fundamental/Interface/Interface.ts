/* 인터페이스 예 */
let person = { name: 'Capt', age: 29};

function logAge(obj: { age: number }){
    console.log(obj.age);
}
logAge(person);

interface personAge {
    age: number;
}

function loaAge2(obj: personAge){
    console.log(obj.age);
}
loaAge2(person);


/* 옵션 속성 */
/* EX
interface 인터페이스_이름 {
    속성?: 타입;
}
*/

interface CraftBeer {
    name: string;
    hop?: number;
}

let myBeer = {
    name: 'Saporo'
};

function brewBeer(beer: CraftBeer) {
    console.log(beer.name);
}

brewBeer(myBeer);


/* 읽기 전용 속성 */
interface readOnlyInterface {
    readonly brand: string;
}
let myBag: readOnlyInterface = {
    brand: 'Korean bag'
}
// myBag.brand = 'Korean~~ bag!?'; // 읽기 전용 속성 에러

/* 읽기 전용 배열 */
let readOnlyArr: ReadonlyArray<number> = [1,2,3];
// readOnlyArr.splice(0,1); // error
// readOnlyArr.push(4); // error
// readOnlyArr[0] = 111; // error

/* 타입 체킹 */
interface TypeChecking {
    brand?: string;
}

interface TypeChecking2 {
    brand?: string
    [propName: string]: any;
}

function typeCheckingFnc(beer: TypeChecking){
    console.log(beer);
}
// typeCheckingFnc({ brandon: 'what' }) // error

let myChecking = { brandon: 'what' };
typeCheckingFnc(myChecking as TypeChecking);

/* 함수 타입 */
interface login {
    (user: string, password: string): boolean;
}

let loginUser: login;
loginUser = (id: string, pw: string) => {
    console.log(`id = ${id}, password = ${pw} 로그인 완료`);
    return true;
}
loginUser('jeehoon','1234');

/* 클래스 타입 */
interface classType {
    className: string;
    nameClass(name: string): void;
}

class myClass implements classType {
    className: string = '여기는 class 이름~';
    nameClass(b: string) {
        this.className = b;
    }
}

/* 인터페이스 확장 */
interface Person {
    name: string;
}
interface Drinker extends Developer {
    drink: string;
}
interface Developer extends Person {
    skill: string;
}
let fe = {} as Developer;
fe.name = 'jeehoon';
fe.skill = 'front';

let fe2 = {} as Drinker;
fe2.name = 'jeehoon';
fe2.drink = '??';
fe2.skill = 'front';

/* 하이브리드 타입 */
interface hybridType {
    (brid: string): string;
    hyb: string;
    brew(): void;
}

function myHybrid(): hybridType {
    let my = (function(brid: string) {}) as hybridType;
    my.hyb = '안녕 하이브리드야'
    my.brew = function() {};
    console.log(my);
    return my;
}

let brewedHybrid = myHybrid();
brewedHybrid('my hybrid check');
brewedHybrid.hyb = 'hyb check';
brewedHybrid.brew();