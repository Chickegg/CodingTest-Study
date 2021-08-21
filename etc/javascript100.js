// function solution(s) {
//     s.splice(2, 0, 10000);
//     return s
// }

// let nums = [200, 100, 300,];
// console.log(solution(nums));

// let arr = [100, 200, 300];
// console.log(typeof(arr));
// // arr은 object이다.
// let a = 2.22;
// console.log(typeof(a));

// let a = 10;
// let b = 2;

// for(let i = 1; i < 5; i +=2) {
//     a += i;
// }
// console.log(a + b);

// console.log(typeof(NaN));

// JavaScript 중 false로 취급하는것들
// NaN , 0 , "", undefined, false

/// 문제7 : 변수명
// 변수의 맨앞에는 숫자가올수없고
// 변수의 앞과뒤에는 &가올수없다.
// 연산자같이 그런거는 올수없네

// 객체를 key와 value로 만들었을때
// 동일한 key값이 있다면 뒤에것이 나온다.

// let year = '2019';
// let month = '04';
// let day = '26';
// let hour = '11';
// // let minute = '34';
// // let second = '27';

// // let result = year +'/' + month + '/' + day + ' ' + hour +':'+minute+':'+second;

// // console.log(result);

// // 문제10 : 별 찍기;

// // let jump = ' ';
// // let star = '*';
// // let i = 1;

// // for(let j = 4; j >= 0; j--) {
// // //     console.log(jump.repeat(j) + star.repeat(i) + jump.repeat(j));
// // //     i += 2;
// // // }

/// 문제11 : for를 이요한 기본 활용
// 1~100까지 더하시오.

// let s = 0;
// for(let i = 1; i <= 100; i++) {
//     s += i;
// }
// console.log(s);

//// 문제 12 : 게임 캐릭터 클래스 만들기
//데이터
// class Wizard {
//     constructor(health, mana, armor) {
//         this.health = health;
//         this.mana = mana;
//         this.armor = armor;
//     }
//     attack() {
//         return console.log("파이어볼");
//     }
// };

// const x = new Wizard(545);
// console.log(x.health, x.mana, x.armor);
// x.attack();

// console.log(1);

const planet = ["수성","금성","지구","화성","목성","토성","천왕성","명왕성"];

var n = prompt("몇번째?");

if(n > 8) {
    console.log("없어그런거")
} else {
    console.log(planet[n - 1]);
}