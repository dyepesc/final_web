const dice1 = document.querySelector('.mybtn');
var counter = 0;
var counterWin = 0;
var counterLost = 0;


dice1.addEventListener('click', Dice) 



const d = new Date();
document.querySelector(".day").innerHTML = d.toUTCString();


function Dice() {
    

    const listCoin = document.querySelector('.coin') 
    var randomVal1 = Math.floor(Math.random()*6+1);  //this for the random numbers between 1 and 6
    var randomVal2 = Math.floor(Math.random()*6+1);
    
    counter++;
    console.log("este es 1: "+counter)
    document.querySelector('.total').innerHTML = counter;
   

    if (randomVal1 == 1)
    {
        document.querySelector('.dice1').innerHTML = "<img src='dice-1.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
        
    }
    if (randomVal1 == 2)
    {
        document.querySelector('.dice1').innerHTML = "<img src='dice-2.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if (randomVal1 == 3)
    {
        document.querySelector('.dice1').innerHTML = "<img src='dice-3.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if (randomVal1 == 4)
    {
        document.querySelector('.dice1').innerHTML = "<img src='dice-4.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if (randomVal1 == 5)
    {
        document.querySelector('.dice1').innerHTML = "<img src='dice-5.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if (randomVal1 == 6)
    {
        document.querySelector('.dice1').innerHTML = "<img src='dice-6.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if (randomVal2 == 1)
    {
        document.querySelector('.dice2').innerHTML = "<img src='dice-1.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if (randomVal2 == 2)
    {
        document.querySelector('.dice2').innerHTML = "<img src='dice-2.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if (randomVal2 == 3)
    {
        document.querySelector('.dice2').innerHTML = "<img src='dice-3.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if (randomVal2 == 4)
    {
        document.querySelector('.dice2').innerHTML = "<img src='dice-4.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if (randomVal2 == 5)
    {
        document.querySelector('.dice2').innerHTML = "<img src='dice-5.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if (randomVal2 == 6)
    {
        document.querySelector('.dice2').innerHTML = "<img src='dice-6.svg' />"
        document.querySelector('h3').innerHTML = "You didn't win: Try Again!";
    }
    if ((randomVal1 == 6) && (randomVal2 == 6))
    {
        document.querySelector('h3').innerHTML = "You win: Try Again!";
        
    }


// const mydate = document.querySelector('.day-name');

// var date = new Date();
// var d  = date.getDate();
// var day = (d < 10) ? '0' + d : d;
// var m = date.getMonth() + 1;
// var month = (m < 10) ? '0' + m : m;
// var yy = date.getYear();
// var year = (yy < 1000) ? yy + 1900 : yy;
// document.querySelector('day').innerHTML = date
// document.write(day + "/" + month + "/" + year)

// function myFunc()  {
// 	var now = new Date();
// 	var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
// 	document.getElementById('day-name').innerHTML= time;
// }
// myFunc();
// setInterval(myFunc, 1000);
}

;