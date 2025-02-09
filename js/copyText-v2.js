const copyBtn = (textoACopiar) => {
    let texto = document.querySelector('#' + textoACopiar);
    copyText(texto);
}

const copyText = (texto) => {
    
    texto.type ="text";
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
    texto.type ="hidden";
    alertify.success('Texto copiado');
}
