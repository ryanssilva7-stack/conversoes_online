
function converter_min_pra_seg() {
    const inputMinutos = document.getElementById('minutosInput');
    const resultadoSegundos = document.getElementById('segundosResult');
    
    const minutos = parseFloat(inputMinutos.value);
    
    if (isNaN(minutos)) {
        resultadoSegundos.textContent = "0 s";
        return;
    }

    const segundos = minutos * 60;
    
    resultadoSegundos.textContent = `${segundos} s`;
}

function irParaPagina1() {
    window.location.href = "pagina_1.html";
}

function irParaPagina2() {
    window.location.href = "pagina_2.html";
}

function irParaPagina4() {
    window.location.href = "pagina_4.html";
}