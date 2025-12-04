import { ipCorrecta, nifCorrecto } from "./validaciones";

describe("ipCorrecta", () => {
    test.each([
        ["127.0.0.1", true],
        ["B.0.0.1", false],
        ["0.0.0.0", true],
        ["10.11.23.4", true],
        ["12.23.3", false],
        ["12.2.33.44.3", false],
        ["-1.-1.0.0", false],
    ])(
        "Debería devolver para la IP el valor %s",
        (value: string, expected: boolean) => {
            expect(ipCorrecta(value)).toBe(expected);
        }
    );
});

describe("nifCorrecto", () => {
    test.each([
        ["12345678Q", true],
        ["12345678-Q", true],
        ["12345678 Q", true],
        ["12345678_Q", true],
        ["12.345.678 Q", true],
        ["12345678Q", true],
        ["12345678-Q", true],
        ["12345678 Q", true],
        ["12345678_Q", true],
        ["12345678 q", true],
        ["12.345.678#Q", false],
        ["123454567", false],
    ])(
        "Deberia devolver para el NIF %s el valor %s",
        (valor: string, expected: boolean) => {
        expect(nifCorrecto(valor)).toBe(expected);
        }
    );
});
