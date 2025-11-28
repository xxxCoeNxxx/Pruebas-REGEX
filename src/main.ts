import "./style.css";

// EMPIEZA POR LA CADENA ^
const ejemploLiteralOk = "ejemplos...";
const ejemploLiteralNotOk = "xejemplo"
const inicioLiteral = /^ejemplo/;

const resultLiteralOk = inicioLiteral.test(ejemploLiteralOk);
console.log("ejemplo Inicio Ok: ", resultLiteralOk);
const resultLiteralNotOk = inicioLiteral.test(ejemploLiteralNotOk);
console.log("ejemplo Inicio Not Ok: ", resultLiteralNotOk);

// TERMINA CON LA CADENA $ 
const ejemploFinLiteralOk = "asejemplo";
const ejemploFinLiteralNotOk = "ejemplos"
const finLiteral = /ejemplo$/;

const resultFinLiteralOk = finLiteral.test(ejemploFinLiteralOk);
console.log("ejemplo Fin OK: ", resultFinLiteralOk);
const resultFinLiteralNotOk = finLiteral.test(ejemploFinLiteralNotOk);
console.log("ejemplo Fin Not Ok: ", resultFinLiteralNotOk);

// OMISION DE COMODINES \
const ejemploOmisionComOk = "ejemplo.txt";
const ejemploOmisionComNotOk = "ejemplo.";
const omisionComodin = /ejemplo\./;

console.log(`Omisión Comodín Ok: ${ejemploOmisionComOk} → ${omisionComodin.test(ejemploOmisionComOk)}`)
console.log(`Omisión Comodín Not Ok: ${ejemploOmisionComNotOk} → ${omisionComodin.test(ejemploOmisionComNotOk)}`)

// OMISION DE COMODINES ejemplo2 \
const ejemploOmisionCom2Ok = "^ejemplo$.txt";
const ejemploOmisionCom2NotOk = "asd^ejemplo$.txt";
const omisionComodin2 = /^\^ejemplo\$\./;

console.log(`Omision Comodin 2 Ok: ${ejemploOmisionCom2Ok} → ${omisionComodin2.test(ejemploOmisionCom2Ok)}`);
console.log(`Omision Comodin 2 Not Ok: ${ejemploOmisionCom2NotOk} → ${omisionComodin2.test(ejemploOmisionCom2NotOk)}`);

// CUALQUIER CARACTER .
const ejCualquierCaracterOk = "ejemplo.txt";
const ejCualquierCaracterNotOk = "ejemplo.tx";
const cualquierCaracter = /\....$/;

console.log(`Cualquier caracter Ok: ${ejCualquierCaracterOk} → ${cualquierCaracter.test(ejCualquierCaracterOk)}`)
console.log(`Cualquier caracter Not Ok: ${ejCualquierCaracterNotOk} → ${cualquierCaracter.test(ejCualquierCaracterNotOk)}`)

// PERTENENCIA AL GRUPO []
const valorGrupo = /[148]/;
console.log(`Cualquiera de estos num "123" está incluído en ${valorGrupo}`, valorGrupo.test("123"));
console.log(`Cualquiera de estos num "555" está incluído en ${valorGrupo}`, valorGrupo.test("555"));



