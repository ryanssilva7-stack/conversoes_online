// Função de conversão: Celsius = Kelvin - 273.15
function converterKelvinParaCelsius() {
    const kelvinValue = document.getElementById('kelvinInput').value;
    const resultDisplay = document.getElementById('celsiusResult');

    if (kelvinValue === '' || isNaN(kelvinValue)) {
        resultDisplay.innerText = '0 °C';
        return;
    }

    const celsius = parseFloat(kelvinValue) - 273.15;
    
    // Fixa o resultado em duas casas decimais para ficar organizado
    resultDisplay.innerText = `${celsius.toFixed(2)} °C`;
}

function irParaPagina1() {
    window.location.href = "index.html";
}

function irParaPagina3() {
    window.location.href = "pagina_3.html";
}
