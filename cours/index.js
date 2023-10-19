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



// Les nombres

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



// Les chaines de caracters (string, str) "" '' ``

/*
const firstname = 'Paul'
const lastname = "Doazan"
const phrase = 'je m\'appelle Paul'
const mouais = `je m'appelle "Paul"` //depuis 2015
console.log(phrase, lastname)
*/

/*
let name = "yeonsoo"
name += '님'
console.log(name)
*/
// name 지워진 이유 : 이미 JS가 사용중인 이름임. 다른걸로 쓰는게 좋다.



// Exo_ Q.  console.log를 그대로 두면서 나오는 값을 두개 합친 값으로 변경해보아라
/*
let myName = `Je m'appelle "Paul"`
const myLastname = `Doazan`

console.log(myName)
*/

// Exo_ A. myName += " -" + myLastname 추가하기
/*
let myName = `Je m'appelle "Paul"`
const myLastname = `Doazan`

myName += " -" + myLastname

console.log(myName)
*/

// 지금 이거처럼, console.log(myName)은 그대로 두고, 그렇다고 값을 바꾸는것도 아니면서, 이런식으로 
// h1은 그대로 두고 글씨를 바뀌게 할수도 있고, 이미지 url을 바꿀수도 있는거임.  
// 지금 이 방법을 잘 기억해두자. let으로 선언된 애는 바꿀 수 있고, +=는 chaine에도 적용되므로 이런식으로 변수를 수정할 수 있다.


/*
const firstname = 'Paul'
const lastname = "Doazan"
const phrase = 'je m\'appelle Paul'
const mouais = `je m'appelle "Paul"` //depuis 2015
console.log(phrase, lastname)
*/

/*
let myName = `Je m'appelle "Paul"`
const age = 35;
const lastname = `Doazan`

myName += lastname
myName += ', ' + age + ' ans.'

console.log(MyName)
*/

// myName은 이미 바뀌어 버렸고 되찾는 방법은 따로 없어 ㅋㅋ 
// 내가 선언했던 myName += lastname 이 줄을
// let myName2 = myName + lastname 으로 변수를 만들어 버리는 수 밖에.

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




const bigNb1 = 100
const bigNb2 = 400

// Exo_ Q. ecrire la condition pour afficher le plus grand nombre

if(bigNb2 > bigNb1){
    console.log(`${bigNb2} est plus grand`)
} else{
    console.log(`${bigNb1} est plus grand`)
}

const compare = bigNb1 < bigNb2

if(compare) {
    console.log(`${bigNb2} est plus grand`)
} else {
    console.log(`${bigNb1} est plus grand`)
}



// Exo_ A. 

const resultComparison = bigNb1 > bigNb2

if(resultComparison){
    console.log(bigNb1)
} else{
    console.log(bigNb2)
}

if(bigNb1 > bigNb2){
    console.log(bigNb1)
} else if (bigNb1 < bigNb2){
    console.log(bigNb2)
} else if ( bigNb1 == bigNb2) {
    console.log(bigNb1,bigNb2)
}
// 조금 더 이해하기 위한 예시. 보통 수학적 비교이므로 세번째 비교가 따로 필요없음.



const firstname = `paul`
// const firstname2 = "hamid"
// const firstname3 = "pauline"

if (firstname == `hamid`){
    console.log(`bonjour + ${firstname}`)
} else if(firstname == `pauline`){
    console.log(`bonjour + ${firstname}`)
} else {
    console.log(`bonjour ${firstname}`)
}
