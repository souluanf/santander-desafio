function imprimirAzul4() {
    for (let i = 0; i < 4; i++) {
        console.log("Azul!")
    }
}

function imprimir5vezes5() {
    for (let i = 0; i < 5; i++) {
        console.log(5)
    }
}

function passoAPasso() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}

function passandoPor() {
    for (let i = 0; i < 4; i++) {
        console.log("aqui eu tenho o valor de " + i)
    }
}

function passandoPelosPares() {
    for (let i = 0; i <= 6; i++) {
        if (i % 2 === 0) {
            console.log("aqui eu tenho o valor de " + i)
        }
    }
}

function imprimirAzul(vezes) {
    for (let i = 0; i < vezes; i++) {
        console.log("Azul")
    }
}

function somar5MoedasDe25Centavos() {
    let totMoedas = 0;
    for (let i = 0; i < 5; i++) {
        totMoedas = totMoedas + 0.25;
    }
    return totMoedas
}

function somarMoedasDe25(quantidadeDeMoedas){
    let totMoedas = 0;
    for (let i = 0; i < quantidadeDeMoedas; i++) {
        totMoedas = totMoedas + 0.25;
    }
    return totMoedas
}

function somaDosPares(x){
    let soma = 0
    for (let i = 0; i <= x; i += 2) {
        soma = soma + i;

    }
    return soma
}

function somatoria(x){
    let soma = 0
    for (let i = 0; i < x; i ++) {
        soma = soma + i;
    }
    return soma
}

function caloriasDeTrote(numeroVoltas){
    let total = 0
    for (let i = 1; i <= numeroVoltas; i ++) {
        total = total + 5*i;
    }
    return total
}

console.log(caloriasDeTrote(2))