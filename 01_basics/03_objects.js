
const mysymbol = Symbol("key1") ; 

const jsuser = {
    name : "shreyash" , 
    age : 20 , 
    location : "jaipur" , 
    email : "shreyash@google.com" , 
    [mysymbol] : "mykey1" , 
    "fullname" : "shreyash rajurkar" , 
    isloggedin : false ,
    lastloggedindays : ["monday" , "saturday"] , 
}
// key are given by us in the objects , name is treated as a string , it is assumed by the js engine 

// How to acces objects ? 
console.log(jsuser.age) ; 
console.log(jsuser.name) ; // one way to acces the keys in the object 

console.log(jsuser["email"]) ; // another way to access 
console.log(jsuser["fullname"]) ;
console.log(jsuser[mysymbol]) ;

jsuser.email = "shreyashraj712004@gmail.com" ; 
jsuser.greeting = function(){
    console.log("Hello js user , how are you  ? ");
}
jsuser.gretting2 = function(){
    console.log(`hello ${this.name} , how are you `) ; 
}

// how can we lock the values 
Object.freeze(jsuser) ; 

// when you have freeqed the object jsuser , changes will not be happen , i.e evenif you change nothing will be changed in the object , the values will not propogate in the objects 


// lets also add fuctions in the object 

console.log(jsuser.greeting); // will give as undefined 
console.log(jsuser.greeting()) ; 
console.log(jsuser.gretting2()) ;






