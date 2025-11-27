import "./style.css";

// TRUE SI EMPIEZA CON ejemplo
const ejemploLiteralOk = "ejemplos...";
const ejemploLiteralNotOk = "xejemplo"
const inicioLiteral = /^ejemplo/;

const resultLiteralOk = inicioLiteral.test(ejemploLiteralOk);
console.log("ejemplo Inicio Ok: ", resultLiteralOk);
const resultLiteralNotOk = inicioLiteral.test(ejemploLiteralNotOk);
console.log("ejemplo Inicio NotOk: ", resultLiteralNotOk);

// TRUE SI TERMINA CON ejemplo
const ejemploFinLiteralOk = "asejemplo";
const ejemploFinLiteralNotOk = "ejemplos"
const finLiteral = /ejemplo$/;

const resultFinLiteralOk = finLiteral.test(ejemploFinLiteralOk);
console.log("ejemplo Fin OK: ", resultFinLiteralOk);
const resultFinLiteralNotOk = finLiteral.test(ejemploFinLiteralNotOk);
console.log("ejemplo Fin NotOk: ", resultFinLiteralNotOk);

// OMISION DE COMODINES
const ejemploOmisionComOk = "ejemplo.txt";
const ejemploOmisionComNotOk = "ejemplo."
const omisionComodin = /ejemplo\./;

console.log(`Omisión Comodín Ok: ${ejemploOmisionComOk} → ${omisionComodin.test(ejemploOmisionComOk)}`)
console.log(`Omisión Comodín Ok: ${ejemploOmisionComNotOk} → ${omisionComodin.test(ejemploOmisionComNotOk)}`)

// OMISION DE COMODINES ejemplo2
const ejemploOmisionCom2Ok = "^ejemplo$.txt";
const ejemploOmisionCom2NotOk = "asd^ejemplo$.txt"
const omisionComodin2 = /^\^ejemplo\$\./;

console.log(`Omision Comodin 2 Ok: ${ejemploOmisionCom2Ok} → ${omisionComodin2.test(ejemploOmisionCom2Ok)}`);
console.log(`Omision Comodin 2 NotOk: ${ejemploOmisionCom2NotOk} → ${omisionComodin2.test(ejemploOmisionCom2NotOk)}`);



