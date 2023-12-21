const container = document.getElementById('Container');

suma = (a, b) => {
    const firstParam = a;
    const secondParam = b;
    const resultado = a + b;
    return {
        param1: firstParam,
        param2: secondParam,
        result: resultado 
    }
}

let ejemploSuma = suma(2,2);

container.innerHTML = `
    <p>Primer parámetro de la función: ${ejemploSuma.param1}</p>
    <p>Segundo parámetro de la función: ${ejemploSuma.param2}</p>
    <p>Resultado de la función: ${ejemploSuma.result}</p>
    <p>Proceso matemático de la función: <span id="Result">${ejemploSuma.param1} +
    ${ejemploSuma.param2} = ${ejemploSuma.result}</span></p>
`;
console.log(ejemploSuma);