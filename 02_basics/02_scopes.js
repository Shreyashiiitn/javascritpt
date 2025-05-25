
{
    // this is called as scope  , scope of that if else 
}

let a = 10  ;
if(true){
    a = 100  ;
    const b = 20 ; 
    var c = 30 ; // that is why var is avoided 
}


console.log(a); // this cannot be printed  
// console.log(b);  cannot be printed because it is initialised insdie the scope 
console.log(c); //  this will output c as 30 



// node scope and browser scope is different , just keep in mind 

