const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// 0-51 are letters
// 52-61 are numbers
// 62-90 are symbols

let available = {
    0: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    1: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    2: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"],
}

let numbers = false
let symbols = false
let length = 0

document.getElementById("alert-msg").hidden = true

function pwLength (){
    length = document.getElementById("pw-length").value
    alertElement = document.getElementById("alert")
    if (length < 15){
        document.getElementById("alert-msg").hidden = false
        return
    }
    document.getElementById("alert-msg").hidden = true
    return
}

function toggle(name, boolVar, btn){
    if (boolVar === false){
        boolVar = true
        btn.style.backgroundColor = "#A7F3D0"
        btn.style.color = "#064E3B"
        btn.innerText = "On"
        if (name === "symbols"){
            symbols = boolVar
            return
        }
        numbers = boolVar
        return
    }
    boolVar = false
    btn.style.backgroundColor = "#064E3B"
    btn.style.color = "#A7F3D0"
    btn.innerText = "Off"
    if (name === "symbols"){
        symbols = boolVar
        return
    }
    numbers = boolVar
    return
}
function toggleSymbols (){
    toggle("symbols", symbols, document.getElementById("symbols-btn"))
    return
}

function toggleNumbers (){
    toggle("numbers", numbers, document.getElementById("numbers-btn"))
    return
}

function generate(){
    let id = "pw1"
    if (length < 15){
        return
    }
    document.getElementById("pw1").innerText = ""
    document.getElementById("pw2").innerText = ""
    for (let i = 0; i < (length * 2); i++){
        if (i >= length){
            id = "pw2"
        }
        let char1 = Math.floor(Math.random() * 3)
        if (char1 == 1 && numbers === false){
            char1 = 0
        }
        if (char1 == 2 && symbols === false){
            char1 = 0
        }
        let pickNum1 = Math.floor(Math.random() * available[char1].length)
        document.getElementById(id).innerText += available[char1][pickNum1]
    }
    return
}

function copyToClip(){
    return
}