import "./style.css";

export const ejemplos = () => {
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
        console.log(`${espacios} hay espacios en esa posición? "${valor}" →`, espacios.test(valor));
    });

    // SIN ESPACIOS, TAB O NUEVA LÍNEA → S
    const ejSinEspacios2 = ["12 3", "123 ", "1234"];
    const sinEspacios = /^\S+$/;
    ejSinEspacios2.forEach((valor) => {
        console.log(`${sinEspacios} NO hay espacios en cualquier posición "${valor}" →`, sinEspacios.test(valor));
    });

    // VALIDAR X OCURRENCIAS → {}
    const ejNIF = ["12345678 A", "12345678-A", "12345678A", "ASD12345A"];
    const nif = /^\d{8}\S[A-Z]$/;
    ejNIF.forEach((valor) => {
        console.log(`${nif} 8 nums + caract no espacio + letra"${valor}" →`, nif.test(valor));
    });

    // VALIDAR X ó MÁS OCURRENCIAS → {x,}
    const ejXOMas = ["33", "1", "as", "12345"];
    const xOMas = /^\d{2,}$/;
    ejXOMas.forEach((valor) => {
        console.log(`${xOMas} 2 nums o más "${valor}" →`, xOMas.test(valor));
    });

    // VALIDAR X a Y OCURRENCIAS → {x,y}
    const ejXaY = ["M 09345", "M 1234 Y", "MA 3456 CY", "MA 123 C", "0894 BAC"];
    const xAY = /^[A-Z]{1,2}\s\d{4,5}\s{0,1}[A-Z]{0,2}$/;
    ejXaY.forEach((valor) => {
        console.log(`${xAY} 1-2 let + esp + 4-5 num + 0-1 esp + 0-2 let "${valor}" →`, xAY.test(valor));
    });

    // OPCIONALES, CERO ó UNA → ?
    const ejNifEspacioOpcional = ["12345678Q", "12345678-Q", "12345678 Q"];
    const nifEspacioOpcional = /^\d{8}\s?[A-Z]$/;
    ejNifEspacioOpcional.forEach((valor) => {
        console.log(`${nifEspacioOpcional} 8 nums + esp opcional + letra "${valor}" →`, nifEspacioOpcional.test(valor));
    });

    // CUALQUIER, CERO ó MAS OCURRENCIAS → *
    const ejTodos = ["Imagen.jpg","Imagen1.jpg","Imagen01.jpg","Imagen_2.jpg","ImagenLuz.jpg"];
    const todos = /^Imagen\d*\.jpg$/;
    ejTodos.forEach((valor) => {
        console.log(`${todos} "Imagen + num o nada + .jpg" "${valor}" →`, todos.test(valor));
    });

    // UNA ó MAS OCURRENCIAS → +
    const unaOMas = /^Imagen\d+\.jpg$/;
    ejTodos.forEach((valor) => {
        console.log(`${unaOMas} "Imagen + un num o más + .jpg" "${valor}" →`, unaOMas.test(valor));
    });

    // PATRÓN DE AGRUPACIÓN → ()
    const ejAgrupacion = ["pre", "prehistoria", "historia"];
    const agrupacion = /^(pre)?(historia)$/;
    ejAgrupacion.forEach((valor) => {
        console.log(`${agrupacion} Valida "historia" y puede o no, tener "pre" "${valor}" →`, agrupacion.test(valor));
    });

    // AGRUPACIÓN 2
    const ejAgrupacion2 = ["MA4050AZ", "0896BAX", "M4000", "0896 BAX"];
    const agrupacion2 = /^([A-Z]{1,2}\d{4}[A-Z]{1,2})|(\d{4}[A-Z]{3})$/;
    ejAgrupacion2.forEach((valor) => {
        console.log(`${agrupacion2} (1-2 let + 4 num + 2 let) ó (4 num + 3 let) "${valor}" →`, agrupacion2.test(valor));
    });

    // BUSCAR EN MÚLTIPLES LÍNEAS → g (para la primera coincidencia) → gm (para todas)
    const ejLineas = `
    Línea 1: Hola, soy una línea de texto.
    Línea 2: ¡Aquí hay otra línea!
    Línea 3: Esta es la última línea.
    Línea 4: Esta no sale.
    `;
    const lineas = /.*línea.*/gm;
    const coincidencias = ejLineas.match(lineas);
    console.log(coincidencias);

    // EXTRAER INFORMMACIÓN DE UNA CADENA → (?<nombreParam>cadena)
    const validarNIF = (valor: string): boolean => {
        const patronNif = /^(?<parteNumerica>\d{8})(\s|-|_)?(?<letra>[A-Za-z])$/;
        const coincidencia = patronNif.exec(valor);
        if (coincidencia) {
            const { parteNumerica, letra } = coincidencia.groups as any;
            console.log("La parte numérica es: ", parteNumerica);
            console.log("La letra es: ", letra);
            return true;
        } else {
            console.log("FALLO");
            return false;
        }
    };
    validarNIF("12345678 Q");
    validarNIF("12345678%3");
    validarNIF("1234S")
    validarNIF("12435678-A")

    // SUSTITUIR ELEMENTOS O CARACTERES → .replace
    const validarNIF2 = (valor: string): boolean => {
        const patron = /^(?<parteNumerica>\d{2}\.?\d{3}\.?\d{3})(\s|-|_)?(?<letra>[A-Za-z])$/
        const coincidencia = patron.exec(valor);
        if (coincidencia) {
            const { parteNumerica, letra } = coincidencia.groups as any;
            const numeroLimpio = parteNumerica.replace(/\./g, "");
            console.log("La parte numérica es: ", numeroLimpio);
            console.log("La letra es: ", letra);
            return true;
        } else {
            console.log("FALLO");
            return false;
        }
    };
    validarNIF2("12.345.678 Q");
    validarNIF2("12.345.678%3");
    validarNIF2("1234S");
    validarNIF2("12.345.678-A");

    // FLAG MAYUS Y MINUS INSENSITIVE → (al final) i
    const patronInsensitive = /^\d{8}[A-Z]$/i;
    console.log(patronInsensitive.test("12345678Q"));
    console.log(patronInsensitive.test("12345678q"));

    // FLAG TODAS LAS COINCIDENCIAS → (al final) g
    const ejPatronTodas = `
    912345678
    911234567
    923456711
    `
    const patronTodas = /11/g
    console.log(ejPatronTodas.match(patronTodas));

    // FLAG TODAS LAS COINCIDENCIAS CON MULTILÍNEA → (al final) gm
    const patronTodasMultilinea = /11/gm
    console.log(ejPatronTodas.match(patronTodasMultilinea));

    // PATRÓN COMPLETO
    const patronCompleto = /^91\d{7}$/gm;
console.log(ejPatronTodas.match(patronCompleto)); 
}