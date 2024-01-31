
let btnCopiar = document.getElementById("ocultar").style.display="none";
let texArea = document.getElementById("respuesta").style.display="none";

function Encriptado() {
    let frase = [];
    let texto = document.getElementById("txtArea").value;
    for (let i = 0; i < texto.length; i++) frase.push(texto[i]);
    console.log(frase);
    for (let i = 0; i < frase.length; i++)
        if (frase[i] === "a") {
            frase.splice(i, 1, "ai");
        } else if (frase[i] === "e") {
            frase.splice(i, 1, "enter");
        } else if (frase[i] === "i") {
            frase.splice(i, 1, "imes");
        } else if (frase[i] === "o") {
            frase.splice(i, 1, "ober");
        } else if (frase[i] === "u") {
            frase.splice(i, 1, "ufat");
        }
    document.getElementById("img3").style.display="none";
    document.getElementById("msg").style.display="none";
    let textoE = frase.join("");
    document.getElementById("respuesta").innerHTML= textoE;
    
    // Botones
    document.getElementById("respuesta").style.display="block";
    document.getElementById("ocultar").style.display="block";
}

function Desencriptado() {
    let texto = document.getElementById("txtArea").value;
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g,"e");
    texto = texto.replace(/imes/g,"i");
    texto = texto.replace(/ober/g,"o");
    texto = texto.replace(/ufat/g,"u");
    console.log(texto);
    document.getElementById("respuesta").innerHTML= texto;
}

function copiar() {
    let texto = document.getElementById("respuesta").textContent;
    navigator.clipboard.writeText(texto);
    limpiar();
}

function limpiar() {
    document.getElementById("txtArea").value = "";
    // document.getElementById("respuesta").value = "";
}
