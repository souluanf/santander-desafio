function produto(arrayList) {
    return arrayList.reduce((total, item) => {
        return total * item
    }, 1)
}

