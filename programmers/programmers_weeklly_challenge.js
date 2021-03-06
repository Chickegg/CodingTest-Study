/// ๐1์ฃผ์ฐจ [๋ถ์กฑํ ๊ธ์ก ๊ณ์ฐํ๊ธฐ]

function solution(price, money, count) {
    for(let i = 1; i <= count; i++) {
     money -= price * i;   
    }
    return money > 0 ? 0 : Math.abs(money);
}

console.log(solution(3, 20, 4));


///๐ 2์ฃผ์ฐจ [์ํธ ํ๊ฐ]
/// ๐ ์์  ํฌ์ธํธ(ํ์ด ์๋๋ผ ์ด์ ๊ธฐ์ค์ผ๋ก ํด์ผํ๋ค.)
function solution(scores) {
    let answer = '';
    let L = scores.length; 
    
    
    function Rank(average) {
        if(average >= 90) {
            return 'A';
        } else if(average < 90 && average >= 80) {
            return 'B';
        } else if(average < 80 && average >= 70) {
            return 'C';
        } else if(average < 70 && average >= 50) {
            return 'D';
        } else {
            return 'F';
        }
    }
    
    for(let i = 0 ; i < L; i++) {
        let selfScore = scores[i][i]; 
        scores[i].sort((a, b) => a - b); // ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌํ๊ธฐ ์ ์ ๋ด์ ์๋ฅผ ์ ํํด์ค์ผํ๋ค.
        
        if((selfScore === scores[i][0] && scores[i][0] !== scores[i][1])
           || 
           (selfScore === scores[i][L - 1] && scores[i][L - 1] !== scores[i][L - 2]))  { 
            // ์ ์ผํ ์ต์ ์  ์ด๊ฑฐ๋ ์ ์ผํ ์ต๊ณ ์  ์ด๋ผ๋ฉด?
            // selfScore๋ฅผ ๋นผ๊ณ  ํ๊ท ์ ๋ด์ ๋ฑ๊ธ์ ์ ํ๋ค.
            let sum = 0;
            for(let x of scores[i]) {
                if(x !== selfScore) sum += x;        
            };  
            // ํ๊ท ์ ๊ตฌํ๋ ๋ถ๋ถ
            let average = sum / (L - 1);
            answer += Rank(average);
        }  
    }
    return answer;
}

console.log(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]));