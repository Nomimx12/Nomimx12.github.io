const imagenes2 = document.querySelectorAll('.img-galeria-2');
const imagenesLight2 = document.querySelector('.agregar-imagen-2');
const contenedorLight2 = document.querySelector('.imagen-light-2');

const nextBtn2 = document.querySelector('.adelante-2');
const prevBtn2 = document.querySelector('.atras-2');
const closeBtn2 = document.querySelector('.btn-cerrar-2');

const numberOfSlides2 = imagenes2.length;
let slideNumber2 = 0;

imagenes2.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen2(imagen.getAttribute('src'));
    })
})

closeBtn2.addEventListener('click', (e)=>{
    if(e.target != imagenesLight2){
        contenedorLight2.classList.toggle('show-2')
        imagenesLight2.classList.toggle('showImage-2')
    }
})

const aparecerImagen2 = (imagen) =>{
    imagenesLight2.src = imagen;
    contenedorLight2.classList.toggle('show-2');
    imagenesLight2.classList.toggle('showImage-2');
}

// Next buttom
nextBtn2.addEventListener('click', () => {
    slideNumber2++;

    if(slideNumber2 > (numberOfSlides2 - 1)){
        slideNumber2 = 0;
    }

    aparecerImagen2(imagenes2[slideNumber2].getAttribute('src'));
    contenedorLight2.classList.toggle('show-2');
    imagenesLight2.classList.toggle('showImage-2');
})

// Prev buttom
prevBtn2.addEventListener('click', () => {
    slideNumber2--;

    if(slideNumber2 < 0){
        slideNumber2 = numberOfSlides2 - 1;
    }

    aparecerImagen2(imagenes2[slideNumber2].getAttribute('src'));
    contenedorLight2.classList.toggle('show-2');
    imagenesLight2.classList.toggle('showImage-2');
})