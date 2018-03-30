var height = prompt("신장을 입력하세요 : ");
var weight = prompt("몸무게를 입력하세요 : ");
if (weight>=(height-100)*0.9) {
  alert("적정 몸무게 이상");
}
else {
  alert("적정 몸무게 미달");
}
