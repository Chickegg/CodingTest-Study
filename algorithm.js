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









// *********************************************//
//자릿수의 합

//내가푼방법 [문자로]   [오답] xxxxxxxxxxx
// 나중에있는 것을 찾는것을 구한거였따.. 큰수가아니라.. 즉 오답

// function solution(n, arr){
//     let answer = arr.reverse().map((ele) => String(ele));
//     let answer1 = [];
//     let sum = 0;

//     for(let x of answer) {
//         x = x.split('')
//         for(let i = 0; i < x.length; i++) {
//             sum += parseInt(x[i]);
//         }

//         answer1.push(sum);
//         sum = 0;
//     }

//     sum = answer1.indexOf(Math.max(...answer1));

//     return arr[sum];
// }


// 숫자로 푼방법

// function solution(n, arr){
//     let answer, max=Number.MIN_SAFE_INTEGER;
//     for(let x of arr) {
//         let sum = 0, tmp = x;
//         while(tmp){
//             sum += (tmp % 10); // 1의자리수
//             tmp = Math.floor(tmp/10); // 128의 경우 12.8로 하여 Math.floor하여서 12만 남긴다.
//         }
//         if(sum > max) {
//             max = sum;
//             answer = x;
//         } else if (sum === max) {
//             if(x > answer) {
//                 answer = x;
//             }
//         }
//     }
//     return answer;
// }

// 문자로 푼 방법

// function solution(n, arr) {
//     let answer, max = Number.MIN_SAFE_INTEGER; //작은수로 max를 만들어놓는다.

//     for(let x of arr) {
//         let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0); // sum은 arr의 숫자 x를 문자로 바꾸고 각각의 문자로 바꿔주고 그 문자들을 a에 더한거시된다. 여기서 a는 더할곳이고 b는 더하는 숫자이다. 0은 a의 초기값
//         if(sum > max) { // 그 더한숫자가 max보다 크다면 작업을 실행 ex)
//             max = sum; // 각자리수를 더한 값중 가장큰값
//             answer = x; // 그값의 원래숫자
//         } else if (sum === max) { // 값은값이나온다? 즉 각자리의 숫자의 합이 같을경우 원래값 x 의 크기를 비교하여 answer에 지정해주면 될것이다.
//             if(x > answer) {
//                 answer = x;
//             }
//         }
//     }
//     return answer;
// }
// let arr=[137, 460, 603, 40, 521, 128, 123];
// console.log(solution(7, arr));


//

// 내가푼방식
// 숫자인 num의 요소들을 String으로 바꿔주고 for of 문을 돌려준다.
// 이때 각각의 요소들을 x 로 정해주고 word라는 변수에 x를 역으로 돌려준 값으로 정해준다.
// for문을 통해서 소수의 경우에는 자신과 1로 나누었을때만 나머지가 0이기 때문에
// 그 경우의수를 count에 더해주어서 count가 2일 경우 즉 소수일 경우에 list라는 배열에 push해주고 return 받는다.

// 코드를 줄일수 있을것같긴하다..
// 절반 또는 제곱근까지만 해도된다.. 와웅

// function isPrime(num){
//     let answer = num.map((ele) => String(ele));
//     let list = [];

//     for(let x of answer) {
//         let count = 0;
//         let word = parseInt(x.split('').reverse().join(''));
//         for(let i = 1; i <= word; i++) {
//             if(word % i === 0) {
//                 count++;
//             }
//         }
//         if(count === 2) {
//             list.push(word);
//         }
//         count = 0;
//     }
//     return list;
// }

// let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(isPrime(arr));


/// 4 - 3 멘토링 시스템

// function solution(test) {
//     let answer = 0, tmp = []; // 결과값 , 경우의수의 상세정보
//     let N = test[0].length; // 학생수
//     let M = test.length; // 시험획수

//     for(let i = 1; i <= N; i++) { // 멘토후보 i 학생
//         for(let j = 1; j <= N; j++) { // 멘티후보 j 학생
//             if(i !== j) { // 둘이같을경우는 존재하지 않기때문.
//                 let count = 0; // k번째 시험때 멘토로 가정한 i와 멘티로 가정한 j의 관계가 성립하는경우
//                 for(let k = 0; k < M; k++) { // M을 쓰는 이유는 k의경우는 k번째 시험을 나타내기위해 사용하기 때문이다.
//                     let pi = pj = 0;
//                     for(let s = 0; s < N; s++) { // 여기서 s 는 곧 k번째시험에 s 번째를 탐색하여 i학생의 등수와 j 학생의 등수를 알아내기 위해 사용한다.
//                         if(test[k][s] === i) pi = s; // i번째 학생의 등수는 index s 번째이다 ex) 3번째에 위치해 있으면 3등이다.
//                         if(test[k][s] === j) pj = s; // 마찬가지.
//                     }
//                     if(pi < pj) count++; // k번째 시험때 i 학생이 j 학생보다 등수가 높을경우 count++해준다.
//                 }
//                 if(count === M) { // 멘토멘티로 가정한 관계가 모든시험에서 성립될경우 결과값에 ++ 해주고 tmp에 push해준다.
//                     answer++;
//                     tmp.push([i, j]);
//                 }
//             }
//         }
//     }
//     // console.log(tmp, answer); 확인을위한 콘솔부분
//     return answer;
// }

// let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
// console.log(solution(arr));

//// 4 - 4 졸업선물


// function solution(m, product) {
//     let answer = 0;
//     let n = product.length;
//     // 값이 싼 가격부터 오름차순으로 정렬해준다.
//     product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1])); // b 가 앞에숫자 a 가 뒤의 숫자이다.
//     // 그렇다면 여기서는 (2 + 2) - (6 + 6) = - 1 보다 작기 때문에 false이다.
//     // 그럼 a에 속해있는 [6, 6] 을 뒤로 보내준다 [2, 2]는앞으로 오게되고
//     // 6, 6 과 4,3을비교한다 이런식으로 계쏙 진행 되서 오름차순으로 결국 정렬된다.

//     for(let i = 0; i < n; i++) {
//         let money = m - (product[i][0] / 2 + (product[i][1]));
//         let cnt = 1;
//         for(let j = 0; j < n; j++) {
//             let money2 = product[j][0] + product[j][1];
//             if(j !== i & money < money2) break;
//             if(j !== i & money >= money2) {
//                 money -= money2;
//                 cnt++
//             }
//         }
//         answer = Math.max(answer, cnt);
//     }
//     return answer;
// }

/// 4 - 5 K번째 큰수

// function solution(k, list) {
//     let answer = [];
//     let n = list.length;
//     for(let i = 0; i < n - 2; i++) {
//         for(let j = i + 1; j < n - 1; j++) {
//             for(let z = j + 1; z < n; z++) {
//                 answer.push(list[i] + list[j] + list[z]);
//             }
//         }
//     }
//     answer.sort((a, b) => b - a);
//     let newanswer = [...new Set(answer)];


//     return newanswer[k - 1];
// }
// // 10 3

// let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
// console.log(solution(3, arr));


// 5 - 1 배열 붙이고 오름차순으로 정렬하기

// function solution(arr1, arr2) {
//     let answer = [];
//     // concat 메서드 사용방법
//     // let answer = [];
//     // answer = answer.concat(arr1, arr2).sort((a, b) => a - b);

//     // ... 연산자 spread operator 사용방법
//     // let answer = [
//     //     ...arr1,
//     //     ...arr2
//     // ];

//     // push(... array)함수로 배열 합치기
// console.log(arr1.push(...arr2));
// return answer;
// }

// let a=[1, 3, 5];
// let b=[2, 3, 6, 7, 9];
// console.log(solution(a, b));

// 강의에서 알려주는 방법
// function solution(arr1, arr2){
//     let answer = [];
//     let n = arr2.length;
//     let m = arr2.length;
//     let p1 = p2 = 0;
//     while(p1< n && p2< m) {
//         if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]); // 뒤에 ++을하면 후칙연산으로하고
//             //즉 지금값이 1이면 1을 넣고 ++해서 2가된다.
//             else answer.push(arr2[p2++]);
//     }
//     while(p1 < n) answer.push(arr1[p1++]);
//     while(p2 < m) answer.push(arr2[p2++]);
//     return answer;
// }
// let a=[1, 3, 5];
// let b=[2, 3, 6, 7, 9];
// console.log(solution(a, b));

// 5 - 2 공통원소 구하기

// // 내가 푼 방식

// function solution(arr1, arr2){
//     let answer=[];
//     arr1.sort((a, b) => a - b);
//     arr2.sort((a, b) => a - b);
//     console.log(arr1, arr2);
//     for(let x of arr1) {
//         for(let i = 0; i < arr1.length; i++) {
//             if(x === arr2[i]) {
//                 answer.push(x);
//                 break;
//             }
//         }
//     }
//     return answer;
// }

// let a=[1, 3, 9, 5, 2];
// let b=[3, 2, 5, 7, 8];
// console.log(solution(a, b));

// 강사님이 푼 방식

// function solution(arr1, arr2) {
//     let answer = [];
//     let p1 = p2 = 0;
//     while(p1 < arr1.length && p2 < arr2.length) {
//         if(arr1[p1] === arr2[p2]) {
//             answer.push(arr1[p1++])
//             p2++;
//         } else if (arr1[p1] < arr2[p2]) p1++;
//         else p2++;
//     }
//     return answer;
// }

// let a=[1, 3, 9, 5, 2];
// let b=[3, 2, 5, 7, 8];
// console.log(solution(a, b));

/// 5 - 3 연속 부분수열 1
//내가 분 방법
// function solution(m, arr){
//     let answer = 0, len = arr.length, sum = 0, int = 0, i = 0;
//     while(i < len + 1) {
//         if(sum === m) {
//             answer++;
//             int++;
//             i = int;
//             sum = 0;
//         } else if(sum > m) {
//             int++;
//             i = int;
//             sum = 0;
//         } else {
//             sum += arr[i];
//             i++;
//         }
//     }
//     return answer;
// }


// 강사님이 푼 방법
// function solution(m, arr) {
//     let answer = 0, lt = 0, sum = 0;
//     for(let rt = 0; rt < arr.length; rt++) {
//         sum += arr[rt];
//         if(sum === m) answer++;
//         while(sum >= m ) {
//             sum -= arr[lt++];
//             if(sum === m) {
//                 answer++;
//                 console.log(lt, rt);
//         }
//     }
// }
//     return answer;
// }


// let a=[1, 2, 1, 3, 1, 1, 1, 2];
// console.log(solution(6, a));

// 1 2 1 3 7?
// while문들어가서 7 - arr[0++] 1 = 6
// if문확인 값이 같으므로 answer ++해주고 여전히 sum은 m 이상이기때문에
// 6 - arr[1] = 6 - 2 = 4 이므로 while문 탈출;
// 그럼 for문으로 돌아가서 rt ++ 해주고 그럼 rt 는 1
// 4 + arr[1] = 4 + 2 = 6 그럼 answer++ 해주고
// while문은 참 이므로 6 = arr[2] = 6 - 1 =5 이므로 while문 탈출
// for문 rt+= sum - arr[rt]  = 5+ arr[rt] arr[rtt] = 1  rmfja 6이된다 그럼 또 while문

// 그럼 맘지막은 어떻게될까 3111 에서 3을 빼면 111 이고 뒤에 2가밖에 안나맛다
// 그럼  1 + 1 + 1  + 2 = 5 가되고 while문을 들어가지않으므ㅗㄹ rt는 끝나게 된다.a
// 근데만일크다? 그럼 Ehwhile 들어가는거지 시간복잡도 log(n) 랙무

/// 5 - 4 연속 부분수열2 연속부분수열부분이 어렵다..

// function solution(m, arr){
//     let answer = 0 , sum = 0, lt = 0;
//     for(let rt = 0; rt < arr.length; rt++) {
//         sum += arr[rt];
//         while(sum > m) {
//             sum -= arr[lt++]; // 6이된다. lt는 2가되고 6 - 3을해서 sum 은 3이된다.
//         }
//         answer += (rt - lt + 1);
//         console.log(lt, rt);
//     }

//     return answer;
// }

// let a=[1, 3, 1, 2, 3];
// console.log(solution(5, a));

//--------------------------------------------------------------------------------------------
// /// 여기서 핵심은 1, 3, 1, 2, 3 일때
// lt, rt로 해주는데
// lt는 왼쪽숫자이고 rt는 오른쪽숫자라고 생각하면 편하다.

// 즉 rt를 증가시켜가면서 주어진 값 보다 작을때 ++ 해주고
// 만일 rt가 주어진값보다 커지면 rt에서 lt를 마이너스 해가면서 주어진값보다 작이지면 ++ 해주고
// 다시 rt를 증가시켜준다. 이거반복

// 5 - 5 최대매출
// 내가한 방법
// function solution(k, arr) {
//     let answer = 0 , sum = 0;
//     for(let i = 0; i <= arr.length - k; i++) {
//         sum =  arr[i] + arr[i + 1] + arr[i + 2];
//         if(sum > answer) answer = sum;
//         console.log(sum);
//     }
//     return answer;
// }

// let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));

// 강사님이 한방법

// function solution(k, arr) {
//     let answer, sum = 0;
//     for(let i = 0; i < k; i++) {
//         sum += arr[i];
//     }
//     answer = sum;
//     for(let i = k; i < arr.length; i++) {
//         sum += (arr[i] - arr[i - k]);
//         answer = Math.max(answer, sum);
//     }
//     return answer;
// }
// let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));


// 시간측정하기
// var sum = 0;

// console.time("calculatingTime")
// console.log(1);

// console.timeEnd('calculatingTime');
// // calculatingTime: 73.687255859375 ms

/// 5 - 5 학급 회장(해쉬); new Map, Map.set(key, value), .get().has()

// function solution(s){
//     let answer;
//     let Hash = new Map();
//     for(let x of s) {
//         if(Hash.has(x)) {
//             Hash.set(x, Hash.get(x) + 1) // 기존의 value값을 가져오는 get에 + 1한것을 set을사용하여 지정해준다.
//         }  else Hash.set(x, 1);
//     }

//     let max = Number.MIN_SAFE_INTEGER; // 작은 수 지정

//     for(let [key, value] of Hash) { // for .. of 문을 이렇게도 사용가능하구나..
//         if(value > max) {
//             max = value;
//             answer = key;
//         }
//     }
//     return answer;
// }

// let str="BACBACCACCBDEDE";
// console.log(solution(str));

// 5 - 6 아나그램(해쉬)
// 내가푼 방법 map을 2개를 만들어줘서 그둘을 서로 비교하는 방법 for문을 3번돌아야한다.
// 길이가 다른상황에서도 비교가능하다.
// function solution(str1, str2){
//     answer = "YES";
//     let Hash1 = new Map();
//     let Hash2 = new Map();

//     for(let x of str1) {
//         if(Hash1.has(x)) {
//             Hash1.set(x, Hash1.get(x) + 1)
//         } else {
//             Hash1.set(x, 1);
//         }
//     }
//     for(let x of str2) {
//         if(Hash2.has(x)) {
//             Hash2.set(x, Hash2.get(x) + 1)
//         } else {
//             Hash2.set(x, 1);
//         }
//     }
//     for(let [key, value] of Hash1) {
//         if(Hash1.get(key) !== Hash2.get(key)) {
//             answer = "NO";
//             break;
//         }
//     }
//     console.log(Hash1, Hash2);
//     return answer;
// }

// let a="AbaAeCez";
// let b="baeeACA";
// console.log(solution(a, b));

// let a = "abaaCD"
// let b = "Caaabbb"
// console.log(solution(a, b));


// Map을 하나만 지정해주고 str1을 그곳에넣어준뒤 그 map에 str2의 요소들을 has() 가지고있지 않고나 || (또는) get(x) 가 0이되면 NO을 반환받는다.
// 그러기 위해서 sH가 str2의 1개이상 가지고 있을 경우에는 sH에서 -1을 해준다.
// for문을 2번만 돌아주면 된다.
// function solution(str1, str2){
//     let answer="YES";
//     let sH = new Map();
//     for(let x of str1){
//         if(sH.has(x)) sH.set(x, sH.get(x)+1);
//         else sH.set(x, 1);
//     }
//     for(let x of str2){
//         if(!sH.has(x) || sH.get(x)==0) return "NO";
//         sH.set(x, sH.get(x)-1);
//     }
//     return answer;
// }

// let a="AbaAeC";
// let b="baeeACA";
// console.log(solution(a, b));


// function solution(str1, str2) {
//     let answer = 0;
//     let Hash = new Map();
//     let list = "";
//     for(let i = 0; i <= str1.length; i++) { // str1의 각요소들을 x로지정해주고
//         if(list.length === str2.length) { // list의 길이가 str2의길이와같아진다면?
//             let OX = "O"
//             Hash.clear();

//             for(let x of list) { // list를 Map으로 바꾸어 해시로 나눠준다.
//                 if(Hash.has(x)) {
//                     Hash.set(x, Hash.get(x) + 1);
//                 } else {
//                     Hash.set(x, 1);
//                 }
//             }

//             for(let x of str2) { // str2의 요소들을 Hash와 비교
//                 if(!Hash.get(x) || Hash.get(x) === 0) {
//                     OX = "X";
//                     break; // 아나그램이 아니면 for문을 벗어나고
//                 } else {
//                     Hash.set(x, Hash.get(x) - 1);
//                 }
//             }

//             if(OX === "O") {
//                 answer++;
//                 list = str1[i - 3] + str1[i - 2] + str1[i - 1];
//                 }
//                 else {
//                 list = str1[i - 3] + str1[i - 2] + str1[i - 1];
//             }
//         }
//         list += str1[i];
//     }
//     return answer;
// }
// let a = "bacaAacba";
// let b = "abca";
// console.log(solution(a, b));

// 풀기전 나의 풀이생각.
// 우선 슬라이딩윈도우를 통해서 str2와 같은 길이까지 str1의 문자열만큼 더해주고
// str2의 각요소들을 str1의 hash 와 동일해서 아나그램이라면 count++ 해주고
// 그것이 끝나면 str1에 마지막에 그다음남은 문자를더해주고 그전의 문자는 지워준다 그리고 또 비교

// 6 - 1 스택
// function solution(s) {
//     let answer = "YES";
//     let stack = [];
//     if(s.length % 2 === 1) return "NO";

//     for(let x of s ) {
//         if(x ==='(') {
//             stack.push(x);
//         } else {
//             if(stack.length === 0) return "NO";
//             stack.pop();
//         }
//     }
//     console.log(stack);
//     if(stack.length > 0) return "NO";
//     return answer;
// }
// let a = "()()(";
// console.log(solution(a));

// function solution(s) {
//     let answer;
//     stack = [];
//     for(let x of s) {
//         if(x === ')') {
//             while(stack.pop() !== '(');
//         }
//         else stack.push(x);
//     }
//     return answer = stack.join('');
// }

// let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str));

/// 크레인 뽑기 대망의 !!
// function solution(board, moves){
//     let box = [];
//     for(let x of moves) { // moves가 들어오는 부분
//         // 만일 moves[i] === 1이다? 그럼 뒤에 for문에서 board의 index 1번 부분들을
//         //확인하여서 0이아닌 숫자가 오면 answer 에 push해준다
//         for(let i = 0; i < board.length; i++) {
//             if(board[i][x - 1] > 0) {
//                 box.push(board[i][x - 1]);
//                 board[i][x - 1] = 0;
//                 break;
//             }
//         }
//         console.table(box);
//     }
//     let count = 0;
//     let i = 0;
//     // while문을 돌면서 겹치는 ele가 있으면 그두개를 제거하고 다시이전으로 돌아가서 시간한다.
//     while(i < box.length) {
//         if(box[i] === box[i + 1]) {
//             box.splice(i, 2);
//             count += 2;
//             i -= 1;
//         } else {
//             i++;
//         }
//     }
//     return count;
// }

// let a=[[0,0,0,0,0],
//        [0,0,1,0,3],
//        [0,2,5,0,1],
//        [4,2,4,4,2],
//        [3,5,1,3,1]];
// let b=[1, 5, 3, 5, 1, 2, 1, 4];
// console.log(solution(a, b));

// 좀 더 간단한 방법 // 나는 box를 만들어서 그안에 push를 해준다음에 while문을 돌면서 중복된거를 제거해 주는 방법이었는데
// 강사니는 for문에서 0 이 아닌 인형부븐을 tmp에 저장해주어서 그상태에서 stack에 동일한값이 있으면 tmp는 그냥 날려주고 stack의 맨위에있는 값을 pop()해서 없애준다.
// 그러나 같은 인형이 아니면 stack.push()를 해준다.

// function solution(board, moves) {
//     let answer = 0;
//     let stack = [];
//     moves.forEach(pos => {
//         for(let i = 0; i < board.length; i++) {
//             if(board[i][pos - 1] !== 0) { // 인형일 경우
//                 let tmp = board[i][pos - 1]; // 인형을 tmp라는 변수로 만들어줌
//                 board[i][pos - 1] = 0; // 인형이 빠져나갔으니 0으로 만들어줘야함.
//                 if(tmp === stack[stack.length - 1]) {
//                     stack.pop(); // 마지막 바구니의 맨 위의 요소를 제거해준다.
//                     answer += 2;
//                 }
//                 else stack.push(tmp); // 바구니에 추가시켜준다.
//                 break;
//             }
//         }
//     });
//     return answer;
// }
// let a=[[0,0,0,0,0],
//        [0,0,1,0,3],
//        [0,2,5,0,1],
//        [4,2,4,4,2],
//        [3,5,1,3,1]];
// let b=[1, 5, 3, 5, 1, 2, 1, 4];
// console.log(solution(a, b));

// 6 - 4 후위식 연산

// function ASMD(a, b, c) {
//     if(c === '+') return a + b;
//     if(c === '-') return a - b;
//     if(c === '*') return a * b;
//     if(c === '/') return a / b;
// }
// function solution(s) {
//     let answer;
//     let stack = [];

//     for(let x of s) {
//         if(isNaN(x)) {
//             let b = Number(stack.pop());
//             let a = Number(stack.pop());
//             stack.push(ASMD(a, b, x));
//         } else {
//             stack.push(x);
//         }
//     }
//     return stack;
// }

// let postfix = "352+*9-";
// console.log(solution(postfix));

/// 6 -6 쇠막대기

// function solution(s) {
//     let answer = 0;
//     let stack = [];
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === '(') stack.push(s[i]);
//         else {
//             stack.pop() // s[i]가 ')' 라는 것은 레이저 또는 쇠막대의 끝부분이기때문에 레이저의 시작부분 또는 쇠막대의 시작부분인 '(' 을 없애준다.
//             if(s[i - 1] === '(') answer += stack.length; // s[i]가 레이저의 시작부분이었다는것이 판명이 나면 stack에 남아있는 쇠막대의 수만큼 answer에 더해준다.
//             else answer += 1; // 그렇지않고 쇠막대의 끝부분이었으면 이전 else로 들어올 때 stack.pop()해줬던 쇠막대의 갯수인 1을 answer에 더해준다.
//         }
//     }
//     return answer;
// }
// let a="(((()(()()))(())()))(()())";
// console.table(solution(a));

/// 6 - 7 공주구하기

// function solution(n, k) {
//     let answer;
//     let queue = Array.from({length:n}, (v, i) => i + 1); // 길이가 n 이고 (ele, i) => ele는 i + 1이다.

//     while(queue.length) { // queue가 0이되면 끝난다.
//         for(let i = 1; i < k; i++) queue.push(queue.shift()); // 큐의 맨앞의것을 맨뒤로 보내준다. 이경우 2번보내주면 큐의 맨앞의 요소는 k라고 말한 사람이 될것이다.
//         queue.shift(); // k라고 말한 사람은 그냥 shift해주어서 사라지게 만든다.
//         console.log(queue);
//         if(queue.length === 1) answer = queue.shift(); // queue에 한개가 남으면 그것을 answer에 할당해준다.
//     }
//     return answer;
// }

// console.log(solution(8, 3));

/// 6 - 8 교육과정 설계 queue를 이용한 방법.
// function solution(need, plan) {
//     let answer = "YES";
//     let queue = need.split('');

//     for(let x of plan) {
//         if(queue.includes(x)) { // queue에 paln의 x 가 존재할떄
//             if(queue.shift() !== x) return "NO"; //queue의 맨 앞의 요소를 제거해주는데 이 제거한 요소가 앞에 queue과 plan의 공통요소 x 가 아니라면
//             // 즉 요소들은 가지고 있지만 순서배치가 틀리다면? NO를 return받는다.
//         }
//     }
// }

// filter , includes, 삼항연산자를 이용한 방법

// function solution(need, plan) {
//     return need === plan.split('').filter(ele => need.includes(ele)).join('') ? 'YES' : 'NO';
// }

// let a="CBA";
// let b="CADBGE";
// console.log(solution(a, b));

// // plan을 split해서 배열로 만들어주고 그 배열들을 filter 메서드를 통해 plan배열의 요소들중 need 배열에 포함되어있는 요소들로 이루어진 배열을 .join('')하여 문자열로 만들어준다.
// // 이것과 need 문자열이 같으면 YES이고 아니면 NO를 반환한다.

///////////// 7 - 1 선택정렬
// 시간측정하기
// var sum = 0;

// // console.time("calculatingTime")

// function solution(arr){
//     let answer = arr; // 정렬해줘야하기때문에 answer를 해준다 이 때 얕은 복사이기 때문에 arr을 바꾸면 answer도 바뀐다
//     for(let i = 0; i < arr.length; i++) {
//         let idx = i;
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[idx]) idx = j;
//         }
//         [arr[i], arr[idx]] = [arr[idx], arr[i]];
//     }
//     return answer;
// }

// let arr=[13, 5, 11, 7, 23, 15, 12 , 12321 ,123 ,123 ,135];
// console.time(solution(arr));

// console.timeEnd(solution(arr));


// console.timeEnd('calculatingTime');
// calculatingTime: 73.687255859375 ms

/// 7 - 2 버블 정렬

// 버블정렬은 제일큰수가 맨뒤로 가게되있다.
// function solution(arr){
//     let answer=arr;
//     for(let i = 0; i < arr.length - 1; i++) { // 몇바퀴 돌아야하는지만 알려주면된다.
//         for(let j = 0; j < arr.length - i - 1; j++) {
//             if(arr[j] > arr[j + 1]) {
//                  [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
//             }
//         }
//     }

//     return answer;
// }

// let arr=[13, 5, 11, 7, 23, 15];
// console.log(solution(arr));


/// 7 - 3 Special Sort(버블정렬응용);
// 내가 푼 방법
// 틀린 방법이다 왜냐? 정렬해주라는 소리가 없고 그저 음의 정수를 앞으로 오게하고 양의 정수를 뒤로오게 하라는 것만 있다.

// function solution(arr){
//     let answer=arr;

//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = 0 ; j < arr.length - i - 1; j++) {
//             if(arr[j] > arr[j + 1] && arr[j] > 0) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 console.log(answer);
//             }
//         }
//     }
//     return answer;
// }

// 이게 옮은 방법이다.

// function solution(arr) {
//     let answer = arr;
//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = 0; j < arr.length - i - 1; j++) {
//             if(arr[j] > 0 && arr[j + 1] < 0) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return answer;
// }
// let arr=[1, 2, 3, -3, -2, 5, 6, -6, 8, 9, 10, 21, -4, -5, -7, -8];
// console.log(solution(arr));

// 7 - 4 삽입정렬

// function solution(arr) {
//     let answer = arr;

//     for(let i = 0; i < arr.length; i++) {
//         let tmp = arr[i], j;
//         for(j = i - 1; j >= 0; j--) {
//             if(arr[j] > tmp) arr[j + 1] = arr[j];
//             else break;
//         }
//         arr[j + 1] = tmp;
//     }
//     return answer;
// }

// let arr = [11, 7, 5, 6, 10, 9];
// console.log(solution(arr));


    // 삽입정렬은 버블정렬처럼 0부터 비교하는것이 아니라 i가 2번째 값부터 시작한다.
    // j = i - 1 ~ 0 까지 돈다. 즉 j가 i의 앞의 값부터 배열의 처음부분까지 검사를 하는 것이다.
    // j for문이 돌기전에 tmp (임시변수) 에 arr[i]값을 저장해준다.
    // 그리고 j가 돈다. arr[j]가 tmp보다 크면 arr[j + 1] = arr[j] 로 해준다.
    // 끝나면 j의 뒷지점 즉 j + 1 지점에 tmp를 삽입시켜준다.


/// 7 - 5 LRU(Least Recently Used) 카카오 캐시 문제 변형 ///

// function solution(s, arr) {
//     let answer = Array.from({length:s}, () => 0);
//     arr.forEach(x => {
//        let pos = -1;
//        for(let i = 0; i < s; i++) if(x===answer[i]) pos = i; // answer안을 돌면서 만일 x 라는값이 그안에있으면 pos에 저장해준다. cash안의 x의 index번호를 저장해준것.
//        if(pos === -1) {
//            for(let i = s - 1; i >= 1; i--) {
//                answer[i] = answer[i - 1];
//            }
//        }
//        else {
//            for(let i = pos; i >=1; i--) {
//                answer[i] = answer[i - 1];
//            }
//        }
//        answer[0] = x; // x라는 작업은 한번만 들어갈 것임으로 2번 해줄 필요 없다.
//     });
//     return answer;
// }
// arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr));


// 내가 푼 방법(내장함수를 활용했다.)
// function solution(s, arr) {
//     let answer = [];
//     for(let x of arr) {
//         if(answer.includes(x)) { // 메모리 안에 존재 할 때
//             let tmp = answer.splice(answer.indexOf(x), 1);
//             answer.unshift(tmp[0]);
//             } else { // 메모리안에 존재하지 않을 때
//                 if(answer.length === s) { // 꽉차있을 경우
//                     answer.pop();
//                     answer.unshift(x);
//                 } else answer.unshift(x); // 비어있을 경우
//             }
//     }
//     return answer;
// }
// arr = [1, 2, 2, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr));
// 만일 입력된 값이 메모리에 존재하지 않으면 그값을맨앞에 오게하고 만일 메모리가 꽉찼으면 맨뒤의것을 pop()해주고 upshift해준다.
// cash hit 입력된 값이 answer에 있을경우 그 값을 맨앞으로 가져오고 그 값의 앞의 것들을 뒤로 땡긴다.

// 7 - 6 장난 꾸러기 현수
// function solution(arr){
//     let answer=[];
//     let a = arr.slice().sort((a, b) => a - b);
//     console.log(arr, a);
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i], a[i]);
//         if(arr[i] !== a[i]) answer.push(i + 1); // 처음값은 현수의 번호이고 두번째는 현수짝쿵의 번호일것이다.
//     }
//     return answer;
// }

// // let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
// let arr = [120,130,150,150,130,150];
// console.log(solution(arr));

// 7 - 7 좌표 정렬
// x 좌표가 작은 순대로 x 좌표가 같으면 y좌표가 큰수대로
// function solution(arr){
//     let answer = arr;
//     arr.sort((a, b) => {
//         if(a[0] === b[0]) return a[1] - b[1];
//         else return a[0] - b[0];
//     })
//     return answer;
// }

// let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
// console.log(solution(arr));

// n개의 회의들이 한개의 회의실에서 시간이 겹치지 않게 진행되어야한다.
// 시작시간과 종료시간은 주어준다.

// 겹치지 않도록 하면서 가장 많읂 회의를 진행할 수 있는 최대 경우의 수를 찾아라.
// 끝남과 동시에 시작이 가능하다.
// 2, 3 3, 5, 5, 7


// 7 -8 회의실 배정

//1.끝나는 시간이 빠른 순서대로 정렬을 한다.
//1-1 끝나는시간이 같다면 시작시간이 빠른순서대로 정렬을 한다.
//2. 끝나는시간을 et로 정해주고 for .. of 문을 돌면서 x 의 시작시간이 et와 같다면
// answer++해주고 et를 x의 끝나는시간으로 바꿔준다.

// 즉 끝나는시간이 빠른순서대로 시작시간을 비교해가면서 정해주는 방식.

// function solution(meeting) {
//     let answer = 0;

//     meeting.sort((a, b) => {
//         if(a[1] === b[1]) return a[0] - b[0];
//         else return a[1] - b[1];
//     })
//     let et = 0;
//     for(let x of meeting) {
//         if(x[0] >= et) {
//             answer++;
//             et = x[1];

//         }
//     }
//     return answer;
// }
// let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
// // let arr = [[3, 3],[1,3],[2,3]];
// console.log(solution(arr));

// function solution(times){
//     let answer = Number.MIN_SAFE_INTEGER;
//     let TimeLine = [];
//     for(let x of times) {
//         TimeLine.push([x[0], 's']);
//         TimeLine.push([x[1], 'e']);
//     }
//     TimeLine.sort((a, b) => {
//         if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt(); // e가 아스키코드가 더작기 때문에 e먼저 나오게하려면 오름차순으로 정렬해줘야한다.
//         else return a[0] - b[0];
//     });
//     let cnt = 0;
//     for(let x of TimeLine) {
//         if(x[1] === 's') cnt++;
//         else cnt--;
//         answer = Math.max(answer, cnt);
//     }
//     console.log(TimeLine);
//     return answer;
// }
// let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
// console.log(solution(arr));


// 하나의 사람을 2개의 이벤트로 쪼개야한다.
// 예를 들어 14는 s 18은 e



/// 7 - 10 이분검색 ///
// function solution(target, arr) {
//     let answer;
//     arr.sort((a, b) => a - b);
//     let lt = 0, rt = arr.length - 1;
//     while(lt <= rt) {
//         let mid = Math.floor((lt + rt) /2);
//         if(arr[mid] === target) {
//             answer = mid + 1;
//             break;
//         }
//         else if (arr[mid] > target) rt = mid - 1;
//         else lt = mid + 1;
//     }
//     return answer;
// }

// let arr=[23, 87, 65, 12, 57, 32, 99, 81];
// console.log(solution(32, arr));

// 처음부터 끝까지 비교하는 순차탐색은 최악의 경우 O(n)이다.
// 그러나 이분탐색을 비교하면 O(log.n)이다.

// lt, rt가 필요하다.
// mid를 변수로 만들어준다. mid = Math.floor((lt + rt) /2)이다.

// 결정알고리즘은 이진탐색을 사용하는것이 기본으로 생각하자.

/// 7 - 11 뮤직비디오 ///
// function count(capacity, songs) {
//     let cnt = 1, sum = 0;
//     for(let x of songs) {
//         if(x + sum > capacity) {
//             cnt++;
//             sum = x;
//         } else {
//             sum += x;
//         }
//     }
//     return cnt;
// }
// function solution(m , songs) {
//     let answer = 0;
//     let lt = Math.max(...songs);
//     let rt = songs.reduce((a, b) => a + b ,0);
//     console.log(lt, rt);

//     while(lt <= rt) {
//         let mid = parseInt((lt + rt) / 2);
//         if(count(mid, songs) <= m) {
//             answer = mid;
//             rt = mid - 1;
//         } else {
//             lt = mid + 1;
//         }
//     }
//     return answer;
// }

// let MP3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(solution(3, MP3));

// 결정알고리즘을 어떻게하느냐 답의 범위를 찾아야 한다.
// 곡을 쪼갤 수 없기 때문에 한개의 곡을 담을 수 있는 용량은 되야한다.
// rt는 충분한 큰수로 잡아준다.
// mid를 구해주고 mid에 3장에 나눠담았을때 골고루 담을 수 있는 지를 봐야한다.
// 만일 3장을 줬는데 2장에 담을 수 있으면 1장은 불필요함으로 필요가없다.

// m이하이면은 답이 될 수 있다.


/// 7 - 12 마구간 정하기


// function count(distance, dist) {
//     let ep = dist[0];
//     let ex = 1;
//     for(let x of dist) {
//         if(x - ep >= distance) {
//             ex++;
//             ep = x;
//         }
//     }
//     return ex;
// }
// function solution(n, dist){
// let answer = 0;
// dist.sort((a, b) => a - b);
// let lt = dist[1] - dist[0];  // 최소거리
// let rt = dist[dist.length - 1] - dist[0]; // 최대거리
// console.log(lt, rt);
// while(lt <= rt) {
//     let mid = Math.floor((lt + rt) / 2);
//     if(count(mid, dist) >= n) {
//         answer = mid;
//         lt = mid + 1;
//     } else {
//         rt = mid - 1;
//     }
// }
// console.log(lt, rt);
// return answer;
// }

// let arr=[5, 6, 8, 12, 14];
// console.log(solution(3, arr));


///      8 - 1 재귀함수


// function solution(n) {
//     function DFS(L) {
//         if(L === 0) return; // 값을 반환하는 의미, 종료의 의미.
//         else {
//             DFS(L - 1);
//             console.log(L);
//         }
//     }

//     DFS(n)
// }
// solution(3);

// stack에 들어간다모든 함수들은.
// 함수가 호출이되면 함수 stackframe이 들어가는데 그곳에는 매개변수 (L) 지역변수 복귀주소가 담겨진다.

// stack영역은 함수가 호출되면 그 함수의 매개변수 지역변수 복귀주소가 저장되는 영역이다. 함수의 호출이 종료되면 소멸한다.

// 이러한 스텍프레임 덕분에 함수의 호출이 모두 끝난뒤에, 해당 함수가 호출되기 이전 상태로 되돌아 갈 수 있따.

// 순서를 바꾸면 출력이 바뀌는 것은 DFS(L - 1) 을 만나면 console.log(L)을 하지않고 DFS(L - 1)로 넘어간다 그러다가 결국 0이되면 스택에 담겨있는 0인경우가 사라지고
// 남아있는 스택의 제일위의 공간의 복귀주소로돌아간다 그럼console.log(를 한다. ) 그럼 1이되지.

//call stack

///  8 - 2  재귀함수를 이용한 이진수 출력 stack


// function solution(n) {
//     let answer = '';
//     function DFS(n) {
//         if(n === 0) return;
//         else {
//             DFS(parseInt(n / 2));
//             answer += (n % 2);
//         }
//     }

//     DFS(n)
//     return answer;

// }

// console.log(solution(11));


/// 8 - 3 이진트리순회(DFS: 깊이 우선 탐색)



// 이진트리 = 나무를 꺼꾸로 세워놓은 것
// 부모 * 2 왼쪽자식
// 부모 * 2 + 1 오른쪽자식

// 전위 중위 후위 가되었건간에 깊이우선탐색은 왼쪽으로 타고들어간다.
// 왼쪽자식의 왼쪽자식의 왼쪽자식
// 막히면 뒤로 빽해서 안가봤떤 길로 가본다. 막히면 또 되돌아온다.
// 이걸 전부 탐색할때까지 반복한다.

// 전위순회는 부모 - 왼자 - 오자 순으로 출력
// 중위는 왼자 - 부모 - 오자
// 후위순회는 왼쪽 오른쪽 부모

// function solution(v) {
//     let answer;
//     function DFS(v) { // v 는 부모
//         if(v > 7) return;
//         else {
//             // console.log(v); // 부모출력하고
//             // DFS(v * 2); // 왼쪽출력하고
//             // DFS(v * 2 + 1); // 오른쪽출력한다.
//             DFS(v * 2);
//             console.log(v);
//             DFS(v * 2 + 1);
//         }
//     }
//     DFS(v);
//     return answer;
// }

// console.log(solution(1));


/// 8 - 4  부분집합 구하기(DFS)



// function solution(n) {
//     let answer = [];
//     let ch = Array(n + 1).fill(0);

//     // ch[1] = 1;
//     // console.log(ch);
//     function DFS(v) {
//         if(v === n + 1) {
//             let tmp =""
//             for(let i = 1; i <= n; i++) {
//                 if(ch[i] === 1) tmp += i + " ";
//             }
//             console.log(tmp);
//         }
//         else {
//             ch[v] = 1;
//             DFS(v + 1);
//             ch[v] = 0; // 포함안시킨다.
//             DFS(v + 1);
//         }

//     }
//     DFS(1);
//     return answer;
// }
// console.log(solution(3));


/// 8 - 5 합이 같은 부분집합(이진트리 DFS)
/// 내가 푼 방법


// function solution(arr) {
//     let answer = "NO";
//     let min = arr.reduce((a, b) => a + b, 0) / 2;
//     let ch = Array(arr.length).fill(0);
//     let count = 0;

//     function DFS(v) {
//         if(count === 2) {
//             return answer = "YES";
//         }

//         if(v === a.length + 1) {
//             let sum = 0;
//             for(let i = 1; i <= a.length; i++) {
//                 if(ch[i] === 1) {
//                     sum += arr[i - 1];
//                     if(sum === min) count++;
//                 }
//             }
//         }
//         else {
//             ch[v] = 1; // 넣었을 때
//             DFS(v + 1);
//             ch[v] = 0; // 안넣었을 때
//             DFS(v + 1);
//         }
//     }
//     DFS(1)
//     return answer;
// }
// let a = [2, 2, 4];
// console.log(solution(a));


/// 강의에서 푼 방법


// function solution(arr) {
//     let answer = "NO", flag = 0;
//     let total = arr.reduce((a, b) => a + b, 0);
//     let n = arr.length;

//     function DFS(l, sum) {
//         if(flag) return;
//         if(l === n) {
//             if((total - sum) === sum) {
//                 answer = "YES";
//                 flag = 1;
//             }
//         }
//         else {
//         DFS(l + 1, sum + arr[l]);
//         DFS(l + 1, sum);
//         }
//     }
//     DFS(0, 0);
//     return answer;
// }
// let a = [1, 3, 5, 6, 7, 10];
// console.log(solution(a));


/// 8 - 6 바둑이 승차(DFS)


// function solution(limit, kgs) {
//     let answer = Number.MIN_SAFE_INTEGER;
//     let n = kgs.length;
//     function DFS(L, sum) {
//         if(sum > limit) return;
//         if(L === n) {
//             answer = Math.max(answer, sum);
//             console.log(answer + '------');
//         }
//         else {
//             console.log(sum);
//             DFS(L + 1, sum + kgs[L]); // 넣을 때
//             DFS(L + 1, sum); // 넣지 않을 때
//         }
//     }
//     DFS(0, 0);

//     return answer;
// }

// let list = [81, 58, 42, 33, 61];
// console.log(solution(259, list));


/// 8 - 7 최대 점수 구하기(DFS)

// function solution(time, exs) {
//     let answer = Number.MIN_SAFE_INTEGER;
//     let n = exs.length;

//     // exs[0][0] 얻을 수 있는 점수
//     // exs[0][1] 걸리는 시간
//     function DFS(L, Nsum, Tsum) {
//         if(Tsum > time) return
//         if(L === n) {
//             answer = Math.max(answer, Nsum);
//         }
//         else {
//             DFS(L + 1, Nsum + exs[L][0], Tsum + exs[L][1]) // 이문제를 풀었을 경우
//             DFS(L + 1, Nsum, Tsum) // 문제를 안푸는 경우;
//         }
//     }
//     DFS(0, 0, 0);
//     return answer;
// }

// let exs = [[5, 1], [10, 1], [25, 1], [15, 1], [6, 1], [7, 1]];
// console.log(solution(20, exs));

/// 8 - 8 중복 순열 구하기 (다중 for 문과 재귀의 차이점)

// 깊은 복사를 해서 넣어줘야한다.

// function solution(n, m) {
//     let answer = [];
//     let tmp = Array(m).fill(0);
//     function DFS(L) {
//         if (L === m) { // 두번 뽑았으면
//             console.log(tmp, answer);
//             answer.push(tmp.slice());
//         }
//         else {
//             for(let i = 1; i <= n; i++) {
//                 tmp[L] = i;
//                 DFS(L + 1);
//             }
//         }
//     }
//     DFS(0);
//     return answer;
// }
// console.log(solution(3, 2));

/// 8 - 9 동전교환

// function solution(m, arr) {
//   let answer = Number.MAX_SAFE_INTEGER;
//   let n = arr.length;
//
//   function DFS(L, sum) {
//     if(sum > m) return;
//     if(L >= answer) return;
//     if(sum === m) {
//       console.log(L, sum);
//       return answer = Math.min(answer, L);
//     } else {
//       for(let i = 0; i < n; i++) {
//         DFS(L + 1, sum + arr[i]);
//       }
//     }
//   }
//
//   DFS(0, 0);
//   return answer;
// }
//
// let arr = [1, 2, 5];
// console.log(solution(15, arr));


/// 8 - 10 순열구하기

// function solution(m, arr) {
//   let answer = [];
//   let tmp = Array(m).fill(0);
//   let ch = Array(arr.length).fill(0);
//   let n = arr.length;
//
//   function DFS(L) {
//     if(L === m) {
//       answer.push([...tmp]);
//     } else {
//       for(let i = 0; i < n; i++) {
//         if(ch[i] === 0) {
//           tmp[L] = arr[i];
//           ch[i] = 1;
//           DFS(L + 1)
//           ch[i] = 0;
//           }
//         }
//       }
//     }
//   DFS(0);
//   return answer;
// }
//
// let arr = [3 ,6, 9];
// console.log(solution(2, arr));


/// 8 - 11 팩토리얼

// function solution(n) {
//   let answer;
//   function DFS(n) {
//     if(n === 1) return 1;
//     else return n * DFS(n - 1);
//   }
//   answer = DFS(n);
//   return answer;
// }
//
// console.log(solution(5));


/// 8 - 12 조합수(메모이제이션)
            // function solution(n, r){
            //     let answer=[];
            //     let dy= Array.from(Array(35), () => Array(35).fill(0));
            //
            //     function DFS(n, r){
            //         if(dy[n][r]>0) return dy[n][r];
            //         if(n===r || r===0) return 1;
            //         else return dy[n][r]=DFS(n-1, r-1)+DFS(n-1, r);
            //     }
            //     answer=DFS(n, r);
            //     return answer;
            // }
            // console.log(solution(5, 3));

//

/// 8 - 13 수열추측하기

// function solution(n, f){
//       let answer, flag=0;
//       let dy= Array.from(Array(11), () => Array(11).fill(0));
//       let ch=Array.from({length:n+1}, ()=>0);
//       let p=Array.from({length:n}, ()=>0);
//       let b=Array.from({length:n}, ()=>0);
//       function combi(n, r){
//           if(dy[n][r]>0) return dy[n][r];
//           if(n===r || r===0) return 1;
//           else return dy[n][r]=combi(n-1, r-1)+combi(n-1, r);
//       }
//       function DFS(L, sum){
//           if(flag) return;
//           if(L===n && sum===f){
//               answer=p.slice();
//               flag=1;
//           }
//           else{
//               for(let i=1; i<=n; i++){
//                   if(ch[i]===0){
//                       ch[i]=1;
//                       p[L]=i;
//                       DFS(L+1, sum+(b[L]*p[L]));
//                       ch[i]=0;
//                   }
//               }
//           }
//       }
//       for(let i=0; i<n; i++){
//           b[i]=combi(n-1, i);
//       }
//       DFS(0, 0);
//       return answer;
//   }
//
//   console.log(solution(4, 16));



// ex n 이 5인경우에는 nC0, nC1 .... nCn 까지간다.


// 9 - 1 그래프와 탐색(DFS, BFS:넓이우선탐색)

// 9 - 1 그래프와 인접행렬

// 양방향 그래프, 인접그래프의 경우❓
// 인덱스번호가 정점번호다. 라고 생각해야한다.
// graph[a][b] = i;
// graph[b][a] = i;
// 1. 행번호를 쫙 탐색하면서 1이라고 되어있는 애들만 연결되어있는 정점이다.
// 2. 2로 고정을해놓고 쫙탐색한다.


// 방향그래프의 경우❓
// 1.똑같이 graph를 만든다.
// 2.만약에 [1, 2]로 오게되면 1번 node에서 2번 node로 갈 수 있다는 말이다.
// 3.[a, b]라고 생각하고 graph[a][b] = 1; 로 저장해 준다.
// 4.해석은 행 -> 열이라고 생각한다.
// 5.[3, 4]가 오게되면 3행 4열만 1이다.

// 가중치그래프의 경우❓
// 1. 방향그래프와 같이 graph를 만든다.
// 2. 만약에 [1, 2, 2] 이면❓ [startNode, endNode, 가중치] 
// 3.graph[a][b] = 가중치로 저장해 준다.

// 9 - 2 경로 탐색(인접행렬)
// 1번정점에서 N번 정점으로 가는 모든 경로의 가지수를 출력하는 문제
// 1번 정점에서 방문을 했으면 다시 돌아오지 못하도록 해야한다❕


// 1. Check 배열을 만들어 줘야한다.
// 2. 정점의 갯수만큼 가닥 수가 뻣어야 한다, for문일 돌아야 한다는 의미
// 3. 1에서 2로 갈수있는가? 갈 수 있다면 D(2)가 호출이 되어야한다, 꼭 ❕❕ 방문했으니 ch를 걸어줘야한다.
// 4. 2번으로 갔다면 다시 1번부터 마지막 번호까지 for문을 돌지만 1번 2번은 ch되어있기 때문에 3번부터 시작될 것이다.
// 5. 만일 N번 정점까지 갔다면 count++ 해준다.
// 6. 더이상 갈 곳이 없다면 D(N - 1) 로 Back해주고 ch를 풀어준다.

// function solution(n, arr) {
//     let answer = 0;
//     let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); 
//     let ch = Array.from({length:n + 1}, () => 0); // check배열 
//     path = [];
//     for(let [a, b] of arr) {
//         graph[a][b] = 1; // 방향 그래프
//         console.log(graph);
//         //graph[a][b] = 1; 까지 주면 무방향,인접 그래프이다.
//     }
//     function DFS(v) {
//         if(v === n) {
//             answer++;
//             console.log(path); // 끝까지 도달했으면 오는 경로인 i가 들어가 있을 것이다. // 
//                                //1을 ch를 안해줬기때문에 방문하지 않은 것으로 뜰 것이다. 💢주의💢
//         }
//         else {
//             for(let i = 1; i <= n; i++) {
//                 if(graph[v][i] === 1 && ch[i] === 0) { // 그래프의 v node에서 i node에 갈 수있으면 1번이다. 아직 체크가 안됬다면 0이다.
//                     ch[i] = 1;
//                     path.push(i); // 들어갈때는 넣어주고
//                     DFS(i);
//                     ch[i] = 0; // ch를 풀어준다.
//                     path.pop(); // 빠질때는 빼준다. 
//                 }
//             }
//         }
//     }

//     path.push(1);
//     ch[1] = 1;
//     DFS(1);
//     return answer;
// }

// let arr = [[1, 2],[1,3],[1,4],[2,1],[2,3],[2,5],[3,4],[4,2],[4,5]]
// console.log(solution(5, arr)); // (Node 갯수, 간선정보);



// 9 - 3 Node개수가 많을 때 적용

// function solution(n, arr){  
//     let answer=0;
//     let graph=Array.from(Array(n+1), ()=>Array());
//     let ch=Array.from({length:n+1}, ()=>0);
//     let path=[]
//     for(let [a, b] of arr){
//         graph[a].push(b);
//     }
//     function DFS(v){
//         if(v===n){
//             answer++;
//             console.log(path);
//         }
//         else{
//             for(let nv of graph[v]){
//                 if(ch[nv]===0){
//                     path.push(nv);
//                     ch[nv]=1;
//                     DFS(nv);
//                     ch[nv]=0;
//                     path.pop();
//                 }
//             }
//         }
//     }
//     ch[1]=1;
//     path.push(1);
//     DFS(1);
//     return answer;
// }

// let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
// console.log(solution(5, arr));