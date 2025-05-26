const mynums = [1 ,  2 , 3] ; 

let intialvalue = 0 ; 
const mytotal = mynums.reduce((acc , current) => {
    console.log(acc);
    return acc + current
    
} , intialvalue);

const mytotal1 = mynums.reduce((acc, currvalue) => acc + currvalue , 1)

console.log(mytotal) ; 
console.log(mytotal1);
