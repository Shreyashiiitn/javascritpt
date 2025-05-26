const myobject = {
    js : 'javascript' , 
    cpp : 'c++' , 
    rb : 'ruby' , 
    swift : 'swift by apple'
}

for (const key in myobject) {
    console.log(`key for ${myobject[key]} is ${key}`);
}

