/*
document.addEventListener("DOMContentLoaded", () => {

    $('.btnDescargarPase').on('click', function (e) {
        const elementoPaseEntrada = document.querySelector('.pase-entrada'); //Elemento a convertir
        html2pdf()
            .set({
                margin: 0.5,
                filename: 'pase.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, //A mayor escala, mejores graficos, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    orientation: 'portrait', //landscape-horizontal o portrait-vertical
                    unit: 'in',
                    format: [13,6],

                }
            })
            .from(elementoPaseEntrada)
            .save()
            .catch(err => console.log(err))
            .finally()
    })
});*/

let navegador = navigator.userAgent;

$('.btn-pase-entrada').on('click', function (e) {

    if (navegador.match(/iPhone/i) || navegador.match(/iPad/i) || navegador.match(/iPod/i)) {
        descargarPaseSinBoton('indicacionParaDescargarModal', 'ContenidoPaseEntrada');
    } else{
        descargarPaseConBoton('btnDescargarModal', 'ContenidoPaseEntrada');
    }
});

$('.btn-invitacion').on('click', function (e) {

    if (navegador.match(/iPhone/i) || navegador.match(/iPad/i) || navegador.match(/iPod/i)) {
        descargarPaseSinBoton('indicacionParaDescargarConfirmador', 'paseEntradaConfirmador');
    } else{
        descargarPaseConBoton('btnDescargarConfirmador', 'paseEntradaConfirmador');
    }

    $('#paseEntradaContenedor').hide();
});

const descargarPaseConBoton = (btnParaDescargar, contenedorParaImagenPase) => {
    const elementoADescargar = document.querySelector('#paseEntradaContenedor');
    const linkDescargar = document.querySelector(`#${btnParaDescargar}`);

    html2canvas(elementoADescargar).then((canvas) => {
        const base64image = canvas.toDataURL('image/png');
        $(`#${contenedorParaImagenPase}`).append('<img src="'+ base64image + '" class="img-fluid foto-pase-entrada child">')
        linkDescargar.setAttribute('href', base64image)
        linkDescargar.setAttribute('download', 'pase-entrada.png')
    });
};

const descargarPaseSinBoton = (indicacionesParaDescargar, contenedorParaImagenPase) => {
    const elementoADescargar = document.querySelector('#paseEntradaContenedor');
    html2canvas(elementoADescargar).then((canvas) => {
        const base64image = canvas.toDataURL('image/png');
        $(`#${indicacionesParaDescargar}`).append('<p class="text-center font-conf child c-principal">Para descargar su pase de entrada deje presionado la imagen y guárdela en su galería.</p>')
        $(`#${contenedorParaImagenPase}`).append('<img src="'+ base64image + '" class="img-fluid foto-pase-entrada child">')
        $('.descargar-pase').hide();
    });
};

$('.cerrar-pase-entrada').on('click', function (e) {
    let child = document.querySelectorAll('.child')
    $('#indicacionParaDescargarModal').find(child).remove();
    $('#ContenidoPaseEntrada').find(child).remove();
})

$('.btn-pase-entrada').on('click', function (e) {
  let child = document.querySelectorAll('.child')
  $('#indicacionParaDescargarModal').find(child).remove();
  $('#ContenidoPaseEntrada').find(child).remove();
})