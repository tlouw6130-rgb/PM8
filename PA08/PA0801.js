//PA0801

function saveDataLocally(){
    const userName = document.getElementById("userName").value
    localStorage.setItem('userName' , userName)

}

//PA0804

function getDataLocally(){
    const getUserName = localStorage.getItem('userName')
    console.log(getUserName)
}
getDataLocally()


function removeDataLocally(){
    const removeUserName = localStorage.removeItem('userName')
    console.log(removeUserName)
}
removeDataLocally()

//PA0805
const registration = {
    name:"Tshepo" ,
    email:"tlouw2gmail.com"
}
const convertJavascriptToJson = JSON.stringify(registration)
localStorage.setItem('registration' , convertJavascriptToJson)

const saveData = localStorage.getItem(registration)

//convert JSON string to javascript object

const registrationData = JSON.parse(saveData)
console.log(registrationData)
