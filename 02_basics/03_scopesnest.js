function one(){
    const username = "shreyash" ; 

    function two(){
        const website = "youtube"
        console.log(username) ; 
    }
    // console.log(website);     we cannot do this  , this is being accessed outside the scope that is why 
    two() ; 

}
one() ; 

