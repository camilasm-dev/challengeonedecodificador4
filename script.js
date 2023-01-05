var textoInicial;
var textoFinalC;
var textoFinalD;

function criptografar() {
    var textoInicial = document.getElementById("entrada").value;
    textoFinalC = textoInicial.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");
    document.getElementById("texto").innerHTML = textoFinalC;
}

function descriptografar() {
    var textoInicial = document.getElementById("entrada").value;
    textoFinalD = textoInicial.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("texto").innerHTML = textoFinalD;
}

function copiar() {
    var textoCopiado = document.getElementById("texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function limpar() {
    var entradaTexto = document.querySelector("textarea#entrada");
    entradaTexto.value = "";
    var saidaTexto = document.querySelector("textarea#texto");
    saidaTexto.innerHTML = "";
}





