/// 🚀1주차 [부족한 금액 계산하기]

function solution(price, money, count) {
    for(let i = 1; i <= count; i++) {
     money -= price * i;   
    }
    return money > 0 ? 0 : Math.abs(money);
}

console.log(solution(3, 20, 4));


///🚀 2주차 [상호 평가]
/// 🟠수정 포인트(행이 아니라 열을 기준으로 해야한다.)
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
        scores[i].sort((a, b) => a - b); // 오름차순으로 정렬하기 전에 내점수를 선택해줘야한다.
        
        if((selfScore === scores[i][0] && scores[i][0] !== scores[i][1])
           || 
           (selfScore === scores[i][L - 1] && scores[i][L - 1] !== scores[i][L - 2]))  { 
            // 유일한 최저점 이거나 유일한 최고점 이라면?
            // selfScore를 빼고 평균을 내서 등급을 정한다.
            let sum = 0;
            for(let x of scores[i]) {
                if(x !== selfScore) sum += x;        
            };  
            // 평균을 구하는 부분
            let average = sum / (L - 1);
            answer += Rank(average);
        }  
    }
    return answer;
}

console.log(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]));