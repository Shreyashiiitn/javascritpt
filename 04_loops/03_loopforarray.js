// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1 ,2 , 3, 4, 5] ; 

for(const num of arr){
    console.log(num);    
}

const string = "shreyash"
for(const it of string){
    console.log(`each char in string is ${it}`);
}

// Maps
const map = new Map() ; 
map.set('IN' , "India") ; 
map.set('PAK' , 'Pakistan') ; 

for(const [key , value] of map){
    console.log(`${key} and this is value ${value}`);
}


const myobject = {
    'game1' : "NFS" , 
    'game2' : "coc" , 
}