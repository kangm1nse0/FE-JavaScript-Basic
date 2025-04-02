let likelion = [
  { name: "장재혁", part: "FE_파트장", age: 23 },
  { name: "최효리", part: "FE_부회장", age: 25 },
  { name: "전수빈", part: "FE_기획", age: 25 },
  { name: "김예린", part: "FE_홍보", age: 23 },
];

// 1번 문제 코드작성

console.log(result1);
// 2번 문제
let result2=[];
result2=likelion.map(function(element){
  if(element.age>=24)
    return element;
});
console.log(result2);

// 3번 문제 코드작성
let targetName = "전수빈";
let result3 = null;
result3=likelion.map(function(element){
  if(element.name===targetName)
    return element.part;
});
console.log(result3);
