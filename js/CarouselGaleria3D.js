const mediaQuery = window.matchMedia('(max-width:840px');

const slideRotatorioImg = document.querySelectorAll('.slide-rotatorio');

const calcularGradosRotacion = (cantidadFotos) => {
    const gradosARotar = 360 / cantidadFotos;
    let flag = 0;
    const grados = [0];

    for (let i = 0; i < cantidadFotos; i ++) {
        grados.push(flag += gradosARotar);
    }
    return grados;
}

// Cambiar el número de fotografías añadidas
const gradosArr = calcularGradosRotacion(10);


const second2 = document.querySelectorAll(`.slide-rotatorio:nth-child(n)`);

let numeros = (mediaQuery.matches) ?  400 :  500;

second2.forEach((element, index) => {
    element.style.cssText = `transform: rotateY(${gradosArr[index]}deg) translateZ(${numeros}px);`
})