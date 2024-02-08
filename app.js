
let btnCopiar = document.getElementById("ocultar").style.display="none";
let texArea = document.getElementById("respuesta").style.display="none";

function Encriptado() {
    let frase = [];
    let texto = document.getElementById("txtArea").value;
    let txtMinuscula = texto.toLowerCase();
    texto = txtMinuscula;
    for (let i = 0; i < texto.length; i++) frase.push(texto[i]);
    
    for (let i = 0; i < texto.length; i++)
        if (texto[i] === "a" || texto[i] === "á") {
            frase.splice(i, 1, "ai");
        } else if (texto[i] === "e" || texto[i] === "é") {
            frase.splice(i, 1, "enter");
        } else if (texto[i] === "i" || texto[i] === "í") {
            frase.splice(i, 1, "imes");
        } else if (texto[i] === "o" || texto[i] === "ó") {
            frase.splice(i, 1, "ober");
        } else if (texto[i] === "u" || texto[i] === "ú") {
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
