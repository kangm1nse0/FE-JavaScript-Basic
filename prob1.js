//1. 함수 로직 작성 문제

function solution(num, total) {
  let center=total/num;   //center가 평균값
  let answer=[];
  let first=center-(num/2)+0.5;


  for(let i=0;i<num;i++){
      answer[i]=first+i;
  }
  
  return answer;
}
console.log(solution(5,5));

