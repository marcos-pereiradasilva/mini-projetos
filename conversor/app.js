function celTofahr(celsius) {

    return ((celsius * 9) / 5 + 32)
}

function celTokel(celsius) {
    return (celsius + 273.15)
}

function fahrTocel(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9)
}

function fahrTokel(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9 + 273.15)
}

function kelTocel(kelvin) {
    return (kelvin - 273.15)
}

function kelTofahr(kelvin) {
    return ((kelvin - 273.15) * 9 / 5 + 32)
}


//module.exports.celTofahr = celTofahr
//module.exports.celTokel = celTokel
//module.exports.fahrTocel = fahrTocel
//module.exports.fahrTokel = fahrTokel
//module.exports.kelTocel = kelTocel
//module.exports.kelTofahr = kelTofahr