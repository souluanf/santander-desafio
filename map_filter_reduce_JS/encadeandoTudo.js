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
        type: 'dog',
        name: 'rex',
        age: 10,
        weight: 10
    },
    {
        type: 'rabit',
        name: 'perna longa',
        age: 7,
        weight: 2
    }

]

const totalWeightDogs = pets.filter((pet) => {
    return pet.type === 'dog'
}).reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log(totalWeightDogs)