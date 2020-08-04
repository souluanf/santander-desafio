const pets = [
    {
        type: 'dog',
        name: 'rex',
        age: 10,
        weight: 0.2
    },
    {
        type: 'cat',
        name: 'phoebe',
        age: 3,
        weight: 0.2
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 0.6,
        weight: 0.2
    },
    {
        type: 'bird',
        name: 'piu piu',
        age: 3,
        weight: 0.1
    },
    {
        type: 'rabit',
        name: 'perna longa',
        age: 5,
        weight: 0.2
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 30
    }

]

/**
 * Map
 * Retornar um novo array com a mesma quantidade de elementos
 * que o array inicial
 */

const mapPetNames = pets.map((pet) =>{
    return pet.name
})
console.log(mapPetNames)

/**
 * forEach
 * Não retorna um novo array com a mesma quantidade de elementos
 */

const forEachPetNames = []

pets.forEach((pet) => {
    forEachPetNames.push(pet.name)
})

console.log(forEachPetNames)