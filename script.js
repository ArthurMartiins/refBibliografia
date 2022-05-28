var moment = require("moment");
moment().format("DD/MM/YYY");

var nome = document.getElementById("nome");
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById(
    "demo"
  ).innerHTML = `${sobrenome.value}, ${nome.value}. ${tituloArt.value}. ${url.value}. Acesso em: ${data.value}.`;
}

function copiar() {
  /* Get the text field */
  var copyText = document.getElementById("demo");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
