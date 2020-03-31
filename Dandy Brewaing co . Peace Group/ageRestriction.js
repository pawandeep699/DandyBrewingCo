const age = document.querySelector("#age");

const button = document.querySelector("#submit")
const show = document.querySelector("#display");
const clean = document.querySelector("#erase")
function call(num){

    num = age.value
    if(num>=18){
    var ut = "Click here to enter ";
    var open = ut.link("mainPage.html");

    document.getElementById("display").innerHTML =  open;

 
        
    }

    else if (num<18 && num>0){

       return document.getElementById("display").textContent =  "You are not Eligible ";
    }

    else{

        return document.getElementById("display").textContent = "Invalid Input";
    }
}

function  submit(){

    show.value = call();

}

function erase(){

    document.getElementById("display").textContent = null ;
  
}

function bob(){
    document.getElementById("clearInput").reset();
}

button.addEventListener("click",submit);
clean.addEventListener("click",erase);
