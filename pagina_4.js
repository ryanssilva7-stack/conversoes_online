function converterMinutosParaSegundos() {
    const minutosValue = document.getElementById('minutosInput').value;
    const resultDisplay = document.getElementById('segundosResult');

    if (minutosValue === '' || isNaN(minutosValue)) {
        resultDisplay.innerText = '0 s';
        return;
    }

    const segundos = parseFloat(minutosValue) * 60;
    
    resultDisplay.innerText = `${segundos} s`;
}

function irParaPagina3() {
    window.location.href = "pagina_3.html";
}

function irParaInicio() {
    window.location.href = "index.html";
}
