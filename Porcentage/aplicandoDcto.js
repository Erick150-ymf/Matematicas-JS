// Extrayendo lo valores del html

const inputPrice = document.getElementById('price');
const inputCoupon = document.getElementById('coupon');
const btnCal = document.getElementById('cal');
const pResul = document.getElementById('result');

// Agregando un evento al boton y que cumpla una tarea
btnCal.addEventListener('click', calcularPrecioDecuento);

// crando un lista de cupones vacio y luego añadirlos poco a poco.
const couponList = [];
couponList.push({
    name: 'ErickDev',
    discount: 45,
    expirationDate: new Date(2023, 5, 31),
});
couponList.push({
    name: 'Vianka',
    discount: 65,
    expirationDate: new Date(),
});
couponList.push({
    name: 'Videojuegos',
    discount: 10,
    expirationDate: new Date(),
});

// inicializando la funcion con la tarea a realizar
function calcularPrecioDecuento() {
    // Extrallendo los valores de los inputs, convirtiendo uno de los input de arr a number.
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    // Validando que el formulario tenga los elementos requeridos
    if (!price || !coupon) {
        pResul.innerText = 'Formulario vacio, debe llenar el formulario.';
        return;
    }
    
    // Tarea para filtrar solo los nombres de todos los datos que tengas los cupones.
    function filtradoCupones(couponElemet) {
        return couponElemet.name == coupon;
    }

    // corroborar que los cupones escritos por los usuarios y los cupones que tenemos registrados sean iguales.
    const couponArr = couponList.find(filtradoCupones);
    
    // Corroborando que el cupon sea el correcto segun los datos almacenados
    if (!couponArr) {
        pResul.innerText = 'Cupón no es válido.'
        return;
    }

    // Fecha limite de los cupones
    const currenceDate = new Date();
    const expirationDate = couponArr.expirationDate;

    // Corroborando si la fecha actual es menor o igual a la fecha de expiracion del cupon escrito por el usuario.
    if (currenceDate <= expirationDate ) {
        pResul.innerText = `El cupón ${coupon} ha expirado.`
        return;
    }
    
    const discount = couponArr.discount;
    const newPrice = (price * (100 - discount)) / 100;

    pResul.innerText = `Nuevo precio aplicando el cupón: $${newPrice}`;
}