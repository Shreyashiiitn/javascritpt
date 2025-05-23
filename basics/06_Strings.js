// 'string' / "string"
// can be written in any of the format 

const name = "shreyash" 
const repocount = 50 ; 

console.log(name + repocount + " value") ; // outdated syntax 

//  use bactics , use string intercolation 
console.log(`hello my name is ${name} , and my repo count is ${repocount}`);

const gamename = new String('shreyash') ; 
// string is the object so it gives 0-s , 1-h , this is the key value pair 

console.log(gamename.length) ; 

console.log(gamename.toUpperCase()); // orginal value is not changed since string is a primitive datatype 
console.log(gamename.charAt(3)); 

console.log(gamename.indexOf('r')) ; 

console.log(gamename.substring(0 , 5));


// ------------------>Trim and replace methods in string<-------------------------------//  
const newstringone = "      shreyash          " ; 
// we dont want this spaces , we dont have to save them in database 
console.log(newstringone) ; 
console.log(newstringone.trim()) ; 

// for eg , we got url , 
const url = "https://shreyash.com/shreyash%20rajurkar" ; 
url.replace('%20' , '--') ;

console.log(url);


// convert string to array on basis of the dash 
const arraystring = "shreyash-vilas-rajurkar"
console.log(arraystring.split('-'))




