conference_name="Codetribe Showcase"

document.getElementById("conference_name").innerHTML=conference_name

function clickMe(){
    console.log("Clicked")
}

function Add(x, y){
    document.getElementById('add').innerHTML =x+y
}
const minusBtn = document.getElementById('minus')
minusBtn.addEventListener('click' ,function(){
    difference = 20-8 ;
    document.getElementById('min').innerHTML = difference
} )

function DisplayText(){
    let txt = document.getElementById("myInput").value 
    document.getElementById("txt").innerHTML = txt
}

//PA0303

function ValidateForm(){
    const name = document.getElementById("naam").value
    const age = document.getElementById("age").value
    const email = document.getElementById("email").value
    if (naam.length >= 3){
    alert("It works")
    }else{
        alert("Name must contain at least 3 characters")
    }
    if (age>=18){
        alert("You are within the age range")
    }else{
        alert("you must be 18 or older")
    }
    if (email== "") {
        alert("Please ensure you dont leave the email fiekd empty");
    }
    if (IntersectionObserver.length === 0){
        alert("Please select at least one conference interest")
    }
}

//PA0401 - Retrieve data from an Api

const apiUrl="https://randomuser.me/api/?results=6"

 fetch(apiUrl).
 then(function(response){
    return response.json()
 }).then(function(data){
    console.log(data)
 })

 //PA0402
  speakers = {
    name:"MOJALEFA" ,
    email:"mojakes@gmail.com" ,
    age: 24 ,
    province:"Northern Cape" ,
    attendanceType:"Physical" ,
    topic:"Web development"
  }
  const ConvertObjectIntoJson = JSON .stringify(speakers)
  console.log(ConvertObjectIntoJson)

  speakerJson = {
    "name":"MOJALEFA" ,
    email:"mojakes@gmail.com" ,
    age: 24 ,
    province:"Northern Cape" ,
    attendanceType:"Physical" ,
    topic:"Web development"
  }
  const convertObjectIntoJson = JSON .stringify(speakers)
  console.log(ConvertObjectIntoJson)

  //PA0403 ---- Refactor code using JQUERY
  $.ajax({
    url:"https://randomuser.me/api/?results=6" ,
    method:"GET" ,
    success:function(data){
        console.log(data) 
    },
    error:function(error){
        console.log(error)
    }
    
  })

  //PA0404 --
  async function getSpeakers (){
     try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
     } catch (error) {
        console.log(error)
        
     }
  }
  
  //PA0405 ------ Using XMLHTTPREQUEST

  const xhr = new XMLHttpRequest()
  xhr.open(
    "GET",      //GET = retrieve information
                //where the request must be sent
                //true make the request asynchronous
    apiUrl,
               
    true,

  );
//handle the response
//Onload runs when the serve has responded
  xhr.onload = function(){
  // check whether the HTTP REQUEST WAS SUCCESFULL

  if (xhr.status === 200){
    console.log(
        "Raw JSON" ,
        xhr.responseText
    )
  }
  }

 //PA0406
 const ApiUrl="https://randomuser.me/api/?results=6"

 GET(apiUrl).
 then(function(response){
    return response.json()
 }).then(function(data){
    console.log(data)
 })