import "./style.css";

// EMPIEZA POR LA CADENA → ^
const ejemploLiteralOk = "ejemplos...";
const ejemploLiteralNotOk = "xejemplo"
const inicioLiteral = /^ejemplo/;

const resultLiteralOk = inicioLiteral.test(ejemploLiteralOk);
console.log("ejemplo Inicio Ok: ", resultLiteralOk);
const resultLiteralNotOk = inicioLiteral.test(ejemploLiteralNotOk);
console.log("ejemplo Inicio Not Ok: ", resultLiteralNotOk);

// TERMINA CON LA CADENA → $ 
const ejemploFinLiteralOk = "asejemplo";
const ejemploFinLiteralNotOk = "ejemplos"
const finLiteral = /ejemplo$/;

const resultFinLiteralOk = finLiteral.test(ejemploFinLiteralOk);
console.log("ejemplo Fin OK: ", resultFinLiteralOk);
const resultFinLiteralNotOk = finLiteral.test(ejemploFinLiteralNotOk);
console.log("ejemplo Fin Not Ok: ", resultFinLiteralNotOk);

// OMISIÓN DE COMODINES → \
const ejemploOmisionComOk = "ejemplo.txt";
const ejemploOmisionComNotOk = "ejemplo.";
const omisionComodin = /ejemplo\./;

console.log(`Omisión Comodín Ok: ${ejemploOmisionComOk} → ${omisionComodin.test(ejemploOmisionComOk)}`)
console.log(`Omisión Comodín Not Ok: ${ejemploOmisionComNotOk} → ${omisionComodin.test(ejemploOmisionComNotOk)}`)

// OMISIÓN DE COMODINES ejemplo2 → \
const ejemploOmisionCom2Ok = "^ejemplo$.txt";
const ejemploOmisionCom2NotOk = "asd^ejemplo$.txt";
const omisionComodin2 = /^\^ejemplo\$\./;

console.log(`Omision Comodin 2 Ok: ${ejemploOmisionCom2Ok} → ${omisionComodin2.test(ejemploOmisionCom2Ok)}`);
console.log(`Omision Comodin 2 Not Ok: ${ejemploOmisionCom2NotOk} → ${omisionComodin2.test(ejemploOmisionCom2NotOk)}`);

// CUALQUIER CARÁCTER → .
const ejCualquierCaracterOk = "ejemplo.txt";
const ejCualquierCaracterNotOk = "ejemplo.tx";
const cualquierCaracter = /\....$/;

console.log(`Cualquier caracter Ok: ${ejCualquierCaracterOk} → ${cualquierCaracter.test(ejCualquierCaracterOk)}`)
console.log(`Cualquier caracter Not Ok: ${ejCualquierCaracterNotOk} → ${cualquierCaracter.test(ejCualquierCaracterNotOk)}`)

// PERTENENCIA AL GRUPO → []
const valorGrupo = /[148]/;
console.log(`Cualquiera de estos num "123" está incluído en ${valorGrupo}`, valorGrupo.test("123"));
console.log(`Cualquiera de estos num "555" está incluído en ${valorGrupo}`, valorGrupo.test("555"));

// NI LETRAS NI NÚMEROS → W
const ejValoresW = ["aaa", "123", "@#%"];
const niNumNiLetras = /^\W\W\W$/;
ejValoresW.forEach((valor) => {
    console.log(`La RegEx ${niNumNiLetras} coincide con "${valor}"? → `, niNumNiLetras.test(valor));
});

// ES UN DÍGITO → d
const ejValoresD = ["aaa", "123"];
const soloDigitos = /^\d\d\d$/;
ejValoresD.forEach((valor) => {
    console.log(`La RegEx ${soloDigitos} coincide con "${valor}"? →`, soloDigitos.test(valor));
});

// NO ES UN DÍGITO → D
const ejValoresNoD = ["aaa", "123"];
const sinDigitos = /^\D\D\D$/;
const sinDigitos2 = /[^0-9]/ // ^ dentro de [] implica negación 
ejValoresNoD.forEach((valor) => {
    console.log(`La RegEx ${sinDigitos} coincide con "${valor}"? →`, sinDigitos.test(valor));
});
ejValoresNoD.forEach((valor) => {
    console.log(`La RegEx ${sinDigitos2} coincide con "${valor}"? →`, sinDigitos2.test(valor));
});

// ESPACIOS, TAB O NUEVA LÍNEA → s
const ejEspacios = ["12 3", "123", "123 "];
const espacios = /^\d\d\d\s$/;
ejEspacios.forEach((valor) => {
    console.log(`${espacios} hay espacios en esa posición? "${valor}" →`, espacios.test(valor))
});

// SIN ESPACIOS, TAB O NUEVA LÍNEA → S
const ejSinEspacios2 = ["12 3", "123 ", "1234"]
const sinEspacios = /^\d+$/;
ejSinEspacios2.forEach((valor) => {
    console.log(`${sinEspacios} NO hay espacios en cualquier posición "${valor}" →`, sinEspacios.test(valor))
});

