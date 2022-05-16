var id = "hello";
var pw = "1234";

function check(){
    var inputId = document.getElementById("ID").value;
    var inputPW = document.getElementById("PW").value;

    if (inputId != id || inputPW != pw){
        alert("ID 혹은 패스워드를 잘못 입력 하셨거나 등록되지 않은 ID 입니다.");
    }
    else{
        alert("로그인 성공");
    }
}
// javascript