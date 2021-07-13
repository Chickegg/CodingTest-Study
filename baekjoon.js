// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

/// 쉽게 푸는 문제 (🥈실버 4티어)

// let aaa = `3 7`;
// let input = aaa.split(' ');
// let a = input[0];
// let b = input[1];
// let list = [];
// let sum = 0;

// for(let i = 1; i <= b; i++) {
//     for(let j = 1; j <= i; j++) {
//         list.push(i);
//     }
// }

// for(let i = a - 1; i < b; i++) {
//     sum += list[i];
// }

// console.log(sum);


// 소수 (🥈실버 4티어)

// let input0 = `4
// 1 3 5 7 9 11 12`
// let input = input0.split('\n');
// let n = input[0]; // 4;
// let arr = input[1].split(' ');
// console.log(arr);

// let answer = 0;
// for(let x of arr) {
//     let o = 1;
//     if(x > 1) {    
//         for(let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
//             if(x % i === 0) {
//                 o = 0;
//                 break;
//             }
//         } 
//         if(o) answer++;      
//     }
// }
// console.log(answer);

//  N번째 큰 수 (🥈실버 5티어)

// let input0 = `4
// 1 2 3 4 5 6 7 8 9 1000
// 338 304 619 95 343 496 489 116 98 127
// 931 240 986 894 826 640 965 833 136 138
// 940 955 364 188 133 254 501 122 768 408`;

// let input = input0.split('\n');
// input.shift();

// let n = 3;
// let answer = [];
// for(let x of input) {
//       x = x.split(' ');
//       x.sort((a, b) => b - a);
//       answer.push(x[n - 1]);
// }
// console.log(answer.join('\n'));

// 소수 (🥈실버 4티어)

// let input0 = `64
// 120`;

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 체 이용 방법 //

// let input = input0.split('\n');
// let a = parseInt(input[0]);
// let b = parseInt(input[1]);
// let isPrimeNum= Array(parseInt(10000)).fill(1);
// isPrimeNum[0] = isPrimeNum[1] = 0;


// for(let i = 2; i <= Math.ceil(Math.sqrt(10000)); i++) {
//     let sum = 2;
//     if(isPrimeNum[i]) {
//         let sum = 2;
//         while(i * sum <= 100) {
//             isPrimeNum[i * sum] = 0;
//             sum++;
//         }
//     }
// }

// let answer = [];

// for(let i = a; i <= b; i++) {
//     if(isPrimeNum[i]) {
//         answer.push(i);
//     } 
// }
// let sum = answer.reduce((a, b) => a + b, 0);

// if(answer.length === 0) {
//     console.log(-1);
// } else {
//     console.log(sum);
//     console.log(answer[0]);
// }


// 2중 for문을 이용하는 방법 왜 틀렸다고 나오는지 모르겠다..
// let input0 = `64
// 65
//  `;

// let input = input0.split('\n').map(Number);
// let a = input.shift();
// let b = input.shift();

// const isPrimeNum = [];

// for(let i = a; i <= b; i++) {
//     // console.log(i);
//     let o = 1;
//     if(i > 1) {
//         for(let j = 2; j < i; j++) {
//             if(i % j === 0) {
//                 o = 0;
//                 break;
//             }
//         }
//     }
//     if(o) isPrimeNum.push(i);
// }

// let PrimeNumSum = isPrimeNum.reduce((a, b) => a + b, 0);

// if(isPrimeNum.length > 0) {
//     console.log(PrimeNumSum);
//     console.log(isPrimeNum[0]);
// } else console.log(-1);


// let input0 = `12
// Sunrin,Hair.`;

// let input = input0.split('\n');
// console.log(input[input.length - 1].slice(-5));

// 재귀 탐색의 기본: 연산자 끼워넣기 (🥈실버 1티어)

// 나눗셈은 소수점을 땐다. 
// 계산은 앞에서부터 시작한다.





let input = `6
1 2 3 4 5 6
2 1 1 1`;
input = input.split('\n');
let numbers = input[1].split(' ').map(e => +e); // 문자를 숫자로 바꿔준다.
console.log(numbers);
let operators = input[2].split(' ').map(e => +e);
console.log(operators);

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;


function operation(num1, num2, operator) {
    switch(operator) {
        case 0:
            return num1 + num2;
        case 1:
            return num1 - num2;
        case 2:
            return num1 * num2;
        case 3:
            // 자바스크립트의 나누기, Math.floor로 C++의 나누기 연산 구현
            const result = num1 >= 0 ? Math.floor(num1/num2) : -Math.floor(-num1/num2); // 그냥 둘다정수이면 나누기해서 소수점없애주고 안그러면 나누다음에 -붙여줘서 정수로 만들어준다는거지
            return result;
    }
}

// 경우의 수가 많지 않기 때문에  완전탐색(DFS)로 모든 경우를 검사한다.
function DFS(index, result, operators) {
    if(index === numbers.length) {
        max = Math.max(max, result);
        min = Math.min(min, result);
    }

    for(let i = 0; i < 4; i++) {
        if(operators[i] > 0) {
            const newOpers = JSON.parse(JSON.stringify(operators));
            newOpers[i] -= 1;
            console.log(newOpers, operators);

            DFS(index + 1, operation(result, numbers[index], i), newOpers);
            console.log(result); // index는 숫자의 갯수를 체크하기위해서 사용 
        }
    }
}
DFS(1, numbers[0], operators);
console.log(max ? max : 0);
console.log(min ? min : 0);