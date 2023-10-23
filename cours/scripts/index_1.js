// Presentation des operateurs arithetiques
/*
Commentaires sur plusieurs lignes
*/
/**
 * Variante de commentaires sur plusieurs lignes
 * 이렇게 별을 두개 찍으면
 * 알아서
 * 모든 줄에
 * 별이 생긴다
 * 오예
*/


// ----------------------------------------------------------------


// 1. LES NOMBRES

/*
var myNumber1 = 3 + 2
var myNumber2 = 4
var myResult = myNumber1 * myNumber2

console.log(myNumber1, myNumber2)
console.log(myResult)
*/

// declaration moderne (en ES6, javascript depuis 2015) de variables

/*
const myNb1 = 9
let myNb2 = 3
myNb2 ++

const res = myNb1 * myNb2

console.log(res)
*/


// ----------------------------------------------------------------


// 2. LES CHAINES DE CARACTERS (string, str) "" '' ``

/*
const firstname = 'Paul'
const lastname = "Doazan"
const phrase = 'je m\'appelle Paul'
const mouais = `je m'appelle "Paul"` // depuis 2015
console.log(phrase, lastname)


let name = "yeonsoo"
name += ' 님'
console.log(name)
*/
// name 지워진 이유 : 이미 JS가 사용중인 이름임. 다른걸로 쓰는게 좋다.


// ----------------------------------------------------------------


// Exo_ Q.  console.log를 그대로 두면서 나오는 값을 두개 합친 값으로 변경해보아라

/*
let myName = `Je m'appelle "Paul"`
const myLastname = `Doazan`

console.log(myName)

// Exo_ A. myName += " -" + myLastname 추가하기

let myName = `Je m'appelle "Paul"`
const myLastname = `Doazan`

myName += " -" + myLastname

console.log(myName)
*/

// 지금 이거처럼, console.log(myName)은 그대로 두고, 그렇다고 값을 바꾸는것도 아니면서, 이런식으로 
// h1은 그대로 두고 글씨를 바뀌게 할수도 있고, 이미지 url을 바꿀수도 있는거임.  
// 지금 이 방법을 잘 기억해두자. let으로 선언된 애는 바꿀 수 있고, +=는 chaine에도 적용되므로 이런식으로 변수를 수정할 수 있다.


// ----------------------------------------------------------------



// 변수에 요소를 더해서 결과 값 출력하기
/*
let myName = `Je m'appelle "Paul"`
const age = 35;
const lastname = ` Doazan`

myName += lastname
myName += ', ' + age + ' ans.'

console.log(myName)
*/

// myName은 이미 바뀌어 버렸고 되찾는 방법은 따로 없어 ㅋㅋ 
// 내가 선언했던 myName += lastname 이 줄을
// let myName2 = myName + lastname 으로 변수를 만들어 버리는 수 밖에.


// 위의 예제를 벡틱으로 써보기 
/*
let myName = `Je m'appelle "Paul"`
const age = 35;
const lastname = `Doazan`
let modifiedAge = age + 5

myName += lastname
myName += ', ' + age + ' ans.'

const resultStr = `${myName} et j'ai ${age} ans.`

console.log(resultStr)
*/


// ----------------------------------------------------------------


// 3. LES BOOLEAN
/*
const myBoolean = true
const myBoolean2 = false

if(myBoolean2) {
    console.log( 'je suis passe dans ma condition')
}
console.log('je suis a la fin de mon script')
*/

/*
const myBoolean1 = true
const myBoolean2 = false
let myNb = 5

if(myBoolean1){
    myNb += 7
}
console.log(myNb)
*/


// ----------------------------------------------------------------


/*
let myAge = 35
const isAdult = myAge > 18

if(isAdult){
    console.log(`Paul est adulte`)
}
if(!isAdult){
    console.log(`Paul n'est pas adulte`)
}
*/

/*
const myAge = 18
const legalAge = 18

const isMinor = myAge >= legalAge

if(isMinor){
    console.log(`Paul est mineur`)
} else {
    console.log(`Paul n'est pas mineur`)
}
*/

/*
const myAge = 18
const legalAge = 18

const isMinor = myAge >= legalAge

const is30YearsOld = myAge == 30

if(isMinor){
    console.log(`Paul est mineur`)
} else {
    console.log(`Paul n'est pas mineur`)
}

if(is30YearsOld){           // ligne pour vrai
    console.log(`Paul a 30 ans`)
} else {                    // ligne pour faux
    console.log(`Paul n'a pas 30 ans`)
}
*/


// ----------------------------------------------------------------


/*
const bigNb1 = 100
const bigNb2 = 400
*/

// Exo_ Q. ecrire la condition pour afficher le plus grand nombre

/*
if(bigNb2 > bigNb1){
    console.log(`${bigNb2} est plus grand`)
} else{
    console.log(`${bigNb1} est plus grand`)
}
// 내가 만든답 1

const compare = bigNb1 < bigNb2

if(compare) {
    console.log(`${bigNb2} est plus grand`)
} else {
    console.log(`${bigNb1} est plus grand`)
}
// 내가 만든답 2
*/


// Exo_ A. 
/*
const resultComparison = bigNb1 > bigNb2

if(resultComparison){
    console.log(bigNb1)
} else{
    console.log(bigNb2)
}
// correction 1

if(bigNb1 > bigNb2){
    console.log(bigNb1)
} else if (bigNb1 < bigNb2){
    console.log(bigNb2)
} else if ( bigNb1 == bigNb2) {
    console.log(bigNb1,bigNb2)
}
*/
// coreection 2  (조금 더 쉽게 이해하기 위한 예시. 보통 수학적 비교이므로 세번째 비교가 따로 필요없음)


// ----------------------------------------------------------------


/*
const firstname = `paul`
const firstname2 = "hamid"
const firstname3 = "pauline"

if (firstname == `hamid`){
    console.log(`bonjour + ${firstname}`)
} else if(firstname == `pauline`){
    console.log(`bonjour + ${firstname}`)
} else {
    console.log('bonjour' + firstname + ', je ne connaisais pas ton prenom avant.')
    // Exo_ Q. reecrire le message logge avec des backticks

    // Exo_ A. 
    console.log(`bonjour ${firstname}, je ne connaissais pas ton prenom avant.`)
}
*/


// ----------------------------------------------------------------


// 4. VARIABLE COMPLEXE : LES TABLEAUX (Array)

/*
let arr1 = [3, 5, 12, 204.5, 'hello', false, 'world']
const firstElement = arr1[0]
console.log(firstElement)
console.log(arr1[4])
// console.log(arr1[0,4])는 안되고 (arr1[0], arr[4]) 이렇게 두개 써야함. 앞에꺼처럼 쓰면 4 값만 가져옴.

let arrResult1 = arr1[0] + arr1[1]
console.log(arrResult1) 
// 요렇게 하면 테이블 안에 있는 요소들끼리 불러와서 붙일 수 있겠구만.

let arrResult2 = arr1[4] + ' ' + arr1[6]
let arrResult3 = `${arr1[4]} - ${arr1[6]}`
let arrResult4 = `arr1[4] - arr1[6]`   
// 이래서 변수의 값을 불러올 때는 $를 써야 하는구나. '값'을 의미해서 달러로 쓰는건가보다 ㅋㅋ

console.log(arrResult2) 
console.log(arrResult3)
console.log(arrResult4) 
*/
// 그리고 일단 이렇게 여러가지 종류의 변수들을 다 같은 표에 적는게 흔하진 않음


// ----------------------------------------------------------------


/*
// Exo_ Q. 값이 true 일때 array안의 요소를 이용해서 209.5를 만들고, false 일때는 hello world를 출력해라.

// 내 답 => 오답이유 : 벡틱을 안쓰는 상황이기 때문에 $을 안써도 됨. + true 와 false인 경우 헷갈림
let arr1 = [3, 5, 12, 204.5, 'hello', false, 'world']

if(${arr1[5]} == false){
    arrResult5 = `${arr1[4]} ${arr1[6]}`
} else {
    arrResult5 = $arr1[1] + $arr1[3]
}
console.log(arrResult5)
*/


// 정답
/*
let arr1 = [3, 5, 12, 204.5, 'hello', false, 'world']
let arrResult5
// 이 줄이 let이고 우리가 나중에 이 값을 변경할 수 있어서 이 줄에서 값을 주지 않아도 괜찮은데 
// const arrResult5 적어두고 값을 바로 주지 않으면 아예 오류가 남. const 속성 자체가 절대로 값이 바뀌지 않는 애니까

if (arr1[5]) {      // 우리 arr1에 5번째 요소가 false이므로 이 줄은 'false인 경우의 상태'
    arrResult5 = `${arr1[4]} ${arr1[6]}`
} else {            // 반대로 여기는 'true인 상태'
    arrResult5 = arr1[1] + arr1[3]
}
console.log(arrResult5)
*/

// if(0), if(2), if(4) 이런식으로 작성이 되면 0이 아닌 모든 수를 true로 인식하기 때문에 false, true, true의 값을 갖는다.
// 만약에 chaine을 사용한다고 하면, if('0'), if('fiejf') 같이 값이 들어간 애들은 true로 생각하는데 if('')는 false 값을 갖는다. 
// 왜냐면 얘는 undefined이기 때문. undefined 와 null은 false의 값을 갖는다.


// ----------------------------------------------------------------


// 표에 뭔지 확인하고 바꾸는게 아니고 바로 ecraser시키기
/*
let arr1 = [
    3, 
    5, 
    12, 
    204.5, 
    'hello',
    false, 
    'world'
]

arr1[4] = "bonjour"
console.log(arr1)

//Exo_ Q. changer la valeur de 204.5 en 190 par soustraction de 14.5

// 내 답 => 오답 : 우리가 원하는 것은 -= 사용하는 것. 
arr1[3] = 190
console.log(arr1)


// A. 
arr1[3] -= 14.5
console.log(arr1)
*/
// arr1[3] = arr1[3] -14.5 이랑 완전 같은거임
// 이렇게 안에 있는 요소에 값에서 빼기하고 싶으면 -=로 하기 


// ----------------------------------------------------------------


//  5. VARIABLE COMPLEXE : LES OBJETS : ①cle(프로퍼티라고 부른다)와  ②:와 ③값 이렇게 3개가 요소임. 
// 각 프로퍼티는 콤마로 구분한다. 불러오는 방법은 점을 찍어서. 얘는 array와 달리 순서는 딱히 중요하지가 않다. 키가 있으므로.

/*
let obj1 = {
    maPremierePropriete : 12,
    maDeuxiemePropriete : 14,
    prop3 : 11,
    prop9 : 'hello'
}

console.log(obj1.maPremierePropriete)
console.log(obj1.prop9)
*/


// ----------------------------------------------------------------


// Exo_Q1. A l'aide de l'objet precedent, construire la chaine de caractere 
// ==> Je m'appelle paul Doazan, j'ai 35 ans et j'habite a talence.

/*
let identity = {
    firstname: 'paul',
    lastname: 'Doazan',
    age: 35,
    town: 'talence'
}

//  A. 
let resultat = `Je m'appelle ${identity.firstname} ${identity.lastname}, j'ai ${identity.age} ans et j'habite a ${identity.town}.`

console.log(resultat)
*/


// ----------------------------------------------------------------


// Exo_Q2. creer un deuxieme objet identity2, stocker identity et identity2 dans un tableau, et ecrire la phrase precedente en utilisant le tableau.

/*
// 내가 쓴 답 : 문제의 요지와 달랐음. 아예 새로운 arr를 만들어서 그 안에 객체 자체를 담아야 함.
let identity2 ={
    firstname: 'Pierre',
    lastname: 'Durand',
    age: 30,
    town: 'bordeaux'
}

let arrIdentities = [
    identity.firstname,
    identity.lastname,
    identity.age,
    identity.town
]

let arrIdentitiesResult = ` Je m'appelle ${arrIdentities[0]} ${arrIdentities[1]}, j'ai ${arrIdentities[2]} ans et j'habite a ${arrIdentities[3]}.`

console.log(arrIdentitiesResult)
*/

// A.

/*
let identity2 ={
    firstname: 'Pierre',
    lastname: 'Durand',
    age: 30,
    town: 'bordeaux'
}

let arrIdentities = [identity, identity2]

let arrIdentitiesResult = `Je m'appelle ${arrIdentities[1].firstname} ${arrIdentities[1].lastname}, j'ai ${arrIdentities[1].age} ans et j'habite a ${arrIdentities[1].town}.`

console.log(arrIdentitiesResult)
*/


// 19 oct