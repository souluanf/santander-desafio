function acontece(arrayList,minimo){
    let total = 0
    for (let index = 0; index < arrayList.length; index++) {
        if(arrayList[index] <= 0){
            total += 1
        }
    }
    return total >= minimo;
}

function aberturas(arrayDias,minimo){
    var resultado = []
    for (let dia = 0; dia < arrayDias.length; dia++) {
        resultado.push(acontece(arrayDias[dia],minimo))
    }
    return resultado
}
console.log(aberturas([[10, -5, 3, 0],[10, -5, 3, 1],[10, -5, 3, 1]],3))