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