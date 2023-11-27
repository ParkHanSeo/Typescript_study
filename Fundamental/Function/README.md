# 함수

## 타입스크립트에서의 함수란
- [o] 함수의 파라미터 타입
- [o] 함수의 반환 타입
- [o] 함수의 구조 타입
총 이렇게 3가지 타입으로 정의할 수 있다.


## 함수의 기본적인 타입 선언 방법 
```javascript
    function typescript_sum(a: number, b: number) {
        let sum = a+b;
        return sum;
    }
```
- 기존 자바스크립트 함수의 선언 방식에서 파라미의 함수의 반환 값에 타입을 지정한다.
- 반환 값이 없을 때는 void를 사용한다.
```javascript
// ex) 
    function typescript_sum(a: number, b: number): void{
        let sum = a+b;
        return sum;
    }
```

## 함수의 인자
- 타입스크립트에서의 함수의 인자는 모두 필수 값이다. 이 뜻은 결국 리턴하는 값이 undifined, null 이라도 값이 필요하다는 뜻이다. 컴파일러에서 정의된 매개변수 값이 넘어 왔는지 확인한다. 
```javascript
    function parameterSum(a: number, b: number): number {
        return a + b;
    }
    parameterSum(10, 20); // 30
    parameterSum(10); // error
```
- 정의된 매개변수의 갯수 만큼 넘기는 자바스크립트와는 달리 타입스크립트는 반대되는 특성을 가지고 있다. 만약 자바스크립트의 특성을 가지고 가고 싶다면 ? 을 이용할 수 있다.
```javascript
    function parameterSum(a: number, b?: number): number {
        return a + b;
    }
    parameterSum(10, 20); // 30
    parameterSum(10); // error 없음
```
## this

### this의 활용
- 타입스크립트에서는 this가 잘못 사용되었을 때를 감지할 수 있다.
```javascript
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
```

### 콜백에서의 this의 활용
```javascript
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

// 잘못된 callback
class Handler {
    info: string;
    onClick(this: Handler, e: Event) {
        this.info = '?';
    }
}

// 수정 후
class Handler {
    info: string;
    onClick(this: void, e: Event){
        console.log('clicked');
    }
}
let handler = new Handler();
this.UIElement.addClickListener(handler.onClick);
```