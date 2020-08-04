function alturaArvoreUtopica(ciclos) {
    let alturaArvore = 1;
    for(let ciclo = 0; ciclo < ciclos; ciclo++)
        if(ciclo & 1)
            alturaArvore++;
        else
            alturaArvore *= 2;
    return alturaArvore;
}