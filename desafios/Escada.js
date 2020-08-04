function escada(nunDegraus) {
    const degrausEscada = [];
    for (let index = 1; index <= nunDegraus; index++) {
        const degraus = " ".repeat(nunDegraus - index) + "#".repeat(index);
        degrausEscada.push(degraus);

    }
    return degrausEscada;
}

console.log(escada(5))
