var fnum = prompt("주민등록번호 앞자리를 입력하세요 : ");
var bnum = prompt("주민등록번호 뒷자리를 입력하세요 : ");
var month = "";
var day = "";
if (fnum[2]==0){
  month=fnum[3];
}
else {
  month=fnum.substring(2,4);
}
if (fnum[4]==0){
  day=fnum[5];
}
else {
  day=fnum.substring(4,6);
}

(fnum.length==6)?alert("생년월일은 다음과 같습니다.\n20"+fnum.substring(0,2)+"\n"+month+"\n"+day):alert("제대로 입력하세요.");
