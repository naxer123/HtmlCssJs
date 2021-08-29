//Challenge 1 Your age in days



function ageIndays(){

    var  birthday   = prompt("what year you were born Good friend?");
    var  ageIndayss = (2020 - birthday) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ ageIndayss + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}


function reset(){
  
    document.getElementById("ageInDays").remove();

}