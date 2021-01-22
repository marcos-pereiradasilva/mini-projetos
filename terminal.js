const app = require('./app.js');

let opcao = process.argv[2];
let value = parseFloat(process.argv[3], 10)
let result = undefined

if (opcao == 'celTofahr') {
    result = app.celTofahr(value)
} else if (opcao == 'celTokel') {
    result = app.celTokel(value)
} else if (opcao == 'fahrTocel') {
    result = app.fahrTocel(value)
} else if (opcao == 'fahrTokel') {
    result = app.fahrTokel(value)
} else if (opcao == 'kelTocel') {
    result = app.kelTocel(value)
} else if (opcao == 'kelTofahr') {
    result = app.kelTofahr(value)
}

console.log(result)