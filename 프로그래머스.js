// LV1 2개뽑아서 더하기

// 내가푼방법
// function solution(numbers) {
//     let answer = [];
//     let answer2 = [];
    
//     for(let i = 0; i < numbers.length - 1; i++) {
//         for(let j = i + 1; j < numbers.length; j++) {
//             answer2.push(numbers[i] + numbers[j]);
//         }
//     }

//     for(let x of answer2) {
//         if(answer.indexOf(x) < 0) {
//             answer.push(x);
//         }
//     }
//     answer.sort((a, b) => a - b);
//     return answer;
// }

// let numbers = [2, 1, 3, 4, 1];
// console.log(solution(numbers));


// set을 이용한 방법

// function solution(numbers) {
//     const temp = [];
 
//     for(let i = 0; i < numbers.length - 1; i++) {
//         for(let j = i + 1; j < numbers.length; j++) {
//             temp.push(numbers[i] + numbers[j]);
//         }
//     }
//     const answer = [...new Set(temp)]; // Set으로 인해 중복제거

//     return answer.sort((a, b) => a - b) // 오름차순으로 정렬;
// }

// let numbers = [2, 1, 3, 4, 1];
// console.log(solution(numbers));

// LV1 자연수 뒤집어 배열로 만들기

// 문자로 푼방법

// function solution(n) {
//     const answer = String(n).split('').reverse().map((ele) => parseInt(ele));
//     return answer;
// }

// const n = 12345;
// console.log(solution(n));

