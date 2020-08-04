function lucroTotal(umPeriodo) {
    var soma = 0;
    var mes = 0;
    for (var i = 0; i < umPeriodo.length; i++) {
        mes = umPeriodo[i];
        soma = soma + mes;
    }
    return soma;
}

function quantidadeDeMesesComLucro(umPeriodo) {
    let quantidade = 0;
    for (let mes = 0; mes < umPeriodo.length; mes++) {
        if (umPeriodo[mes] > 0) {
            quantidade += 1
        }
    }
    return quantidade;
}

function saldoDeMesesComLucro(umPeriodo) {
    var saldo = [];
    for (let mes = 0; mes < umPeriodo.length; mes++) {
        if (umPeriodo[mes] > 0) {
            saldo.push(umPeriodo[mes])
        }
    }
    return saldo;
}

function naipeDeTruco(naipe) {
    var array = [];
    for (let index = 0; index <= 12; index++) {
        if (index !== 8 && index !== 9) {
            array.push(index.toString() + " de " + naipe)
        }
    }
    return array;
}