// maps 
const mynums = [1 , 2 , 3 , 4, 5 ,6, 7 ,8,  9, 10] ;
// to add 10 to each of them 
// map is a callback function 

const newnums = mynums.map((num) => {
    return num + 10 ; 
})

console.log(newnums);


// chaining 
const newnums1 = mynums
.map((num) => num*10)
.map((num) => num + 1)
.filter((num) => num > 40)

console.log(newnums1);
