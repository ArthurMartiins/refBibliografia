var nome = document.getElementById("nome");
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

// const meses = [
//   "Jan",
//   "Fev",
//   "Mar",
//   "Abr",
//   "Mai",
//   "Jun",
//   "Jul",
//   "Ago",
//   "Set",
//   "Out",
//   "Nov",
//   "Dez",
// ];
// let data = new Date();
// let dataFormatada =
//   data.getDate() + " " + meses[data.getMonth()] + " " + data.getFullYear();
// console.log(dataFormatada);

function myFunction() {
  document.getElementById(
    "demo"
  ).innerHTML = `${sobrenome.value.toUpperCase()}, ${
    nome.value
  }. ${tituloArt.value.bold()}. ${url.value}. Acesso em: ${data.value}.`;
}

var copiarRef = document.getElementById("copiar");
if (copiarRef) {
  copiarRef.addEventListener("click", copiar);
}

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

console.log(`
  z$$$$$. $$
  $$$$$$$$$$$
 $$$$$$**$$$$             eeeeer
$$$$$%   '$$$             $$$$$F
4$$$$P     *$$             *$$$$F
$$$$$      '$$    .ee.      ^$$$F            ..e.
$$$$$       ""  .$$$$$$b     $$$F 4$$$$$$   $$$$$$c
4$$$$F          4$$$""$$$$    $$$F '*$$$$*  $$$P"$$$L
4$$$$F         .$$$F  ^$$$b   $$$F  J$$$   $$$$  ^$$$.
4$$$$F         d$$$    $$$$   $$$F J$$P   .$$$F   $$$$
4$$$$F         $$$$    3$$$F  $$$FJ$$P    4$$$"   $$$$
4$$$$F        4$$$$    4$$$$  $$$$$$$r    $$$$$$$$$$$$  ine
4$$$$$        4$$$$    4$$$$  $$$$$$$$    $$$$********
$$$$$        4$$$$    4$$$F  $$$F4$$$b   *$$$r
3$$$$F       d$$$$    $$$$"  $$$F *$$$F  4$$$L     .
$$$$$.     d$$$$$.   $$$$   $$$F  $$$$.  $$$$    z$P
 $$$$$e..d$$$"$$$b  4$$$"  J$$$L  '$$$$  '$$$b..d$$
  *$$$$$$$$$  ^$$$be$$$"  $$$$$$$  3$$$$F "$$$$$$$"
   ^*$$$$P"     *$$$$*    $$$$$$$   $$$$F  ^*$$$"
`);
