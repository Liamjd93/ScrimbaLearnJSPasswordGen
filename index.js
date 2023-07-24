const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let symbols = false
let numbers = false
let length = 0
document.getElementById("alert-msg").hidden = true

function pwLength (){
    length = document.getElementById("pw-length").value
    alertElement = document.getElementById("alert")
    console.log(length)
    console.log(alertElement.childNodes.length)
    if (length < 15){
        document.getElementById("alert-msg").hidden = false
        console.log("less than 15")
        return
    }
    document.getElementById("alert-msg").hidden = true
    console.log("more than 15")
    return
}

function toggleSymbols (){
    return
}

function toggleNumbers (){
    return
}

function copyToClip(){
    return
}