function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',// 객체의 name 속성을 '검둥이'로 설정
    bark: function () {
      console.log(this.name + ' : 멍멍! ');// 객체의 name 속성과 함께 '멍멍!' 출력
    }
  }
}

const blackDog = new BlackDog();
blackDog.bark(); // 검둥이: 멍멍!

function WhiteDog() {
  this.name = '흰둥이';// name 속성을 '흰둥이'로 설정 (이후 덮어씌워질 값)
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ' : 멍멍! ');// 화살표 함수에서의 this는 외부 스코프의 this를 따르므로 문제 발생
    }
  }
}

const whiteDog = new WhiteDog();
whiteDog.bark(); // 흰둥이: 멍멍!

//생성자 함수 내에서 반환된 객체를 이용하여 두 개의 개별적인 개 객체를 생성하고 그들의 bark 메서드를 호출하는 것.
//화살표 함수의 this의 동작 방식  - 일반함수와 차이점 알아보기 