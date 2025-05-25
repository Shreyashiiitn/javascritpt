//+++++++++++++++ this keyword ++++++++++++++++
const user = {
    username : "shreyash" , 
    price : 999 , 
    

    welcomemessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
        
    }
}

user.welcomemessage() ; 
user.username = "samay" ; 
user.welcomemessage() ; 

console.log(this); // this refers to the empty context , i.e the empty objectt  
// inside browser golbal context is window object 

function chai(){
    username : "shreyash"
    console.log(this.username) // will give output as undefined 
    console.log(this);
}

chai() ; 


const chaiarrow = () => {
    let username =  "shreyash" 
    console.log(this.username) ; 
}

chaiarrow() ; 



//++++++++++++++ Arrow functions +++++++++++++++++
const addtwo = (num1 , num2) =>{
    return num1 + num2 ; 
}

console.log(addtwo(3  , 4)) ; 


// implicit return 
const addtwo1 = (num1 , num2) =>  num1 + num2 ; // no need to write return here 
// when we wrap inside () , we dont need to write return 

const addtwo2 = (num1 , num2) => (num1 + num2) ; 


// when we have to return the objects
const addtwo3 = (num1 , num2) => ({username : "shreyash"}) ; 
console.log(addtwo3(1 , 3))



