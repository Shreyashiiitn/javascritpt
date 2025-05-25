// single ton 
// object literals 
// how to declare objects with the help of constructor 

const tinderuser = new Object() ;  // this is the singleton obbject
const tinderuser1 = {} //  this is non singleton object 


tinderuser.id = "124" ; 
tinderuser.name = "sammy" ; 
tinderuser.isloggedin = false ; 

console.log(tinderuser);


// objects insdie the objects 
const regularuser = {
    name : "shreyash" , 
    email : "shreyash@gmai.com" , 
    fullname :  {
        userfullname : {
            firstname : "shreyash" , 
            lastname : "rajurkar" , 
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname);


// optional chaining , what if fullname does not exist then what to do 
console.log(regularuser.fullname?.userfullname?.lastname) ;



// How to combine two objects ? this is how we do it, we have 2 different objects 
const object1 = {
    1 : "A" , 
    2 : "B" , 
}
const object2 = {
    3 : "a" , 
    4 : "b" , 
}

const object3 = Object.assign({} , object1 , object2) ; // empty parenthesis , is given as the optional parameter , and this is the good practice
// assign copies the different object and returns the single target object 
console.log(object3) ; 

const obj3 = {...object1 , ...object2} ;  //  same spreading wala concept , we spreaded all the objects and then combined into the new object 


// When the value comes from the database 
const users = [
    {
        id : "1" , 
        email : "shreyash@gmail.com" , 
    } , 
    {
        id : "1" , 
        email : "shreyash@gmail.com" , 
    } ,
    {
        id : "1" , 
        email : "shreyash@gmail.com" , 
    } ,
    {
        id : "1" , 
        email : "shreyash@gmail.com" , 
    } ,
]


console.log(tinderuser) ; 
console.log(Object.keys(tinderuser)); 
console.log(Object.values(tinderuser)); 


console.log(Object.entries(tinderuser));




