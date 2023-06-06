// Cuadrado

console.group('cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}

calcularCuadrado(445);

console.groupEnd('cuadrado');

// Triangulo

console.group('triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
}); 

function calcularPerimetroTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

calcularPerimetroTriangulo(3, 34, 55, 65);

// Ejercicio

function calcularAlturaTriangulo(lado1, base) {
    if(lado1 == base) {
        console.warn('Este no es un triángulo isoceles');
    } else {
        // h = r**2 (lado1**2 - (b**2)/4)
        return Math.sqrt( (lado1 ** 2) - ( (base ** 2)) / 4);
    }
}

function calcularAlturaEscaleno(lado1, lado2, base) {
    const resultadoDeCuadrados = ((lado1 ** 2) - (lado2 ** 2) + (base ** 2));
    
    return Math.sqrt( (lado1 ** 2) - (((resultadoDeCuadrados) / (2 * base)) ** 2) );
}

console.groupEnd('triangulo')

// Circunferencia

console.group('circle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;

const circunferencia = diametroCirculo * Math.PI;
const areaCirculo = (radioCirculo ** 2) * Math.PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,

});

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado  * Math.PI.toFixed(5),
    }
}

calcularCirculo(3445);

console.groupEnd('circle')