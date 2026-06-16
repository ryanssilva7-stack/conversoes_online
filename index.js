function converter_centimetros_para_metros() {
    const centimetros = parseFloat(document.getElementById('centimetrosInput').value);
    const resultadoDisplay = document.getElementById('metrosResult');

    if (!isNaN(centimetros)) {
        const metros = centimetros / 100;
        
        resultadoDisplay.textContent = `${metros.toFixed(2).replace('.', ',')} M`;
    } else {
        resultadoDisplay.textContent = "0 M";
    }
}

function irParaPagina2() {
    window.location.href = "pagina_2.html";
}

function irParaPagina3() {
    window.location.href = "pagina_3.html";
}

function irParaPagina4() {
    window.location.href = "pagina_4.html";
}