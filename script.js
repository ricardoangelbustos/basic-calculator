function setResult(value) {
    document.getElementById('result').innerHTML = value;
    if (value.length >20){ //si el texo es mayor a 8
        alert('El numero ingresado es muy largo');
	}
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