const inputPrice = document.getElementById('price');
const inputDiscount = document.getElementById('discount');
const btn = document.getElementById('calcular');
const result = document.getElementById('result');
const newPrices = document.getElementById('newPrice');
const oldPrice = document.getElementById('oldPrice');

let price = inputPrice.value;
let discount = inputDiscount.value;

btn.addEventListener('click', calcularPrecioConDescuento);

inputPrice.addEventListener('input', validarNumero);
inputDiscount.addEventListener('input', validarNumero);

function calcularPrecioConDescuento() {
    // (P * (100 / D)) / 100;

    const price = inputPrice.value;
    const discount = inputDiscount.value;

    oldPrice.innerText = `$ ${price}`;

    // Verificar si el valor del descuento es valido
    if (discount < 0 || discount >= 100) {
        result.innerText = "ERROR!, el descuento no puede ser mayor o igual al 100%";
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;
    newPrices.innerText = `$ ${newPrice.toFixed(2)}`;
}

function validarNumero() {

    let price = inputPrice.value;
    let discount = inputDiscount.value;

    //Eliminando cualquier carácter que no sea número.
    price = price.replace(/\D/g, ".");
    discount = discount.replace(/\D/g, ".");

    // Actualizar el valor del input con solo números.
    inputPrice.value = price;
    inputDiscount.value = discount;
}