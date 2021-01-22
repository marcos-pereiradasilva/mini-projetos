let select = document.querySelector('#temp')
let temperatura = document.querySelector('#temperatura')
let resultado = document.querySelector('#res')

function converter() {
    let opcao = select.value;
    let valor1 = temperatura.value;
    valor = parseInt(valor1)


    if (opcao == 'celTofahr' && valor != 0) {
        resultado.innerHTML = `Resultado: ${valor * 9 / 5 + 32} Graus Fahrenheit`
    }
    if (opcao == 'celTokel' && valor != 0) {
        resultado.innerHTML = `Resultado: ${valor + 273.15} Graus Kelvin`
    }
    if (opcao == 'fahrTocel' && valor != 0) {
        resultado.innerHTML = `Resultado: ${(valor - 32) * 5 / 9} Graus Celsius`
    }
    if (opcao == 'fahrTokel' && valor != 0) {
        resultado.innerHTML = `Resultado: ${(valor - 32) * 5 / 9 + 273.15} Graus Kelvin`
    }
    if (opcao == 'kelTocel' && valor != 0) {
        resultado.innerHTML = `Resultado: ${valor - 273.15} Graus Celsius`
    }
    if (opcao == 'kelTofahr' && valor != 0) {
        resultado.innerHTML = `Resultado: ${(valor - 273.15) * 9 / 5 + 32} Graus Fahrenheit`
    }
}