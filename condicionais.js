function hojeSeJoga(diaSemana) {
    if (diaSemana === "domingo") {
        console.log("Hoje é dia de futebol ! ! !")
    } else {
        console.log("Hoje não é dia de futebol :(")
    }
}

function eMaior(num1, num2) {
    return Math.max(num1, num2)
}

function sinal(num) {
    if (num > 0) {
        return 1
    }
    if (num === 0) {
        return 0
    } else {
        return -1
    }
}

function eMaiorDeIdade(idade) {
    return idade >= 18;
}

function eNumeroDaSorte(num){
    return num >= 0 && (num % 2 ===0 || num % 3 === 0) && num !== 15;
}

function eDiaDeTrabalho(diaDaSemana) {
    return diaDaSemana!== 'Sábado' && diaDaSemana!== 'Domingo';
}

function possoIrAoBanco(diaDaSemana,horaAtual){
    return diaDaSemana !== 'Sábado' && diaDaSemana !== 'Domingo' && horaAtual >= 10 && horaAtual < 15
}

console.log(possoIrAoBanco('Segunda',17))

function filosofoHipster(profissao,nacionalidade,km){
    return profissao === 'Músico' && nacionalidade === 'Brasil' && km > 2
}

function podeSeAposentar(idade,sexo,contribuicao){
    var idadeMinima = sexo === 'F' ? 60 : 65;
    return idade >= idadeMinima && contribuicao >= 30
}


function podeSubir(alturaPessoa,vemComCompania,temProblemaCardiaco){
    if (!temProblemaCardiaco){
        let altMinima = vemComCompania ? 1.2 : 1.5
        return alturaPessoa >= altMinima
    }
    return false
}

function medalhaSegundoOPosto(posicao){
    if (posicao === 1){
        return "ouro"
    }
    if (posicao === 2){
        return "prata"
    }
    if (posicao === 3){
        return "bronze"
    }
    return "Continue participando"

}