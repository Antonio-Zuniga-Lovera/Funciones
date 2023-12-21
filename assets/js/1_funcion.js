const container = document.getElementById('Container');

example = function(a, b, c) {
    const firstParam = a;
    const secondParam = b;
    const thirdParam = c;
    const resultado = a + b + c;
    return {
        param1: firstParam,
        param2: secondParam,
        param3: thirdParam,
        result: resultado
    }
}

const ejemplo = example(2,3,5);

console.log(ejemplo);

container.innerHTML = `
    <p>Primer parámetro de la función: ${ejemplo.param1}</p>
    <p>Segundo parámetro de la función: ${ejemplo.param2}</p>
    <p>Tercer parámetro de la función: ${ejemplo.param3}</p>
    <p>Resultado de la función: ${ejemplo.result}</p>
    <p>Proceso matemático de la función: <span id="Result">${ejemplo.param1} + 
    ${ejemplo.param2} + ${ejemplo.param3} = ${ejemplo.result}</span></p>
`;