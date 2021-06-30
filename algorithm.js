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

function solution(test) {
    let answer = 0, tmp = []; // 결과값 , 경우의수의 상세정보
    let N = test[0].length; // 학생수
    let M = test.length; // 시험획수

    for(let i = 1; i <= N; i++) { // 멘토후보 i 학생
        for(let j = 1; j <= N; j++) { // 멘티후보 j 학생
            if(i !== j) { // 둘이같을경우는 존재하지 않기때문.
                let count = 0; // k번째 시험때 멘토로 가정한 i와 멘티로 가정한 j의 관계가 성립하는경우
                for(let k = 0; k < M; k++) { // M을 쓰는 이유는 k의경우는 k번째 시험을 나타내기위해 사용하기 때문이다.
                    let pi = pj = 0;
                    for(let s = 0; s < N; s++) { // 여기서 s 는 곧 k번째시험에 s 번째를 탐색하여 i학생의 등수와 j 학생의 등수를 알아내기 위해 사용한다.
                        if(test[k][s] === i) pi = s; // i번째 학생의 등수는 index s 번째이다 ex) 3번째에 위치해 있으면 3등이다.
                        if(test[k][s] === j) pj = s; // 마찬가지.
                    }
                    if(pi < pj) count++; // k번째 시험때 i 학생이 j 학생보다 등수가 높을경우 count++해준다.
                }
                if(count === M) { // 멘토멘티로 가정한 관계가 모든시험에서 성립될경우 결과값에 ++ 해주고 tmp에 push해준다.
                    answer++;
                    tmp.push([i, j]);
                }
            }
        }
    }
    // console.log(tmp, answer); 확인을위한 콘솔부분
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));
