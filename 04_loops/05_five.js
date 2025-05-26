const coding = ["js" , "ruby" , "javva" , "python" , "c++"] ; 

// call back function 
// are given as parameters when we use foreach loop types
// for this callback function dont give the name , for that function 
coding.forEach(function (item , index , arraylist){
    console.log(item , index , arraylist);
    
})

coding.forEach((ids) => {
    console.log(ids);                                                                                                                                                                                                                                                                                                                                                                                                                                             
})

function printme(item){
    console.log(item);
}

coding.forEach(printme)



// objects inside the array 
const myobject = [
    {
        language : "java" , 
        filename : ".js"
    } , 
    {
        language : "python" , 
        filename : ".py"
    } , 
    {
        language : "c++" , 
        filename : ".cpp"
    } , 
]

myobject.forEach((item) => {
    const {language , filename} = item ; 
    console.log(language);
    console.log(filename);
    
    
})