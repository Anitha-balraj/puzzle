var msg1=document.querySelector("#msg1");
var msg2=document.querySelector("#msg2");
var msg3=document.querySelector("#msg3");
let no_of_guess=0;
let guessed_num=[];
//secret number
let result=Math.floor(Math.random()*10);
console.log(result);

function play(){
    let user__result=document.querySelector("#guess").value;

    if(user__result<1 || user__result >10)
    {
        alert('Please Enter the number between 1 to 10');
    }
    else{
guessed_num.push(user__result);
no_of_guess=no_of_guess+1;

if(user__result > result){
    msg1.textContent="Your guess is low";
    msg2.textContent="No of guesses:" + no_of_guess;
    msg3.textContent="Previous Guessed Numbers:"+guessed_num;
}
else if(user__result < result){
    msg1.textContent="Your guess is near to the secret number";
    msg2.textContent="No of guesses:" + no_of_guess;
    msg3.textContent="Previous Guessed Numbers:"+guessed_num;

}
else if(user__result == result){
    msg1.textContent="You are the winner";
    msg2.textContent="The Secret number is:"+result;
    msg3.textContent="No of Guesses:" +no_of_guess+ "guesses"
}
    }
}








