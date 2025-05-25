// ()() in first () function definataion is written , and next () is to call that function

(function chai() {
    console.log("DB connected");
})() ; // we have to write that semicolan to eend that 

// global scope pollution can cause problem , so to get rid of this we use this iiffi
(() => {
    console.log("hellow world ")
})() ; 


((name) => {
    console.log(`${name} , is a good boy`)
})("shreyash") ; 