// function solution(s){
//     let answer;
//     let mid = Math.floor(s.length / 2);
//     if(s.length % 2 === 1) {
//         answer = s.substring(mid, mid + 1);
//         // mid index 부터 mid index 전까지
//     } else {
//         // answer = s.substring(mid - 1, mid + 1);
//         answer = s.substr(mid -1, 2);
//     }
//     return answer;
// }
// console.log(solution('good'));

//substr 
//substring 차이점은
// substr는 splice 처럼 index를 지정해서 몇개를 뽑아낼지 정하는거고
// substring은 index부터 다음번 인덱스 전까지를 뽑아내는거다.

//s.indexOf('k', 1) // 1번 index이후로 찾아라는것
// 없으면 처음부터 하는것
// s.idxOf(x) === -1 false 존재하지않으면 

// function solution(s) {
//     let answer;
//     answer = s.filter((v, i) => s.indexOf(v) === i);

//     return answer;
// }
// let str = ['good', 'time', 'good', 'time', 'student'];
// console.log(solution(str));

// //고차함수
//콜백함수
// function solution(s, arr) {
//     let answer = [];
//     let num = s;
//     let list = arr.unshift(num);
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] > arr[i - 1]) {
//             answer.push(arr[i]);
//         }
//         }
//     return answer;
// }

// let arr = [7, 3, 9, 5, 6, 12];
// console.log(solution(6, arr));

// 이중탐색 2.보이는 학생

// function solution(s, arr) {
//     let answer = arr;
//     let count = 0;
//     for(let i = 0; i < answer.length - 1; i++) {
//         if(answer[i] < answer[i + 1]) {
//             count++;
//         }
//     }

//     return count;
// }

// let arr = [130, 135, 148, 140, 145, 150, 150, 153];
// console.log(solution(8, arr));

// 이중탐색 3.가위바위보;

// function solution(a, b) {
//     let answer = '';
//     let N = 5;
//     1 > 3 > 2 > 1
//     for(let i = 0; i < N; i ++) {
//         if(a[i] === 1 && b[i] === 3) {
//             answer += 'A' + '\n';
//         } else if (a[i] === 2 && b[i] === 1) {
//             answer += 'A' + '\n';
//         } else if (a[i] === 3 && b[i] === 2) {
//             answer += 'A' + '\n';
//         } else if (a[i] === b[i]) {
//             answer += 'D' + '\n';
//         } else {
//             answer += 'B' + '\n';
//         }
//     }
//     return answer;
// }

// let a=[2, 3, 3, 1, 3];
// let b=[1, 1, 2, 2, 3]; //1가위 2바위 3보 
// console.log(solution(a, b));

// let a=[2, 3, 3, 1, 3];
// let b=[1, 1, 2, 2, 3];
// console.log(solution(a, b));


// 가산점이있는 점수 구하기

// function solution(N, arr) {
//     let answer = 0;
//     let cnt = 0;
//     for(let i = 0; i < N; i++) {
//         if(arr[i] === 1) {
//             cnt++;
//             answer += cnt;
//         } else {
//             cnt = 0;
//         }
//     }
//     return answer;
// }

// let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution(10, arr));

// 등수구하기 

// function solution(N, arr) {
//     let answer = Array(N).fill(1);
//     for(let i = 0; i < N; i++){
//         for(let j = 0; j < N; j++ ) {
//             if(arr[i] < arr[j]) {
//                 answer[i]++;
//             }

//         }

//     }
//     return answer;
// }

// let arr = [87, 89, 92, 100, 76];
// console.log(solution(5, arr));

// // 6.격자판 최대합


// 내가 푼 방식 

// function solution(N, arr) {
//     let answer = 0;
//     arr.unshift(Array(N).fill(0));
//     arr.push(Array(N).fill(0));

//     for(let i = 0; i < N + 2; i++) {
//         arr[i].unshift(0);
//         arr[i].push(0);
//     }

//     for(let i = 1; i < N + 1; i++) {
//         for(let j = 1; j < N + 1; j++) {
//             let left = arr[i][j - 1];
//             let right = arr[i][j + 1];
//             let top = arr[i - 1][j];
//             let down = arr[i + 1][j];
//             let num = arr[i][j];

//             if(num > top && num > down && num > left && num > right) {
//                 answer++;
//             }
//         }
//     } return answer;
// }

// let N = 6;
// let list=[[7, 5, 3, 2, 2, 3], 
//          [2, 3, 7, 1, 6, 1],
//          [3, 7, 2, 5, 3, 4],
//          [4, 4, 3, 6, 4, 1],
//          [5, 8, 7, 3, 5, 2],
//          [3, 2, 1, 7, 3, 4]];

// console.log(solution(N, list));

//

// function solution(arr) {
//     let answer = 0;
//     let n = arr.length;
//     let dx = [-1, 0, 1, 0];
//     let dy = [0, 1, 0, -1];

//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {
//             let flag = 1;
//             for(let k = 0; k < 4; k++) {
//                 let nx = i + dx[k]; //갈려는 행좌표
//                 let ny = j + dy[k]; //갈려는 열좌표
//                 if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
//                     flag = 0;
//                     break;
//                 } 
//             }
//             if(flag) answer++;
//         }
//     }
//     return answer;
// }

// let list=[[5, 3, 7, 2, 3], 
//           [3, 7, 1, 6, 1],
//           [7, 2, 5, 3, 4],
//           [4, 3, 6, 4, 1],
//           [8, 7, 3, 5, 2]];

// console.log(solution(list));


// 섹션 3 1.회문문자열

// for문을 이용해 직접 비교하는 방법
// function solution(s){
//     let answer = 'YES';
//     s = s.toUpperCase();
//     let len = s.length;
//     for(let i = 0; i < Math.floor(len / 2); i++) {
//         if(s[i] !== s[len -1 -i]) {
//             answer = "NO";
//         }
//     }
//     return answer;
// }

// let str="BbobB";
// console.log(solution(str));


// reverse를 이용한 방법 배열로나눠줘야한다.
// function solution(s){
//     let answer = 'YES';
//     s = s.toUpperCase();
//     let len = s.length;
//     console.log(s)
//     if(s.split('').reverse().join('') !== s) return "NO";
//     return answer;
// }

// let str="Bboba";
// console.log(solution(str));

// 3 - 2 유효한 팰린드롬

// 내가 한 방법
// function solution(s) {
//     let answer = "YES";
//     let word = ''; // s의 문자부분
//     let word2 = '';
//     s = s.toUpperCase().split('');
//     for(let i = 0; i < s.length; i++) {
//         if(s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 100) {
//             word += s[i];
//         }
//     }
//     s = s.reverse();
//     for(let i = 0; i < s.length; i++) {
//         if(s[i].charCodeAt() >= 65 & s[i].charCodeAt() <= 100) {
//             word2 += s[i];
//         }
//     }

//     for(let i = 0; i < Math.floor(word.length / 2); i++) {
//         if(word[i] !== word2[i]) {
//             return "NO";
//         }
//     }
//     console.log(word, word2);
//     return answer;
// }
            
// let str="found7, time: study; Yduts; emit, 7Dnuof";
// console.log(solution(str));

// 정규식을 이용한 방법

// function solution(s) {
//     let answer = "YES";
//     s = s.toLowerCase().replace(/[^a-z]/g, '');
//     // /[^a-z]/g, '') 꺽쇠는 부정 소문자 a~z까지 아닌것들을 글로벌로 찾아서 ''빈문자열로바꿔줘라.
//     if(s.split('').reverse().join('')!== s) {
//         return "NO";
//     }
//     return answer;
// }

// let str = "found7, time: study; Yduts; emit. 7Dnuof";
// console.log(solution(str));

// 3-3 숫자만 추출

// // 정규표현식
// function solution(str){
//     let answer = '';
//     str = str.replace(/[^0-9]/g, '');
//     console.log(str);
//     return parseInt(str);
// }

// function solution(str){
//     let answer = 0;
//     for(let x of str){
//         if(!isNaN(x)) answer = answer * 10 + Number(x);
//     } // isNaN(x) 문자이면 1(true) 아니면 0
//     // !isNaN(x)은 숫자이면 1이나온다.
//     return parseInt(answer);
// }
// let str="g0en2T0s8eSoft";
// console.log(solution(str));

// 3 - 4 가장짧은 문자거리

// function solution(s, t){
//     let answer = [];
//     let P = 1000;
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === t) { 
//             P = 0;
//             answer.push(P);
//         } else {
//             P++;
//             answer.push(P);
//         }
//     }
//     P = 1000;
//     for(let i = s.length - 1; i >= 0; i--) {
//         if(s[i] === t) {
//             P = 0;
//         }
//         else {
//             P++
//             answer[i] = Math.min(answer[i], P); 
//         }
//     }
//     return answer;
// }

// let str="teachermode";
// console.log(solution(str, 'e'));


// 변수를 잡는다. 큰값으로 P
// index[0] 부터 알파벳e가아니면 p를++ 한다.
// e 를 만나면 0으로해준다.



// function solution (s, t) {
//     let answer = [];
//     let p = 1000;

//     // 각자의 숫자에서 왼쪽 e 까지의 거리
//     for(let x of s) {
//         if(x === t) {
//             p = 0;
//             answer.push(p);
//         } else {
//             p++;
//             answer.push(p);
//         }
//     }

//         // 각자의 숫자에서 오른쪽 e 까지의 거리
//     p = 0;
//     for(let i = s.length - 1; i >= 0; i--) {
//         if(s[i] === t) {
//             p = 0;
//         } else {
//             p++
//             answer[i] = Math.min(answer[i], p);
//             // 작은수를 answer[i]로 해준다.
//         }
//     }
//     return answer;
// }
// let str="teachermode";
// console.log(solution(str, 'e'));

// 3 - 5 문자열 압축

// 내가 푼 방식
// function solution(s){
//     let answer = '';
//     let count = 1;
//     let word = s[0];

//     for(let i = 1; i < s.length + 1; i++) {
//         if(s[i] === word) {
//             count++;
//         } else {
//             if(count > 1) {
//                 answer += word + String(count);
//                 count = 1;
//                 word = s[i];
//             } else {
//                 answer += word;
//                 word = s[i];
//             }
//         }
//     }
//     return answer;
// }

// let str="KKHSSSSSSSE";
// console.log(solution(str));
// // 출력예제 K2HS7E

//  solution 2 (내가 푼것은 아님)
// function solution(s) {
//     let answer = "";
//     let cnt = 1;
//     s = s + " ";
//     for(let i = 0; i < s.length - 1; i++) {
//         if(s[i] === s[i + 1]) cnt++;
//         else {
//             answer += s[i];
//             if(cnt > 1 ) answer += String(cnt);
//             cnt = 1;
//         }
//     }

//     return answer;
// }

// let str="KKHSSSSSSSE";
// console.log(solution(str));
// // 출력예제 K2HS7E




