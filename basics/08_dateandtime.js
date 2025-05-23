let mydate = new Date() ; 
console.log(mydate.toString());
console.log(mydate.toLocaleString());



let mycreateddate = new Date(2023 ,  0 , 23) ; 
console.log(mycreateddate);


let newdate = new Date() ; 
console.log(newdate.getDate());
console.log(newdate.getMonth() + 1) ; // because follws 0 based indexing , that is why 
console.log(newdate.getFullYear());

