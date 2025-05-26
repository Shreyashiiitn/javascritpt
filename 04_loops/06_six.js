// objects inside the array 
// how to iterate over objects when we get it inside the array in the js 
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
    const {language , filename} = item ;  // this is called as desturcturing of the objects 
    console.log(language);
    console.log(filename);
})

myobject.forEach((item) => {
    // without desturcturing of the objects 
    console.log(item.language);
    console.log(item.filename);
})