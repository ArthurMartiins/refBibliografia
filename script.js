// var moment = require("moment");
// moment().format("DD/MM/YYY");

var nome = document.getElementById("nome");
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function sentenceCase(str) {
  return str
    .replace(/[a-z]/i, function (letter) {
      return letter.toUpperCase();
    })
    .trim();
}

function myFunction() {
  document.getElementById(
    "demo"
  ).innerHTML = `${sobrenome.value.toUpperCase()}, ${
    nome.value
  }. ${tituloArt.value.bold()}. ${url.value}. Acesso em: ${data.value}.`;
}

document.getElementById("copiar").addEventListener("click", copiar);

function copiar() {
  var copyText = document.getElementById("demo");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  alert("texto copiado");
}
