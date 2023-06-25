const ErickMath = {};

        // MODA

ErickMath.calcularModa = function calcularModa(lista){
    // Declaramos un objeto vacio;
    const listaCount = {};

    // Realizamos un ciclo for para ver si los numeros que ingresa el usuario se repite.

    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];

        // if (listaCount[element]){ 
        //     listaCount[element] += 1;
        // } else {
        //     listaCount[element] = 1;
        // }

                /* Metodo if de manera corta */

        // Con el if else hacemos que los numeros que se repiten en el objeto se cuenten y no se impriman constantemente.

        listaCount[element] ? listaCount[element]++ : listaCount[element] = 1;
    }

    // Transformamos un objeto en una lista de arrays.

    const listaArr = Object.entries(listaCount);

    // Dentro de la funcion que esta en el metodo .sort() usada por la constante "listaArr", en ves de dejarle el valor "[0]" por defecto le colocamos en segundo valor "[1]" de esa forma se pueda ordenar por el segundo valor del la lista Bidimensional. 
    
    // !!En resumen, estos cambios nos permiten ordenar listaArr según el segundo valor de cada array.!!
    
    const ordenarListaBidimencional = listaArr.sort((a, b) => a[1] - b[1]);

    // Extraemos el array que mas se repite y lo retornamos en consola solo el primer valor "[0]".
    const listaMaxNumber = ordenarListaBidimencional[listaArr.length - 1];
    const moda = listaMaxNumber[0];

    return moda;
}


        // MEDIANA

ErickMath.esPar = (lista) => !(lista.length % 2);

ErickMath.calcularMedia = function calcularMedia(lista) {
    // Ordenamos la lista
    const ordenarLista = lista.sort((a, b) => a - b);

    const listaPar = ErickMath.esPar(lista);
            // Verificar si la lista es par o es inpar.
    if (listaPar) {
        // Declaramos 2 constantes para hallar los 2 numeros mas cercanos entre una lista par.
        const index1 = lista[(lista.length / 2) - 1];
        const index2 = lista[lista.length / 2];
        // Declaramos un array vacio y colocamos cara constante con el metodo .push().
        const mitad = [];
        mitad.push(index1);
        mitad.push(index2);
        return ErickMath.calcularProm(mitad);
    } else {
        // Si la lista es inpar con 
        const inpar = lista[Math.floor(lista.length / 2)];
        return inpar;
    }
}

        // PROMEDIO

ErickMath.calcularProm = function calcularProm(lista) {
    // sumar todos los elementos de array / cantidades de elementos

    /*                      METODO 1

    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }*/

                // FUCTION TRADICIONAL   //
    // const sumaLista = lista.reduce(function sumarElementos(valorAcumulado, nuevoValor) {
    //     return valorAcumulado + nuevoValor;
    // });

                // FUCTION TIPO FLECHA //
    const sumaLista = lista.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);

    const promedio = sumaLista / lista.length;
    return promedio;
}