// div copy-container

function copiarTexto() {
    const texto = document.getElementById("copyText");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
}
function copiarTexto() {
    const texto = document.getElementById("copyText2");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
}

// div copy-container