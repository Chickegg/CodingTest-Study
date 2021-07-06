// /// ----------------------------------- L V 1 -------------------------------------------// 

// (2개뽑아서 더하기)

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




/// ----------------------------------- L V 1 -------------------------------------------// 

// (행렬의 곱셈)
// function solution(arr1, arr2) {
//     let answer = [];

//     for(let i = 0; i < arr1.length; i++) {
//         answer.push([]);
//         for(let j = 0; j < arr2[0].length; j++) {
//             let sum = 0;
//             for(let n = 0; n < arr2.length; n++) {
//                 sum += arr1[i][n] * arr2[n][j];
//             }
//             answer[i].push(sum);
//         }
//     }
//     return answer;
// }

// let a = [[1, 4], [3, 2], [4, 1]];
// let b = [[3, 3], [3, 3]];
// console.log(solution(a, b));

// (N개의 최소공배수)

// function solution(arr) {
//     let LastNum = arr.pop();
//     let answer = LastNum;
//     let count = 0;

//     while(count < 3) {
//         count = 0;
//         for(let x of arr) {
//             if(answer % x !== 0) {
//                 answer += LastNum;
//                 break;
//             }
//             count++;
//         }
//     }
//     return answer;
// }

// let a = [2, 6, 8, 14];
// console.log(solution(a));
