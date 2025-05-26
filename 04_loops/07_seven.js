// const coding = ["js" , "ruby" , "java" , "python" , "c++"] ; 

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item ; 
// })

// console.log(values) ; // will be returned undefined 
// // for each return nothing , it will be undefined 

// //  what if we havve to only return if there exist java in coding , how we will do this ? 
// // lets seee how this can be done 


const mynums = [1 , 2 , 3 , 4, 5 ,6 ,7,8,9 , 10] ; 
// filter we return something , and that will be stored somewhere 
const newnums = mynums.filter((num) => {
    return num > 5 
})

console.log(newnums);


const newnumsusingforeach = [] ; 
mynums.forEach((num) => {
    if(num >= 5){
        newnumsusingforeach.push(num) ; 
    }
})

console.log(newnumsusingforeach);



//+++++++++++++++++++++++++++ fliter exercies++++++++++++++++
const books = [
    {
        title : 'book1' ,
        published : '1234' ,
    } , 
    {
        title : 'book2' ,
        published : '34' ,
    } , 
    {
        title : 'book3' ,
        published : '12' ,
    } , 
]

const userbooks = books.filter((book) => {
    return book
})

console.log(userbooks);
