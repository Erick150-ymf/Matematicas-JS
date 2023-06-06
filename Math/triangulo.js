const hipo = document.querySelector('.hipotenusa');
const cateA = document.querySelector('.lado1');
const cateO = document.querySelector('.lado2');
const btnCal = document.querySelector('.btn-cal');
const resul = document.querySelector('#resultado');

btnCal.addEventListener('click', calcularPerTriangulo);

function calcularPerTriangulo() {
    const perimetro = Number(cateA.value + cateO.value + hipo.value);
    const altu = Number(hipo.value / 2);
    const area = Number((hipo.value * altu) / 2);
    resul.innerText = `Su perimetro es: ${perimetro} y su area es: ${area}`;
}