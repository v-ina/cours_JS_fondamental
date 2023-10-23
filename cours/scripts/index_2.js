/*
// 1. 지난 수업 복습

let arrExample = [3, 5, 8, 11, 6 ,14, 5 ,112, 12]
let readFirstElement = true;
let index;

console.log(arrExample)

if(!readFirstElement){          // 반대로 생각하면 편함. 만약에 얘한테 !가 없었으면 단순하게 처음거가 나오겠지 
    console.log(arrExample[0])
} else{
    console.log(arrExample[1])
}

if(readFirstElement){   
    index = 0
} else{
    index = 1
}
console.log(arrExample[index])  // 실제로는 이렇게 값으로 찾는경우가 훨씬 많고, 공부할 때 처럼 0,4 이렇게 직접적인 숫자로 적는 경우는 거의 없다.

let objExample = {
    prop1 : 6,
    prop2 : 3
}
console.log(objExample.prop1)
*/


// ----------------------------------------------------------------


// 2. arr에게도 property가 있다. 바로 length
// 표의 가장 마지막 항목 불러오는 방법 :console.log(arrExample[arrExample.length - 1])

/*
let arrExample = [3, 5, 8, 11, 6 ,14, 5 ,112, 12]
let readFirstElement = true;
let index;

console.log(arrExample.length)
*/

// Exo_ Q. Recuperer l'element du tableau place au milieu du tableau a l'aide de la propriete .length

// 내 답안 : 완전 혼자서는 못했고, middleIndex라는 힌트 받고 성공함.
/*
let middleIndex ;

if(arrExample.length % 2 == 1){
    middleIndex = arrExample.length / 2 - 0.5
} else {
    middleIndex = arrExample.length / 2 
}

let elementInTheMiddle = arrExample[middleIndex]

console.log(elementInTheMiddle)
*/

// A. 
/*
let middleIndex;
if (arrExample.length %2 == 0){
    middleIndex = arrExample.length /2
} else {
    middleIndex = (arrExample.length-1) / 2
}

let elementInTheMiddle = arrExample[middleIndex]

console.log(elementInTheMiddle)
*/
// 사실 Math.round로 쉽게 가능함. let middleIndex = Math.round(arrExample.length / 2);


// ----------------------------------------------------------------


/*
let arrExample = [3, 5, 8, 11, 6 ,14, 5 ,112, 12]

console.log(arrExample)

// methode pour ajouter un element a la fin du tableau
arrExample.push(51, 1, 47)

console.log(arrExample)

// methode pour retirer le dernier element du tableau (마지막것만 없앰)
arrExample.pop() 
arrExample.pop() 
arrExample.pop() 

console.log(arrExample)
*/


// ----------------------------------------------------------------


// Exo_ Q. avnat chaque ajout d'administrateur dans le tableau, 
// tester si le nombre d'administateur est superier ou egal a 4, si c'est le cas, 
// on enleve le dernier element pour ajouter ensuite le nouvel administeur.

// 내가 만든 답
/*
let administrators = ['paul', 'pierre', 'Mathilde']

if(administrators.length >=4){
    administrators.pop()
}

let newAdmin1 = 'Marianne'
administrators.push(newAdmin1)

if(administrators.length >=4){
    administrators.pop()
}

let newAdmin2 = 'sophie'
administrators.push(newAdmin2)

if(administrators.length >=4){
    administrators.pop()
}

let newAdmin3 = 'Lucie'
administrators.push(newAdmin3)

console.log(administrators)
*/

// A. 중간과정
/*
let administrators = ['paul', 'pierre', 'Mathilde']

if(administrators.length >=4){
    administrators.pop()
    administrators.push(newAdmin1)
} else {
    administrators.push(newAdmin1)
}

let newAdmin1 = 'Marianne'
administrators.push(newAdmin1)

if(administrators.length >=4){
    administrators.pop()
    administrators.push(newAdmin2)
} else {
    administrators.push(newAdmin2)
}

let newAdmin2 = 'sophie'
administrators.push(newAdmin2)

if(administrators.length >=4){
    administrators.pop()
    administrators.push(newAdmin3)
} else {
    administrators.push(newAdmin3)
}

let newAdmin3 = 'Lucie'
administrators.push(newAdmin3)

console.log(administrators)

// A. 정답. 위와 같은 과정을거쳐...  아래와 같은 답이 나옵니다.

let newAdmin1 = 'Marianne'
let newAdmin2 = 'sophie'
let newAdmin3 = 'Lucie'

if(administrators.length >=4){
    administrators.pop()
} 
administrators.push(newAdmin1)

if(administrators.length >=4){
    administrators.pop()
} 
administrators.push(newAdmin2)

if(administrators.length >=4){
    administrators.pop()
} 
administrators.push(newAdmin3)

console.log(administrators)
*/


// ----------------------------------------------------------------


// Exo_ Q. ajouter utilisateur si la propriete admin est true

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
*/


// 내가 만든 답1
/*
if (newAdmin1.admin){
    administrators.push(newAdmin1.name)
}

if (newAdmin2.admin){
    administrators.push(newAdmin2.name)
}

if (newAdmin3.admin){
    administrators.push(newAdmin3.name)
}

console.log(administrators)
*/


// 내가 만든 답2. parametre를 사용한 답
/*
addUserIfAdmin (newAdmin1)
addUserIfAdmin (newAdmin2)
addUserIfAdmin (newAdmin3) 

function addUserIfAdmin (user) {
    if(user.admin) {
        administrators.push(user.name)
    }
}
console.log(administrators)
*/


// ----------------------------------------------------------------


// Exo_ Q. creer une fonction qui prend en parametre un objet utilisateur et qui affiche en console "bonjour ${nom} !"
// Ajouter une condition pour afficher bonjour administratrice ...! si la proprietet admin est true

// 내가 만든답
// getName (newAdmin1)
// getName (newAdmin2)
// getName (newAdmin3)

/*
function getName (nameOfParam) {
    if (nameOfParam.admin){
        console.log(`bonojour administratrice ${nameOfParam.name} !`)
    } else {
        console.log(`bonojour ${nameOfParam.name} !`)
    }
}
*/


// ----------------------------------------------------------------


// Exo_ Q. 위의 정답을 else 없이 고쳐보세요

// 내가 만든 답
/*
getName (newAdmin1)
getName (newAdmin2)
getName (newAdmin3)

function getName (nameOfParam) {
    let verification = ' administratrice'

    if (!nameOfParam.admin){
        verification = ''
    } 
    console.log(`bonjour${verification} ${nameOfParam.name} !`)
}
*/


// A.
/*
displayName(newAdmin1)
displayName(newAdmin2)

function displayName(param){
    let strResult = 'Bonjour '

    if(param.admin) {
        strResult += 'adimnistratrice '
    }

    strResult += param.name + ' !'
    console.log(strResult)
}


// ----------------------------------------------------------------


// Exo_ Q. admin이라면 성별에 따라 administratrice와 administrateur를 따로 붙여주세요.

// A.
function displayName(param){
    let strResult = 'Bonjour '

    if(param.admin) {
        if(param.gender == 'f') {
        strResult += 'adimnistratrice '
        } else if(param.gender == 'm') {
            strResult += 'administrateur'
        }
    }

    strResult += param.name + ' !'
    console.log(strResult)
}
*/


// ----------------------------------------------------------------


// 여러가지의 파라미터 사용해보기
// Exo_ Q. cree une fonction a 2 parametre qui affiche bonjour sophie et lucie

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
*/

// A.
/*
buildSentence(newAdmin1, newAdmin3)

function buildSentence(user1, user2){
    console.log(`bonjour ${user1.name} et ${user2.name} ?`)
}
*/


// ----------------------------------------------------------------


// Exo_ 도시 둘을 비교하여 인구가 더 많은 도시 보여주기
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

// 내가 만든 답 1
/*
plusGrandeVille (town1,town2)
plusGrandeVille (town2,town3)
plusGrandeVille (town1,town3)

function plusGrandeVille (ville1, ville2){
    if (ville1.population > ville2.population) {
        console.log(ville1.name)
    } else {
        console.log(ville2.name)
    }
}
*/

// 내가 만든 답 2
/*
plusGrandeVille (town1,town2)
plusGrandeVille (town2,town3)
plusGrandeVille (town1,town3)

function plusGrandeVille (ville1, ville2){
    let comparison
    if (ville1.population > ville2.population) {
        comparison = ville1.name
    } else {
        comparison = ville2.name
    }
    console.log(comparison)
}
*/


// ----------------------------------------------------------------


// Exo_ 이번엔 위의 예제로 두 도시의 크기별 인구수를 비교해서 가장 큰 도시를 보여줘라.

// 내가 만든 답
/*
calDensite (town1,town2)
calDensite (town2,town3)
calDensite (town1,town3)

function calDensite (city1, city2){
    let densiteOfCity1 = city1.population / city1.superficy
    let densiteOfCity2 = city2.population / city2.superficy

    if (densiteOfCity1 > densiteOfCity2) {
        console.log(city1.name, densiteOfCity1)

    } else {
        console.log(city2.name, densiteOfCity2)
    }
}   
*/


// ----------------------------------------------------------------


// A. 도시 인구수 비교 정답 과 동시에 return의 사용법
/*
const biggerTown = compareTowns(town3,town2)

console.log(biggerTown.name)

function compareTowns (ville1, ville2){
                    // 괄호안에 있는게 input
    if (ville1.population > ville2.population){
        return ville1
                    // return 값은 output 
                    // administeur 예제에서는 return이 필요 없었는데, 
    } else {
        return ville2
    }

    console.log('hello from function')
}
*/


// ----------------------------------------------------------------


// Exo_ Q. ecrire la fonction qui retourne la somme de 2 parametre

/*
const sum = addTwoParameters(nb1, nb2)

console.log(`Le resultat de la somme de ${nb1} et ${nb2} est egal a ${sum}`)

function addTwoParameters(nb1, nb2){
}
*/

// 내가 만든 답
/*
addTwoParameters(5, 7)

function addTwoParameters(nb1, nb2){
    const sum = nb1 + nb2
    console.log(`Le resultat de la somme de ${nb1} et ${nb2} est egal a ${sum}`)
    
}
*/


//return 사용한 오답
/*
addTwoParameters(5, 7)

function addTwoParameters(nb1, nb2){
    const sum = addTwoParameters(nb1, nb2)
    return sum nb1+nb2
    console.log(`Le resultat de la somme de ${nb1} et ${nb2} est egal a ${sum}`)
}
*/


// A.
/*
const nb1 = 5
const nb2 = 7

const sum = addTwoParameters(5, 7)

console.log(`Le resultat de la somme de ${nb1} et ${nb2} est egal a ${sum}`)

function addTwoParameters(arg1,arg2){
    // const result = arg1 + arg2  // 딱히 필요하진 않은 줄
    return arg1 + arg2
}
*/


// ----------------------------------------------------------------


// return으로 함수 결과 값을 빼오는 방법
/*
const val = 15;

const res = addValue(3)

console.log(res);       // -> 18

function addValue(param) {
    return param + val;
}
*/


// return은 한번밖에 쓸 수 없다.
/*
const val = 15;

const res = addValue(3)

console.log(res);       // -> 18

function addValue(param) {
    let monNombre = 12

    return param + val;
    return monNombre +1;
console.log(monNombre)
}
*/


// 전역변수가 함수변수보다 먼저 선언되지 않으면 작동을 못한다.
/*
const res = addValue(3)         // 얘가 지역변수
const val = 15;                 // 얘가 전역변수 (얘가 먼저 선언되야 함. )

console.log(res);               // 그래서 console.log(res) 오류남

function addValue(param) {
    return param + val;
}
*/


// ----------------------------------------------------------------


// Exo_ Q. Ecrire la fonction qui retourne le produit(multiplier) des 2 parametre

// A.
/*
const mynumber1 = 4
const mynumber2 = 6

const res = mutipleNb(mynumber1,mynumber2)

function mutipleNb (nb1, nb2){
    return nb1 * nb2

    // const produit =  nb1 * nb2
    // return produit
}

console.log(res)
*/


// ----------------------------------------------------------------


// Exo_ Q. 세가지 도시 안에 있는 twinnings중 가장 많은 twinnings를 갖고 있는 도시 이름을 표시해라
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

// 내가 만든 답 1
/*
const twinningTown1 = town1.twinnings.length
const twinningTown2 = town2.twinnings.length
const twinningTown3 = town3.twinnings.length

const result = compareTwinningOfThreeTown (twinningTown1,twinningTown2,twinningTown3)

console.log(result)

function compareTwinningOfThreeTown (twinTown1,twinTown2,twinTown3){
    if (twinTown1 > twinTown2 && twinTown1 > twinTown3){
        // console.log(town1.name)
        return town1.name
    } else if (twinTown2 > twinTown1 && twinTown2 > twinTown3) {
        // console.log(town2.name)
        return town2.name
    } else if (twinTown3 > twinTown1 && twinTown3 > twinTown2) {
        // console.log(town3.name)
        return town3.name
    }

    // console.log(result)를 여기 함수 안에 넣었을 때는 결과가 안나왔다. 왜냐면 내 result라는 애를 실행시키려면 밖으로 나가야 하니까. 내 result는 밖에 있잖아.
}
*/

// 내가 만든 답 2 - 표를 이용해서 한번 해봄. 왠지 더 간단해 질거 같아서 그냥 해봄. 근데 딱히..
/*
const arrNumberOfTwinning = [twinningTown1, twinningTown2, twinningTown3]
let arr0 = arrNumberOfTwinning[0]
let arr1 = arrNumberOfTwinning[1]
let arr2 = arrNumberOfTwinning[2]

function compareInArr (arrNo0,arrNo1,arrNo2){
    if (arrNo0 > arrNo1 && arrNo0 > arrNo2){
        return town1.name
    } else if (arrNo1 > arrNo0 && arrNo1 > arrNo2) {
        return town2.name
    } else if (arrNo2 > arrNo0 && arrNo2 > arrNo1) {
        return town3.name
    }
}
*/


// ----------------------------------------------------------------


// 위의 예시는 3가지를 비교하는거라 괜찮았지만 만약에 이게 50개라면 
// 가장 큰 애는 어떻게 찾을 수 있을까? 라는 질문으로부터 혼자 곰곰히 찾아봄.

/*
const arr = [4, 6, 9, 4, 65, 28, 68, 49, 14, 87, 69, 35, 68, 32, 68]


const nb1 = 4
const nb2 = 6
const nb3 = 9
const nb4 = 65
const nb5 = 28
const nb6 = 68
const nb7 = 49
const nb8 = 14
const nb9 = 87
const nb10 = 69
const nb11 = 35

if (arr[1]>bigestNb) {
    bigestNb = arr[1]
}
console.log(bigestNb)
if (arr[2]>bigestNb) {
    bigestNb = arr[2]
}
console.log(bigestNb)
if (arr[3]>bigestNb) {
    bigestNb = arr[3]
}
console.log(bigestNb)
if (arr[4]>bigestNb) {
    bigestNb = arr[4]
}
if (arr[i]>bigestNb) {
    bigestNb = arr[i]
}


for (i=0; i<arr.length;i++) {
        console.log(arr[i])
}

/*
let i = 0
let bigestNb = arr[0]


for (i=0; i<arr.length;i++) {
    if (arr[i] > bigestNb){
        bigestNb = arr[i]
    }
}

console.log(bigestNb)
// 이렇게 찾긴 했는데 return 활용을 못하겠음.
*/


// 19 oct