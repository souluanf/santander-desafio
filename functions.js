function dobro(numero) {
    return numero * 2;
}

function metade(numero) {
    return numero / 2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function somar(num1, num2) {
    return num1 + num2;
}

function triplo(resultadoDaSoma) {
    return resultadoDaSoma * 3
}

function triploDaSoma(num3, num4) {
    var resultadoDaSoma = somar(num3, num4);
    return triplo(resultadoDaSoma);
}


function perimetro(raio) {
    return 3.14 * raio * 2
}

function area(raio) {
    return 3.14 * raio * raio
}

function tamanhoNomeCompleto(nome, sobrenome) {
    let nomeCompleto = nome + " " + sobrenome
    return nomeCompleto.length
}

function escreverCartao(titulo, nome, sobrenome) {
    return titulo + " " + nome + " " + sobrenome
}

Math.abs (4) //retorna 4
Math.abs (0) //retorna 0
Math.abs (-123) //retorna 123

Math.round (4.6) //retorna 5
Math.round (4.3) //retorna 4
Math.floor (4.6) //retorna 4
Math.floor (4.3) //retorna 4

Math.max (4, 7) //retorna 7
Math.min (4, 7) //retorna 4

function gerarProbabilidade(){
    return Math.random()*100
}

console.log(gerarProbabilidade())