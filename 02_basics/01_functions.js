// one way to write function 
function saymyname(name){
    console.log(`My name is ${name}`);
}
saymyname("shreyash") ; 


function addtwonumbers(num1 , num2){ // here num1 , num2 are called as parameters 
    console.log(num1 + num2 ) ;
}

addtwonumbers(2 , 3)  ; // will output 5
addtwonumbers("2" , "4") ; // will output 24 , values passes are called as arguments 


const result = addtwonumbers(2 , 5) ; 
console.log(result); // will give as undefined 

const addnumbers = function (num1 , num2){
    return num1 + num2 ; 
}
const ans = addnumbers(4 ,5) ; 
console.log(ans);
console.log(typeof addnumbers);
console.log(typeof addtwonumbers);



// shopping carts in the project , 
// we dont know how many parameters are going to come 

function calculatecartprice(val1 , val2 , ...num1){ //  ... is also called as rest and spread operator , in this case it is called as rest 
    return num1 ; 
}

console.log(calculatecartprice(3 , 4 , 5 , 6 , 7)) ;  //  to solve this problem we have something as rest operator 


const user = {
    username :  "shreyash" , 
    price : "199" , 
}

function handleobject(anyobject){
    const {username , price} = anyobject
    console.log(`username is ${username} , price is ${price}`) ; 
}



handleobject(user) ; 