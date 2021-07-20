// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');


// -- Bronze II 분해합
// function solution(n) {
//     n = Number(n);
//     let answer = 0;
//     let num = n; 

//     for(let i = 1; i < num; i++) { // 1부터 돌아갈 부분
//         let sum = i;
//         let A = String(i).split(''); // ['2', '1', '6']
//         for(let x of A) {
//             sum += Number(x);
//         }
//         if(sum === n) {
//             answer = i;
//             break;
//         }
//     }
//     return answer;
// }

// let input = "101";
// console.log(solution(input));


//브루트포스 [덩치](🥈실버 5티어)

// 키와, 몸무게가 둘다 크면 덩치가 크다고 보고 등수는 자기보다 큰사람의수 + 1 이다. 아무도없다면 1등이되겠지?
// 
// function solution(arr) {
//     let answer = [];
//     let list = arr.split('\n');
//     list.shift();
//     let SplitList = [];
//     for(let x of list) { // 문자열을 숫자로 이루어진 배열로 나눠주기
//         SplitList.push(x.split(' '));
//     }

//     let L = list.length;
//     let Rank = 1; // 자기보다 큰 사람이 없을 때 
//     for(let x of SplitList) { // 등수를 볼 사람 x
//         for(let i = 0; i < L; i++) { // 자기를 제외한 대상 for문
//             let sum = 0;
//             if(SplitList[i] !== x) {  // 자기 자신이 아니면 비교를헤줘야지? 그걸위한 조건문이다.
//                 if(SplitList[i][0] > x[0]) sum++; // 키크면++
//                 if(SplitList[i][1] > x[1]) sum++; // 몸무게무거우면++
//             }
//             if(sum === 2) { // 둘다크면❓
//                 Rank++; // 등수 업❕
//             }
//         }
//         answer.push(Rank); 
//         Rank = 1; // Rank를 초기화
//     }
//     return answer.join(' '); // 문자열 상태로 출력
// }

// let input = `5
// 55 185
// 58 183
// 88 186
// 60 175
// 46 155`;
// console.log(solution(input));



/// 브루트 포스 [체스판 다시 칠하기] (🥈실버 5티어) 


// function solution(arr) {
//     let answer = [];
//     let input = arr.split('\n');
//     let NM = input.shift().split(' ').map(ele => parseInt(ele));
//     let N = NM.shift();
//     let M = NM.shift();
    
//         const WhiteFirst = [
//         'WBWBWBWB',
//         'BWBWBWBW',
//         'WBWBWBWB',
//         'BWBWBWBW',
//         'WBWBWBWB',
//         'BWBWBWBW',
//         'WBWBWBWB',
//         'BWBWBWBW'
//     ];
//     const BlackFirst = [
//         'BWBWBWBW',
//         'WBWBWBWB',
//         'BWBWBWBW',
//         'WBWBWBWB',
//         'BWBWBWBW',
//         'WBWBWBWB',
//         'BWBWBWBW',
//         'WBWBWBWB'
//     ];

//     function WhiteBorder(y, x) { // 행은 y축 열을 x 축이니깐
//         let count = 0;
        
//         for(let i = y; i < y + 8; i++) {  // 여긱 행부분이지? input에 i랑 j가 들어가지?  그니깐 i 는 결국 i + 7 < y + 8 이렇게 되는거구나.
//             for(let j = x; j < x + 8; j++) { // 최대 x 는 2지? 이건 index번호지? 그렇다면 여기서는 왜 + 8 까지인가?
//                 if(input[i][j] !== WhiteFirst[i - y][j - x]) count++; // 만일  WhiteBorder(3, 3)으로 들어왓다고 치자?
//                 // 그럼 for(let i = 3; i < 3 + 8; i++) {
//                          // for(let j = 3; j < 3 + 8; j++) {
//                              // if(input[3][3] !== WhiteFirst[3][3]) count++ 는 말이 안된다. 왜❓
//                              // 이 경우에 input[3][3]은 시작지점인데 WhiteFirst[3][3]은 말그대로 3행 3열의 부분이기 때문이다.
//                              // 그렇다면 이경우에는 input[i][j] !== WhiteFirst[i - y][j - x] 를해줘야 동일한 부분이 된다.
//             }
//          }
//         return count;
//     }

//     function BlackBorder(y, x) { // 행은 y축 열을 x 축이니깐
//         let count = 0;

//         for(let i = y; i < y + 8; i++) {
//             for(let j = x; j < x + 8; j++) {
//                 if(input[i][j] !== BlackFirst[i - y][j - x]) count++;
//             }
//         }
//         return count;
//     }

//     for(let i = 0; i + 7 < N; i++) {
//         for(let j = 0; j + 7 < M; j++) { // 인덱스번호이기때문에 + 7 이고 이것을 넘어가면 체스판을 벗어난다. 여기는 N미만이니깐 0부터 7까지면 8번이지?
//             answer.push(WhiteBorder(i, j)); // 시작지점이 화이트인 경우의 고쳐야 하는 수
//             answer.push(BlackBorder(i, j)); // 시작지점이 블랙인 경우에 고쳐야 하는 수
//         }
//     } // 행 부분
//     return Math.min(...answer); // 왜냐 ? []를 넣으면 배열이 되기때문에... 
// }

// let input = `10 13
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// WWWWWWWWWWBWB
// WWWWWWWWWWBWB`;

// console.log(solution(input));

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





// let input = `6
// 1 2 3 4 5 6
// 2 1 1 1`;
// input = input.split('\n');
// let numbers = input[1].split(' ').map(e => +e); // 문자를 숫자로 바꿔준다.
// console.log(numbers);
// let operators = input[2].split(' ').map(e => +e);
// console.log(operators);

// let max = Number.MIN_SAFE_INTEGER;
// let min = Number.MAX_SAFE_INTEGER;


// function operation(num1, num2, operator) {
//     switch(operator) {
//         case 0:
//             return num1 + num2;
//         case 1:
//             return num1 - num2;
//         case 2:
//             return num1 * num2;
//         case 3:
//             // 자바스크립트의 나누기, Math.floor로 C++의 나누기 연산 구현
//             const result = num1 >= 0 ? Math.floor(num1/num2) : -Math.floor(-num1/num2); // 그냥 둘다정수이면 나누기해서 소수점없애주고 안그러면 나누다음에 -붙여줘서 정수로 만들어준다는거지
//             return result;
//     }
// }

// // 경우의 수가 많지 않기 때문에  완전탐색(DFS)로 모든 경우를 검사한다.
// function DFS(index, result, operators) {
//     if(index === numbers.length) {
//         max = Math.max(max, result);
//         min = Math.min(min, result);
//     }

//     for(let i = 0; i < 4; i++) {
//         if(operators[i] > 0) {
//             const newOpers = JSON.parse(JSON.stringify(operators));
//             newOpers[i] -= 1;
//             console.log(newOpers, operators);

//             DFS(index + 1, operation(result, numbers[index], i), newOpers);
//             console.log(result); // index는 숫자의 갯수를 체크하기위해서 사용 
//         }
//     }
// }
// DFS(1, numbers[0], operators);
// console.log(max ? max : 0);
// console.log(min ? min : 0);



// input의 가장 작은 생성자를 구해내라.
// 1. N의 분해합의 합은 N과 N을 이루는 각 자리수의 합을 말한다. ex) 267의 분해합은 267 + 2 + 6 + 7 = 282
// 2. 어떤 자연수 M의 분해합이 N인 경우 M을 N의 생성자라고한다. ex) 245의 분해합은 256이 되고 따라서 245는 256의 생성자가 된다.
// 3. 경우에 따라 생성자가 없을 수도 있고 2개 이상 일 수도 있다.




// const fs = require('fs');
// // const input = fs.readFileSync('/dev/stdin').toString().trim();



// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let input = `6 5
// 1 2
// 2 5
// 5 1
// 3 4
// 4 6`
// input = input.split('\n');
// const NM = input[0].split(' '); 
// const n = +NM[0]; // 정점의 개수
// const m = +NM[1]; // 간선의 개수
// let links = [];
// for(let i = 1; i < input.length; i++) {
//     links.push(input[i].split(' ').map((e) => +e));
// } // 결론은 NM을 제외한 나머지부분들을 각각 나눠준거
// let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
// let ch = Array(n).fill(0);

// // 양방향 그래프를 만드는 부분
// console.log(ch); 
// for(let [s, e] of links) {
//     graph[s][e] = 1;
//     graph[e][s] = 1;
// }
// console.table(graph);


// // 정점의 개수만큼 DFS 실행

// let count = 0;
// function DFS(v) {
//     ch[v] = 1;
//     for(let i = 1; i < graph.length; i++) {
//         if(graph[v][i] === 1 && ch[v] === 0) { 
//             console.log(i);
//             DFS(i);
//         }
//     }
// }

// for(let i = 1; i < n; i++) {
//     if(ch[i] === 0) {
//         count++;
//         DFS(i);

//     } 
// }

// console.log(count);


// 👍 각 트리의 요소의 개수 구하기
// DFS: 각 요소의 개수 (🥈실버 1티어)

// function solution(arr) {
//     arr = arr.split('\n');
//     let list = [];
//     // list에 자료를 담는다.
//     for(let i = 0; i < arr.length; i++) {
//         list.push(arr[i].split(' ').map((ele) => Number(ele)));
//     }
//     let nm = list.shift();
//     let n = nm.shift(); // 노드의 수
//     let m = nm.shift(); // 간선의 수
//     let answer = [];

//     let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 그래프 부분
//     let ch = Array(n + 1).fill(0); // 체크배열

//     // 그래프를 채워야겠지?
//     for(let [x, y] of list) {
//         graph[x][y] = 1;
//         graph[y][x] = 1;
//     } 

//     let count = 0;
//     function DFS(v) {
//         // console.log("DFS" + v + "입니다.");
//         ch[v] = 1;
//         for(let i = 1; i < graph.length; i++) { // v 로 들어온 부분을  for문을 통해서 갈 수 있는 지 없는지 판단 해볼 것입니다.
//             if(ch[i] === 0 && graph[v][i] === 1) { // v번 node와 연결된 node이고 가보지 않은 node라면?
//                 graph[v][i] = 0; // 가볼 것이기 때문에 0으로 바꿔줍니다.
//                 count++;
//                 DFS(i); // 가는 node부터 또 탐색 시작
//             }
//         }
//     }

//     // DFS를 호출하는 부분
//     // i는 출발 노드가 될 것이다.
//     for(let i = 1; i <= n; i++) {  
//         if(ch[i] === 0 ) { // 가보지 않은 노드라면?
//             DFS(i); // DFS 함수 호출해준다. 즉 가본다.
//             // 탐색이 다 끝나면 해준다.
//             answer++; // 호출이끝나면 count++
//         }

//     }
//     DFS(0);

//     return answer;
// }

// let input = `6 2
// 1 3
// 2 3`
// console.log(solution(input)); 



////////////// 🐲 ㅈ ㅓㄴ소바 ㄹ 문제 🐲
// DFS: 트리를 나누고 각 트리의 개수 구하기 (🥈실버 1++티어)
// 한개의 트리를 2개로 나눠서 각각의 요소수를 비교해서 요소수의 차이가 제일 적은 것을 답으로 도출하자.


// 몇개의 트리인지 각각 트리의 노드의 개수는 얼마인지 구해주는 함수
// function nodeAmount(arr) {
//     let answer = [];
//     let m = arr.length + 1; // 간석의 개수 // 노드가 한개없어지고
//     let n = m + 1;  // 노드의 개수 // 간선이 한개 없어진 상태이다.
    
//     let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 노드들의 인접노드를 볼 수 있는 그래프
//     let ch = Array(n + 1).fill(0); // check Array


//     for(let [x, y] of arr) {
//         // console.log(x, y);
//         graph[x][y] = 1;
//         graph[y][x] = 1;
//     }

//     let count = 0; // 두개로 나눈 트리를 탐색하여 각각의 트리의 요소개수 합을 넣어줄 부분.
//     let ex = 0; 

//     function DFS(v) {
//         ch[v] = 1; // 현재node는 탐색한다 즉 탐색했다.
//         for(let i = 1; i < graph.length; i++) { // 여기서는 노드들을 다 둘러볼 것이기 때문에 graph의 길이로 해준다.
//             if(ch[i] === 0 && graph[v][i] === 1) {
//                 count++; // 현재 트리의 포함되는 node의 개수++
//                 graph[v][i] = 0; // 무한반복되지 않도록 탐색했다는 뜻으로 바꿔준다.
//                 DFS(i);
//             }
//         }
//     }

//     for(let i = 1; i <= n; i++) {
//         if(ch[i] === 0) {
//             count++;
//             DFS(i);
//             ex++ // 몇개의 트리일지 더해주는 부분
//             answer.push(count);
//             count = 0;
//             // console.table(graph);
//         }    
//     }
//     DFS(0);
//     // console.log(ex);
//     return answer;
// }


// // 2개로 나눈 트리 각각의 노드 개수를 nodeAmount()함수로부터 받아와 
// // 차이의 최소를 return 받는 부분.
// function nodeMin(arr) {
//     let list = [];
//     let answer = Number.MAX_SAFE_INTEGER;
//     for(let i = 0; i < arr.length; i++) {
//         let arrcopy1 = arr.slice();
//         let arrcopy2 = arrcopy1.splice(i, 1);
//         // console.log(arrcopy1)
//         // console.log(arrcopy2);
//         list.push(nodeAmount(arrcopy1));
//     }
//     for(let x of list) {
//         x = Math.abs(x[0] - x[1]);
//         console.log(x);
//         answer = Math.min(answer, x);
//     }
//     return answer;
// }

// // / case 1, 2, 3
// // let input = [[1, 2],
// // [2, 3],
// // [2, 4],
// // [4, 5],
// // [4, 6],
// // [4, 8],
// // [7, 8],
// // [8, 9]];

// //  let input = [[1, 2],
// //  [2, 3],
// //  [3, 4]];

// let input = [[1, 2],
// [2, 3],
// [3, 4],
// [3, 5],
// [5, 6],
// [6, 7]];
// console.log(nodeMin(input))


