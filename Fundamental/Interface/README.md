# 인터페이스

## 타입스크립트에서 인터페이스란?
- 인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미한다.
- [o] 객체의 스펙(속성과 속성의 타입)
- [o] 함수의 파라미터
- [o] 함수의 스펙(파라미터, 반환 타입 등)
- [o] 배열과 객체를 접근하는 방식
- [o] 클래스

## 인터페이스 기본적인 예제
```typescript
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
```
- logAge 함수에서 인자를 받을 때 타입 뿐만이 아닌 개체의 속성 타입까지 정의할 수 있다.
- 인터페이스를 인자로 받아 사용할 때 인터페이스의 속성 갯수를 일치시키지 않아도 된다. 즉 인터페이스에 정의된 속성과 타입만 만족한다면 객체의 속성 갯수가 많아져도 상관이 없다.

## 인터페이스 옵션 속성
- 인터페이스를 사용할 때 인터페이스에 정의되어 있는 속성을 모두 사용할 필요가 없다.
```typescript
    interface CraftBeer {
        name: string;
        hop?: number; // 이와같이 속성 끝에 ? 를 붙인다.
    }

    let myBeer = {
        name: 'Saporo'
    };

    function brewBeer(beer: CraftBeer) {
        console.log(beer.name);
    }

    brewBeer(myBeer);
```
- hop에 옵션속성을 선언함으로서 brewBeer() 함수에서 Beer 인터페이스를 인자의 타입으로 선언하며, hop 속성이 없는 객체를 만든다.
- 옵션 속성의 장점은 속성을 선택적으로 적용할 수 있다는 장점 뿐만 아니라 인터페이스에 정의되어 있지 않은 속성에 대해 인지시켜 준다는 것이다.

## 인터페이스 읽기 전용 속성
-- 읽기 전용 속성은 객체를 최초로 생성할 때 값만 할당하고 그 이후에는 수정할 수 없도록 하는 속성을 의미한다. 문법 사용 방법은 readonly를 붙이면 된다.
```typescript
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
```

## 타입 체킹
- 타입스크립트는 인터페이스를 활용하여 객체를 선언할 때 엄밀한 속성 검사를 진행한다.
```typescript
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
```


## 함수 타입
- 인터페이스는 함수의 타입을 정의할 때도 사용할 수 있다.
```typescript
    interface login {
        (user: string, password: string): boolean;
    }
    // 함수의 인자의 타입과 반환 값의 타입을 정한다.
    let loginUser: login;
    loginUser = (id: string, pw: string) => {
        console.log(`id = ${id}, password = ${pw} 로그인 완료`);
        return true;
    }
    loginUser('jeehoon','1234');
```

## 클래스 타입
- 클래스가 일정 조건을 만족하도록 타입 규칙을 설정할 수 있다.
```typescript
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
```

## 인터페이스 확장
- 클래스와 마찬가지로 인터페이스도 확장이 가능하다.
- - 아래와 같이 상속받아 사용이 가능하다.
```typescript
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
```