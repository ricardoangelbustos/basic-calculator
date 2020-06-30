function setResult(value) {
    document.getElementById('result').innerHTML = value;
}
function getResult() {
    return(document.getElementById('result').innerHTML);
}
function add(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function calc() {
    var result = eval(getResult()); 
    if (result=="Infinity") {
        alert('No se puede dividir por cero')
        setResult(0);
    } else {
        setResult(result);
    }
}
function del() { 
    setResult(0);
}
document.addEventListener('keyup', event => {
    if (event.keyCode === 97) {
        document.getElementById("1").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 98) {
        document.getElementById("2").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 99) {
        document.getElementById("3").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 100) {
        document.getElementById("4").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 101) {
        document.getElementById("5").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 102) {
        document.getElementById("6").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 103) {
        document.getElementById("7").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 104) {
        document.getElementById("8").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 105) {
        document.getElementById("9").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 96) {
        document.getElementById("0").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 107) {
        document.getElementById("+").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 109) {
        document.getElementById("-").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 106) {
        document.getElementById("*").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 111) {
        document.getElementById("/").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 8) {
        document.getElementById("del").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 110) {
        document.getElementById("point").click();
    }
}, false)
document.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        document.getElementById("equal").click();
    }
}, false)