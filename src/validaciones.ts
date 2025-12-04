export const ipCorrecta = (value: string) : boolean => {
    // const patron = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    const patron = /^(\d{1,3}\.){3}\d{1,3}$/;

    return patron.test(value);
};

export const nifCorrecto = (value: string) : boolean => {
    const patron = /^\d{2}\.?\d{3}\.?\d{3}(\s|-|_)?[A-Za-z]$/;

    return patron.test(value);
};