
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    localStorage.setItem("firstname", x)
    // var firstName= document.getElementById("fname").value;
    // document.getElementById("hello").innerText = firstName; 

  }
}

function guess(){

  const numberToGuess = Math.floor(Math.random() * 10) + 1;

 // let userNum = document.getElementById("num");
 //let userNum = document.getElementById('num').innerHTML

 var userNum = document.getElementById("num").value;
   
  guess = Number(userNum);

  if (guess === numberToGuess) {
    
      document.getElementById('message').innerHTML = "Congrats, you got it! You won 100$"; 
    
    } else {

     document.getElementById('message').innerHTML = "Sorry, You LOST !!! Guess again!";
     
    }
}



function message(){
  var name=localStorage.getItem("firstname");
  var welcomeMsg = "Welcome"+" "+name+"!!!"
  document.getElementById("welcome").innerHTML = welcomeMsg;
}