console.log('je suis bien dans mon index_2.js') 

let arrExample = [3, 5, 8]
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


