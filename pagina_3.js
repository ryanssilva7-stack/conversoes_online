const COTACAO_DOLAR = 5.10;

function converter_dolar_pra_real() {
    const inputDolar = document.getElementById("dolaresInput");
    const resultadoReal = document.getElementById("reaisResult");

    const valorDolar = parseFloat(inputDolar.value);

    if (isNaN(valorDolar) || valorDolar < 0) {
        resultadoReal.innerText = "R$ 0,00";
        return;
    }

    const valorReal = valorDolar * COTACAO_DOLAR;

    const valorFormatado = valorReal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    resultadoReal.innerText = valorFormatado;
}

function irParaPagina1() {
    window.location.href = "index.html";
}

function irParaPagina2() {
    window.location.href = "pagina_2.html";
}

function irParaPagina4() {
    window.location.href = "pagina_4.html";
}
