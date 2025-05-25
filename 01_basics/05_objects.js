// all about the objects and apis and all things 
// destructring of the objects 

// how the values come and how do we desstructure them 
const course = {
    coursename : "js in hindi" , 
    price : "999" , 
    courseinstructor : "shreyash" , 
}


console.log(course["price"]) ; 

const {coursename : name , price , courseinstructor } = course ;  // this is how the objects are desturctured 
console.log(courseinstructor) ; 
console.log(price) ;

console.log(name) ; 


// API's what are these ? 
// values from backend come in the format of json 
// this is json , but this is not the object , this is the proper structure of json ; 
// here keys and values both are strings 


// {
//     name : "shreyash" , 
//     "coursename" : "cp" , 
//     "price" : "free" , 

// }


