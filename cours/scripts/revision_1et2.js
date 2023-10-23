// Exo_ Q1. modifie le valeur de variable pour avoir un resultat 'Je m'appelle "paul" Doazan'.
/*
let myName = `Je m'appelle "Paul"`
const myLastname = `Doazan`

console.log(myName)

// A.
myName += myLastname
console.log(myName)
*/


// ----------------------------------------------------------------
// Exo_ Q2. ecrire la condition pour afficher le plus grand nombre
/*
const bigNb1 = 100
const bigNb2 = 400

// A.
if (bigNb1 > bigNb2){
    console.log(bigNb1)
} else {
    console.log(bigNb2)
}
*/


// ----------------------------------------------------------------
// Exo_ Q3. si le 5eme elements de tableaux est true, trouve 209.5 et si c'est false, trouve hello world.
/*
let arr = [3, 5, 12, 204.5, 'hello', false, 'world']

// A.
console.log(arr[5])

if(arr[5]){
    console.log(`${arr[4]} ${arr[6]}`)
} else {
    console.log(arr[3]+arr[1])
}
*/


// ----------------------------------------------------------------
//Exo_ Q4. changer la valeur de 204.5 en 190 par soustraction de 14.5
/*
let arr = [3, 5, 12, 204.5, 'hello', false, 'world']

// A.
arr[3] = 190

console.log(arr[3])
*/


// ----------------------------------------------------------------
// Exo_ Q5. Recuperer l'element du tableau place au milieu du tableau a l'aide de la propriete .length
/*
let arrExample = [3, 5, 8, 11, 6 ,14, 5 ,112, 12]

// A.
if(arrExample.length % 2 == 1){
    console.log(arrExample[arrExample.length/2 - 0.5])
} else {
    console.log(arrExample[(arrExample.length-1)/2 -0.5])
}
*/


// ----------------------------------------------------------------
// Exo_ Q6. avnat chaque ajoute d'administrateur dans le tableau, tester si le nombre d'administateur est superier ou egal a 4, si c'est le cas, on enleve le dernier element pour ajouter ensuite le nouvel administeur.
/*
let administrators = ['paul', 'pierre', 'Mathilde']

let newAdmin1 = {
    name : 'Marianne', 
    admin : true,
    age : 35,
    gender : 'f'
}
let newAdmin2 = {
    name : 'sophie', 
    admin : false,
    age : 14,
    gender : 'f'
}
let newAdmin3 = {
    name : 'lucie', 
    admin : true,
    age : 17,
    gender : 'm'
}

// A.
if(administrators.length >=4){
    administrators.pop()
}
administrators.push(newAdmin1.name)
console.log(administrators)
if(administrators.length >=4){
    administrators.pop()
}
administrators.push(newAdmin2.name)
console.log(administrators)
if(administrators.length >=4){
    administrators.pop()
}
administrators.push(newAdmin3.name)
console.log(administrators)
*/


// ----------------------------------------------------------------
// Exo_ Q7. creer une fonction qui prend en parametre un objet utilisateur et qui affiche en console "bonjour ${nom} !"
/*
let newAdmin1 = {
    name : 'Marianne', 
    admin : true,
    age : 35,
    gender : 'f'
}
let newAdmin2 = {
    name : 'sophie', 
    admin : false,
    age : 14,
    gender : 'f'
}
let newAdmin3 = {
    name : 'lucie', 
    admin : true,
    age : 17,
    gender : 'm'
}

// A.
sayBonjour (newAdmin1.name)
sayBonjour (newAdmin2.name)
sayBonjour (newAdmin3.name)

function sayBonjour (utilisateur){
    console.log(`bonjour ${utilisateur}`)
}
*/


// ----------------------------------------------------------------
// Exo_ Q8. Ajouter une condition pour afficher bonjour administratrice ...! si la proprietet admin est true
/*
let newAdmin1 = {
    name : 'Marianne', 
    admin : true,
    age : 35,
    gender : 'f'
}
let newAdmin2 = {
    name : 'sophie', 
    admin : false,
    age : 14,
    gender : 'f'
}
let newAdmin3 = {
    name : 'lucie', 
    admin : true,
    age : 17,
    gender : 'm'
}
*/

// A.
/* 함수를 만들기 위한 중간과정...
if(newAdmin1.admin){
    console.log(`bonjour administratrice ${newAdmin1.name} !`)
} else{
    console.log(`bonojour ${newAdmin1.name} !`)
}
if(newAdmin2.admin){
    console.log(`bonjour administratrice ${newAdmin2.name} !`)
} else{
    console.log(`bonojour ${newAdmin2.name} !`)
}
if(newAdmin3.admin){
    console.log(`bonjour administratrice ${newAdmin3.name} !`)
} else{
    console.log(`bonojour ${newAdmin3.name} !`)
}
*/
/* 최종 답
checkAdmin(newAdmin1)
checkAdmin(newAdmin2)
checkAdmin(newAdmin3)

function checkAdmin(utilisateur){
    if(utilisateur.admin){
        console.log(`bonjour administratrice ${utilisateur.name} !`)
    } else{
        console.log(`bonojour ${utilisateur.name} !`)
    }
}
*/


// ----------------------------------------------------------------
// Exo_ Q9. par rapport .gender, ecrire administratrice ou administrateur. (bonjour, administratrice/administrateur ...!)
/*
let newAdmin1 = {
    name : 'Marianne', 
    admin : true,
    age : 35,
    gender : 'f'
}
let newAdmin2 = {
    name : 'sophie', 
    admin : false,
    age : 14,
    gender : 'f'
}
let newAdmin3 = {
    name : 'lucie', 
    admin : true,
    age : 17,
    gender : 'm'
}

// A.
checkAdmin(newAdmin1)
checkAdmin(newAdmin2)
checkAdmin(newAdmin3)

function checkAdmin(utilisateur){
    if(utilisateur.admin){
        if (utilisateur.gender == 'f'){
            console.log(`bonjour administratrice ${utilisateur.name} !`)
        } if (utilisateur.gender == 'm'){
            console.log(`bonjour administrateur ${utilisateur.name} !`)
        }
    } else {
        console.log(`bonjour ${utilisateur.name} !`)
    }
}
*/


// ----------------------------------------------------------------
// Exo_ Q10. cree une fonction a 2 parametre qui affiche bonjour sophie et lucie
/*
let newAdmin1 = {
    name : 'Marianne', 
    admin : true,
    age : 35,
    gender : 'f'
}
let newAdmin2 = {
    name : 'sophie', 
    admin : false,
    age : 14,
    gender : 'f'
}
let newAdmin3 = {
    name : 'lucie', 
    admin : true,
    age : 17,
    gender : 'm'
}

// A.
disBonjour(newAdmin2.name, newAdmin3.name)

function disBonjour (user1Name, user2Name){
    console.log(`bonjour ${user1Name} et ${user2Name}`)
}
*/


// ----------------------------------------------------------------
// Exo_ Q11. ecrire la fonction qui retourne la somme de 2 parametre
/* 첫번째답. 틀리지는 않았으나 뭔가 이상함. 필요 없는 variable 하나 더 쓴 듯 한 느낌
let Number1 = 0
let Number2 = 0

function addNumber(a,b){
    let sum = a + b
    return sum
}

let result = addNumber(10,15)
    result = addNumber(3,5)

console.log(result)
*/
/* 수업 다시 보고 다시 작성함. 결론적으로는 function 함수 안에 굳이 선언 안해도 됐음.
let Number1 = 0
let Number2 = 0

function addNumber(a,b){
    return a + b
}

let result = addNumber(10,15)

console.log(result)
*/


// ----------------------------------------------------------------
// Exo_ Q12. Ecrire la fonction qui retourne le produit(multiplier) des 2 parametre
/*
let Number1 = 0
let Number2 = 0

function multiplier(Nb1,Nb2){
    return Nb1 * Nb2
}

let resultMultiple = multiplier(5,7)

console.log(resultMultiple)
*/


// ----------------------------------------------------------------
// Exo_Q13. compare la popultaion de deux villes, et affiche nom de ville qui a plus de population.
/*
const town1 = {
    name: 'Bordeaux' ,
    population: 300000,
    superficy: 50
}
const town2 = {
    name: 'Lyon' ,
    population: 500000,
    superficy: 48
}
const town3 = {
    name: 'Paris' ,
    population: 2000000,
    superficy: 105
}

// A.
comparePopTwoTown (town1, town2)
comparePopTwoTown (town1, town3)
comparePopTwoTown (town2, town3)

function comparePopTwoTown (TW1, TW2){
    if(TW1.population > TW2.population){
        console.log(TW1.name)
    } else {
        console.log(TW2.name)
    }
}
*/


// ----------------------------------------------------------------
// Exo_Q14. compare densité de population de deux villes, et affiche nom de ville qui a plus de densite.
/*
const town1 = {
    name: 'Bordeaux' ,
    population: 300000,
    superficy: 50
}

const town2 = {
    name: 'Lyon' ,
    population: 500000,
    superficy: 48
}
const town3 = {
    name: 'Paris' ,
    population: 2000000,
    superficy: 105
}
*/

// A.
/* 1차 시도 실패
const densityOfTown = [ 
    town1.population / town1.superficy, 
    town2.population / town2.superficy, 
    town3.population / town3.superficy, 
]

compareDensiteTwoTown(densityOfTown[0],densityOfTown[1])
compareDensiteTwoTown(densityOfTown[0],densityOfTown[2])
compareDensiteTwoTown(densityOfTown[1],densityOfTown[2])

function compareDensiteTwoTown(TWD1,TWD2){
    if (TWD1 > TWD2){
        console.log(TWD1)
    } else {
        console.log(TWD2)
    }
}
*/

// 2차 시도  - 개별적으로 함수부터 만들기
/*
if(town1.population / town1.superficy > town2.population / town2.superficy){
    console.log(town1.name)
} else {
    console.log(town2.name)
}

if(town1.population / town1.superficy > town3.population / town3.superficy){
    console.log(town1.name)
} else {
    console.log(town3.name)
}

if(town2.population / town2.superficy > town3.population / town3.superficy){
    console.log(town2.name)
} else {
    console.log(town3.name)
}

compareTwoDensity (town1.population / town1.superficy,town2.population / town2.superficy)
compareTwoDensity (town1.population / town1.superficy,town3.population / town3.superficy)
compareTwoDensity (town2.population / town2.superficy,town3.population / town3.superficy)

function compareTwoDensity (ville1,ville2){
    if(ville1>ville2){
        return ville1
    } else{

    }
}
*/

// 3차 시도 
/*
compareTwo (town1, town2)
compareTwo (town1, town3)
compareTwo (town3, town2)

function compareTwo (ville1, ville2){
    if(ville1.population / ville1.superficy > ville2.population / ville2.superficy){
        console.log(ville1.name)
    }  else {
        console.log(ville2.name)
    }
}
*/

// return 사용해서 3차시도 고쳐 봄
/*
let resultOfCompare1 = compareTwo(town1, town2)
let resultOfCompare2 = compareTwo(town1, town3)
let resultOfCompare3 = compareTwo(town3, town2)

function compareTwo (ville1, ville2){
    if(ville1.population / ville1.superficy > ville2.population / ville2.superficy){
        return ville1.name
    }  else {
        return ville2.name
    }
}

console.log(resultOfCompare1)
console.log(resultOfCompare2)
console.log(resultOfCompare3)
*/


// ----------------------------------------------------------------
// Exo_ Q15. écrire la fonction qui compare 2 villes en paramètres et qui me retourne celle qui a le plus de jumelages.
/*
const town1 = {
    name: 'Bordeaux' ,
    population: 300000,
    superficy: 50,
    twinnings : ['berlin', 'londres', 'madrid', 'libourne']
}
const town2 = {
    name: 'Lyon' ,
    population: 500000,
    superficy: 48,
    twinnings : ['berlin', 'londres', 'madrid', 'libourne','rennes', 'varsovie']
}
const town3 = {
    name: 'Paris' ,
    population: 2000000,
    superficy: 105,
    twinnings : ['berlin', 'londres', 'madrid', 'libourne','rochefort']
}
*/

// A.
/*
compareNumberOfTwin(town1, town2)

function compareNumberOfTwin(ville1, ville2){
    if(ville1.length > ville2.length){
        return ville1
    } else {
        return ville2
    }
}
let biggest1 = compareNumberOfTwin(town1, town2)
let biggest2 = compareNumberOfTwin(town1, town3)
let biggest3 = compareNumberOfTwin(town3, town2)
console.log(biggest1.name)
console.log(biggest2.name)
console.log(biggest3.name)
*/


// ----------------------------------------------------------------
// Exo_ Q. extra : 만약에 도시가 엄청 많다면, 가장 큰 수 비교하기
/*
let NumberOfTwin = [4, 5, 10, 14, 76, 63, 76, 22, 24, 78, 54, 86, 34, 23]
*/

// A.
/* 이러한 과정을 거쳐서..
if(biggest <= NumberOfTwin[1]){
    biggest = NumberOfTwin[1]
}
if(biggest <= NumberOfTwin[2]){
    biggest = NumberOfTwin[2]
}
if(biggest <= NumberOfTwin[3]){
    biggest = NumberOfTwin[3]
}
if(biggest <= NumberOfTwin[NumberOfTwin.length]){
    biggest = NumberOfTwin[NumberOfTwin.length]
}
*/

/* 최종 답
let biggest = NumberOfTwin[0]

for (i=0; i<NumberOfTwin.length; i++){
    if(biggest <= NumberOfTwin[i]){
        biggest = NumberOfTwin[i]
    }
}       
console.log(biggest)
*/