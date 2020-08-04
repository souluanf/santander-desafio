/**
* Transformar tudo num valor unico
* */

const pets = [
    {
        type: 'dog',
        name: 'rex',
        age: 10,
        weight: 10
    },
    {
        type: 'cat',
        name: 'phoebe',
        age: 3,
        weight: 5
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 7,
        weight: 5
    },
    {
        type: 'bird',
        name: 'piu piu',
        age: 3,
        weight: 5
    },
    {
        type: 'rabit',
        name: 'perna longa',
        age: 7,
        weight: 2
    }

]

// Soma de todas alturas
const totalWeight = pets.reduce((total,pet) => {
    return total + pet.weight
},0)

//Soma de todas alturas e pesos
const totalWeightAndAge = pets.reduce((total,pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
},{totalAge: 0, totalWeight: 0})


// SOma idades cachorros
const totalWeight = pets.reduce((total,pet) => {
    if (pet.type !== 'dog') return total
    return total + pet.weight
},0)
