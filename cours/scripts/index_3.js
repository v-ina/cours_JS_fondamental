/*
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
*/


// ----------------------------------------------------------------


/*
const person_1 = {
    name : 'Pierre',
    hasCar : true,
    hasBike : true,
    isSick : true
}
const person_2 = {
    name : 'Melanie',
    hasCar : true,
    hasBike : false,
    isSick : false
}
const person_3 = {
    name : 'Paul',
    hasCar : false,
    hasBike : true,
    isSick : true
}
const person_4 = {
    name : 'Sophie',
    hasCar : false,
    hasBike : false,
    isSick : false
}

canGoToUniversity(person_1)
canGoToUniversity(person_2)
canGoToUniversity(person_3)
canGoToUniversity(person_4)

canGoToTopOfMountain(person_1)
canGoToTopOfMountain(person_2)
canGoToTopOfMountain(person_3)
canGoToTopOfMountain(person_4)
*/

/*
// Operateur de comparaison complexe : OR
function canGoToUniversity(persoHasCarOrBike) {
    if(persoHasCarOrBike.hasCar || persoHasCarOrBike.hasBike && !persoHasCarOrBike.isSick) {
        console.log(`"${persoHasCarOrBike.name} peut aller a l'universite"`)
    } else {
        console.log(`"${persoHasCarOrBike.name} ne peut pas aller a l'universite"`)
    }
}

// Operateur de comparaison complexe : AND
function canGoToTopOfMountain(persoHasCarAndBike) {
    if(persoHasCarAndBike.hasCar && persoHasCarAndBike.hasBike && !persoHasCarAndBike.isSick) {
        console.log(`"${persoHasCarAndBike.name} peut aller au sommet de la montagne"`)
    } else{
        console.log(`"${persoHasCarAndBike.name} ne peut pas aller au sommet de la montagne"`)
    }
}
*/


// 이렇게 서로 다른 함수에 같은이름의 parametre 써도 괜찮음
/*
function canGoToUniversity(perso) {
    if(perso.hasCar || perso.hasBike && !perso.isSick) {
        console.log(`"${perso.name} peut aller a l'universite"`)
    } else {
        console.log(`"${perso.name} ne peut pas aller a l'universite"`)
    }
}

function canGoToTopOfMountain(perso) {
    if(perso.hasCar && perso.hasBike && !perso.isSick) {
        console.log(`"${perso.name} peut aller a la montagne"`)
    } else{
        console.log(`"${perso.name} ne peut pas aller a la montagne"`)
    }
}
*/


// ----------------------------------------------------------------


/*
// LES BOUCLES

console.log(1)
console.log(2)
console.log(3)
console.log(4)

for(let i = 0; i < 10; i += 3){      
    console.log('salut ' + i)
}
 // ;으로 나누어져 있다. , i라는 variable을 선언했다 , i +=1 는 i++와 같음


 // 이렇게 두개는 같습니다. 이렇게 표현할 수도 있어요.
 for(let i = 0; i < 10; i ++){ 
    if(i % 2 == 1){
        console.log('salut ' + i)
    }     
}

for(let i = 1; i < 10; i += 2){ 
    console.log('salut ' + i)
    // if(i % 2 == 1){
    // }     
}
*/


// ----------------------------------------------------------------


// boucle est tres fort pour parcourir les tableaux
/*
let arr = [3, 5, 12, 8, 1]
for(let i =0; i<arr.length; i++){
    console.log('Element courant : ' + arr[i])
}
*/

// Exo_ Q1. Ajouter un if dans la boucle pour n'afficheer que les elements dont la valuer est >= 5
// 내가 만든 답 & A.
/*
let arr = [3, 5, 12, 8, 1]
for(let i =0; i<arr.length; i++){
    if(arr[i] >= 5){
        console.log('Element courant : ' + arr[i])
    }
}
*/

// Exo_ Q2. Ajouter un if dans la boucle pour n'afficheer que les elements dont la valuer est multiple de 3
// 내가 만든 답 & A.
/*
let arr = [3, 5, 12, 8, 1]
for(let i =0; i<arr.length; i++){
    if(arr[i] % 3 ==0){
        console.log('Element courant : ' + arr[i])
    }
}
*/


// ----------------------------------------------------------------


/*
let numbers = [3, 5, 12, 8, 1]

// Exo_ Q3. ecrire une boucole for pour additioner tout les elements d'un tableau
// 내가 만든 답 & A. 
let sum = 0             // boucle 안에서 매번 0으로 바뀌는 것을 피하기 위해 밖에 씀

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}        
console.log('somme est : ' + sum)


// Exo_ Q4. a l'aide d'une boucle for, trouver la valeur la plus grande dans le tableau
// 내가 만든 답 & A. 

let max = numbers[0]

for(let i = 0; i < numbers.length; i++){
    if(max < numbers[i]){
        max = numbers[i]
    } 
}        
console.log('max number est : ' + max)


// Exo_ Q5. afficher uniquement les nombres strictement superieurs a 4
// 내가 만든 답 & A. 
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 4){
        console.log(numbers[i])
    }
}


// Exo_ Q6. Q5의 결과를 새로운 tableau에 정리할 수 있는 boucle을 만들어라
// 내가 만든 답 & A. 
let numbers = [3, 5, 12, 8, 1]
let filterdNumbers = []

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 4){
        filterdNumbers.push(numbers[i])
    }
}
console.log(filterdNumbers)


// Exo_ Q7. Encapsuler le script precedent dans une fonction et y ajouter le parametre limit
// 내가 만든 답
function myfunction(x) {
    let filterdNumbers = []
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] > x){
            filterdNumbers.push(numbers[i])
        }
    }    
    console.log(filterdNumbers)
}
myfunction (4)


// A. return을 이용한 답
let numbers = [3, 5, 12, 8, 1]
const arrayResult = filterArray(7)

console.log(arrayResult);

function filterArray(limit) {
    let filteredNumbers = []

    for (let n = 0; n < numbers.length; n++) {
        if (numbers[n] > limit) {
            filteredNumbers.push(numbers[n])
        }
    }
    console.log(filteredNumbers)
    return filteredNumbers;
}
*/


// ----------------------------------------------------------------



const persons1 = [
    {
        name : 'Pierre',
        hasCar : true,
        hasBike : true,
        isSick : true
    }
    ,
    {
        name : 'Melanie',
        hasCar : true,
        hasBike : false,
        isSick : false
    }
    ,
    {
        name : 'Paul',
        hasCar : false,
        hasBike : true,
        isSick : true
    }
    ,
    {
        name : 'Sophie',
        hasCar : false,
        hasBike : false,
        isSick : false
    }
]

/*
// Exo_ Q8. ecrire une boucle for pour afficheer dans un nouveau tableau toutes les personnes malades 

// A.
let sickPersons = []
for (let i = 0; i < persons1.length; i++){
    if(persons1[i].isSick){
        sickPersons.push(persons1[i].name)
    }
}
console.log(sickPersons)
*/

// Exo_ Q9. encapsulter la boucle dans une fonction et passer le tableau en parametre
/*
const persons2 = [
    {
        name : 'Julien',
        hasCar : true,
        hasBike : true,
        isSick : true
    }
    ,
    {
        name : 'Alex',
        hasCar : true,
        hasBike : false,
        isSick : false
    }
    ,
    {
        name : 'frank',
        hasCar : false,
        hasBike : true,
        isSick : true
    }
    ,
    {
        name : 'Marina',
        hasCar : false,
        hasBike : false,
        isSick : false
    }
    ,
    {
        name : 'Anna',
        hasCar : false,
        hasBike : true,
        isSick : true
    }
]

// 내가 쓴 답 A.  처음에 let sickPerosns=[]를 밖에다 둬서 두번째 결과가 첫번째 결과를 갖고 있었음. 초기화 하려고 아예 function 안에 집어넣음. 굳
function findSickPerson (arrayOfPerson) {
    let sickPersons = []

    for (let i = 0; i < arrayOfPerson.length; i++){
        if(arrayOfPerson[i].isSick){
            sickPersons.push(arrayOfPerson[i].name)
        }
    }
    return sickPersons
}

console.log(findSickPerson(persons1))
console.log(findSickPerson(persons2))


// A. 내가 쓴 답도 맞음. 이거는 array 자체를 가지고 온 경우 한번 더 쓴거임
const result = findSickPeople(persons1)
console.log(result);

function findSickPeople(arr){
    let sickPersons =[]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isSick) {
            sickPersons.push(arr[i])
        }
    }
    return sickPersons
}
*/


// ----------------------------------------------------------------


