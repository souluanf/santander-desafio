/**
 * Filtrar alguns elementos
 * */

const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
]

// Modo Simplificado
const newPets1 = pets.filter((pet) => {
    return pet.age < 5
})


// Modo externalizado
const eMenorQueCinco = (numero) => {
    return numero < 5
}
const newPets2 = pets.filter(({age}) => eMenorQueCinco(age))

console.log(pets)
console.log(newPets1)
console.log(newPets2)
