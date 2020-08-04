
function maisMenos1(num) {
    const quantidade = num.length;
    let positivos = 0;
    let zeros = 0;
    let negativos = 0;
    for (i = 0; i < quantidade; i++) {
        if (num[i] > 0) {
            positivos = positivos + 1;
        } else if (num[i] < 0) {
            negativos = negativos + 1;
        } else {
            zeros = zeros + 1;
        }
    }
    positivos = positivos / quantidade;
    zeros = zeros / quantidade;
    negativos = negativos / quantidade;
    return [positivos, zeros, negativos];
}

function maisMenos(arrayList) {
    const total = arrayList.length;
    let positivo = 0;
    let negativo = 0;
    let vazio = 0;
    arrayList.forEach(function(num) {
        if (num > 0) {
            positivo++;
        } else if (num < 0) {
            negativo++;
        } else {
            vazio++;
        }
    });
    return [(positivo / total), (vazio / total), (negativo / total)];
}
