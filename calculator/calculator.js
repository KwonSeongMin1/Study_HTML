// util
var flag = 1;
function AC(){
    document.getElementById("input").value = "0";
}
function CE() {
    document.getElementById("input").value = document.getElementById("input").value.slice(0,-1);
}

//operator
function per(){
    if(flag){
        document.getElementById("input").value += "%";
        flag = 0;
    }
}
function div() {
    if (flag) {
        document.getElementById("input").value += "/";
        flag = 0;
    }
}
function mul() {
    if (flag) {
        document.getElementById("input").value += "*";
        flag = 0;
    }
}
function minus() {
    if (flag) {
        document.getElementById("input").value += "-";
        flag = 0;
    }
}
function plus() {
    if (flag) {
        document.getElementById("input").value += "+";
        flag = 0;
    }
}
function equal() {
    document.getElementById("input").value = eval(document.getElementById("input").value);
}
function comma() {
    if (flag) {
        document.getElementById("input").value += ".";
        flag = 0;
    }
}

// number
function one() {
    if (document.getElementById("input").value == "0") document.getElementById("input").value = "1";
    else document.getElementById("input").value += "1";
    flag = 1;
}
function two() {
    if (document.getElementById("input").value == "0") document.getElementById("input").value = "2";
    else document.getElementById("input").value += "2";
    flag = 1;
}
function three() {
    if (document.getElementById("input").value == "0") document.getElementById("input").value = "3";
    else document.getElementById("input").value += "3";
    flag = 1;
}
function four() {
    if (document.getElementById("input").value == "0") document.getElementById("input").value = "4";
    else document.getElementById("input").value += "4";
    flag = 1;
}
function five() {
    if (document.getElementById("input").value == "0") document.getElementById("input").value = "5";
    else document.getElementById("input").value += "5";
    flag = 1;
}
function six() {
    if (document.getElementById("input").value == "0") document.getElementById("input").value = "6";
    else document.getElementById("input").value += "6";
    flag = 1;
}
function seven() {
    if (document.getElementById("input").value == "0") document.getElementById("input").value = "7";
    else document.getElementById("input").value += "7";
    flag = 1;
}
function eight() {
    if (document.getElementById("input").value == "0") document.getElementById("input").value = "8";
    else document.getElementById("input").value += "8";
    flag = 1;
}
function nine() {
    if (document.getElementById("input").value == "0") document.getElementById("input").value = "9";
    else document.getElementById("input").value += "9";
    flag = 1;
}
function zero() {
    if (document.getElementById("input").value == "0") document.getElementById("input").value = "0";
    else document.getElementById("input").value += "0";
    flag = 1;
}