// function vowelcounts(){
//     let username = document.querySelector("#inputsection").value
//     let vowelcount = 0
//     for(i =0; i<username.length;i++){
//     const char = username.charAt(i).toLowerCase()
//     if(char ==="a"||char==="e"  || char=== "i"  || char === "0" || char === "u"){
//         vowelcount++
//     }

//     }
//     document.querySelector("#blankcontainer").textContent = `the number of vowel in your name is :${vowelcount}`


// }

 function vowelcounts(){
    let username = document.getElementById("inputsection").value
    let vowelcount = 0
    for(let i =0 ; i<username.length ; i++){
        let char = username.charAt(i).toLowerCase()
        
        if(char === "a"||char==="e"||char==="i"||char==="o"||char==="u"){
            vowelcount++
        }
        document.getElementById("blankcontainer").textContent =`the number of vowel in your name is ${vowelcount}`
        
    }


 }

















