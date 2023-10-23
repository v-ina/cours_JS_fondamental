const monday = 'lundi'
const tuesday = 'mardi'

displayMessage(monday)
displayMessage(tuesday)
displayMessage('samedi')
displayMessage('30')

function displayMessage(day){
    let hello = "salut"
    console.log(`${hello} c'est ${day}`)
}


const person_1 = {
    name : 'Pierre',
    hasCar : true,
    hasBike : true
}
const person_2 = {
    name : 'Melanie',
    hasCar : true,
    hasBike : false
}
const person_3 = {
    name : 'Paul',
    hasCar : false,
    hasBike : true
}
const person_4 = {
    name : 'Sophie',
    hasCar : false,
    hasBike : false
}


canGoToUniversity(person_1)
canGoToUniversity(person_2)
canGoToUniversity(person_3)
canGoToUniversity(person_4)

function canGoToUniversity(persoHasCarOrBike) {
    if(persoHasCarOrBike.hasCar) {
        console.log(`"${persoHasCarOrBike.name} peut aller a l'universite"`)
    } else {
        console.log(`"${persoHasCarOrBike.name} ne peut pas aller a l'universite"`)
    }
}

canGoToTopOfMountain(person_1)
canGoToTopOfMountain(person_2)
canGoToTopOfMountain(person_3)
canGoToTopOfMountain(person_4)

function canGoToTopOfMountain(persoHasCarAndBike) {
    if(persoHasCarAndBike.hasCar && persoHasCarAndBike.hasBike) {
        console.log(`"${persoHasCarAndBike.name} peut aller a la montagne"`)
    } else{
        console.log(`"${persoHasCarAndBike.name} ne peut pas aller a la montagne"`)
    }
}