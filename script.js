//Prevent default
// let btn = document.querySelector(".button");
// btn=addEventListener("click", onclick, false);

//------------------------------------------------------------------------
//Excersize 1: check if entered number is odd or even
function checkEven(event) { 

    const num1 = Number(document.querySelector("#n1").value);
    
    if (num1 == 0) {
        document.querySelector("#result1").innerHTML="0 is special"
    } else if (num1 % 2 == 0) 
        document.querySelector("#result1").innerHTML="Even"
    else {
        document.querySelector("#result1").innerHTML="Odd"
    }
    event.preventDefault(); 
    
}
//------------------------------------------------------------------------
//Excersize 2: Check AVG
function checkAvg(event) {
    let num2 = Number(document.querySelector("#n2").value);
    let num3 = Number(document.querySelector("#n3").value);
    let num4 = Number(document.querySelector("#n4").value);

    document.querySelector("#result2").innerHTML = (num2 + num3 + num4)/3
    event.preventDefault(); 

}
//------------------------------------------------------------------------
//Excersize 3: Who won?
function whoWon(event) {
    let name1 =document.querySelector("#name1").value;
    let score1 = Number(document.querySelector("#score1").value);
    let name2 =document.querySelector("#name2").value;
    let score2 = Number(document.querySelector("#score2").value);

    if (score1 > score2) {
        document.querySelector("#result3").innerHTML = name1 + " is the winner"
    } else if (score2 > score1) {
        document.querySelector("#result3").innerHTML = name2 + " is the winner"
    } else if (score2 = score1){
        document.querySelector("#result3").innerHTML = "its a tie"   
    }
    event.preventDefault();

}
//------------------------------------------------------------------------
//Excersize 4: Time
function checkTime(event) {
    let time = Number(document.querySelector("#time").value);

    if (5 >= time || time <= 11) {
        document.querySelector("#result4").innerHTML = "Good Morning!" 
    } else if (12 >= time || time <= 17){
        document.querySelector("#result4").innerHTML = "Good After-noon!" 
    }else if (18 >= time || time <= 23){
        document.querySelector("#result4").innerHTML = "Good Evening!" 
    } else {
        document.querySelector("#result4").innerHTML = "Good Night!" 
    }
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 5: Train operation cost
function train(event) {
    let num5 = Number(document.querySelector("#numOfWag").value);
    let radio = document.getElementsByName("radio");
    let salary = Number(document.querySelector("#salary").value);

    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked && radio[i].value =="Morning"){
            document.getElementById("result5").innerHTML
                = (((num5 * 120) * 6.60) * 0.17) - salary}
        else if(radio[i].checked && radio[i].value =="Noon"){
            document.getElementById("result5").innerHTML
                    = (((num5 * 108) * 6.60) * 0.17) - salary
        }
        else if(radio[i].checked && radio[i].value =="Evening"){
            document.getElementById("result5").innerHTML
                    = (((num5 * 84) * 6.60) * 0.17) - salary
        }
    } 
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 6: Toyota dealership
function toyota(event) {
    let carPrice = Number(document.querySelector("#price").value);
    let carPayment = Number(document.querySelector("#payment").value);
    let newPrice = Number((carPrice-(carPrice*0.05)))
    if (carPrice == 0 || carPayment == 0) {
        document.querySelector("#result6").innerHTML = "Please enter car's price"
        document.querySelector("#result6b").innerHTML = "Please enter number of payments"
    } else{
        document.querySelector("#result6").innerHTML = "Car price after discount: " + newPrice
        document.querySelector("#result6b").innerHTML = "Each Payment: " + (newPrice/carPayment)
    }
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 7: Taxi
function taxi(event) {
    let passengers = Number(document.querySelector("#passengers").value);
    let remaining = Number(passengers - 12)
    if (passengers >= 12) {
        document.querySelector("#result7").innerHTML = "Taxi can go, there are " + remaining + " passengers left"
        } else {
        document.querySelector("#result7").innerHTML = "Taxi should wait"
    }
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 8: Field trip 
function fieldTrip(event) {
    let students = Number(document.querySelector("#studNum").value);
    let security = Number(students / 30)
    let medic = Number(students / 30)
    let medKit = Number(students / 50)

    if (students > 0) {
        document.querySelector("#result8").innerHTML = "Number of guards needed: " + security
        document.querySelector("#result8b").innerHTML = "Number of medics needed: " + medic
        document.querySelector("#result8c").innerHTML = "Number of med kits needed: " + medKit
    } else {
        document.querySelector("#result8").innerHTML = "No one' coming to the trip?" 
    }
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 9: Thursday check
function checkThursday(event) {
    let foo = document.querySelector("#in").value;

    if (foo == "thursday" || foo == "Thursday" || foo == "5") {
        document.querySelector("#result9").innerHTML = "Thursday! Yay!"
    } else {
        document.querySelector("#result9").innerHTML = "Not thursday :("
    }
    
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 10: BMI
function checkBmi(event) {
    let bmi = Number(document.querySelector("#bmi").value);

    if (bmi <= 18) {
        document.querySelector("#result10").innerHTML = "Low BMI"
    } else if (bmi >= 25){
        document.querySelector("#result10").innerHTML = "High BMI"
    }else {
        document.querySelector("#result10").innerHTML = "Average BMI"
    }

    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 11: Correct
function whosCorrect(event) {
    let input = document.querySelector("#in2").value;

    if (input == "i am correct" || input == "I am correct") {
        document.querySelector("#result11").innerHTML = "He is correct"
    } else {
        document.querySelector("#result11").innerHTML = "He is NOT correct"
    }

    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 12: Root of 100
function root(event) {
    
    document.querySelector("#result12").innerHTML = Math.sqrt(100)
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 13: Find the hidden button
function findButton(event) {
    document.querySelector("#hidden").style.display = "flex";
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 14: Open window
function openWin(event) {
    window.open("https://google.com")
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 15: Date & Time
function showDate(event) {
    const date = new Date();
    document.querySelector("#result15").innerHTML = date;

    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 16: Hello x times
function printHello(event) {
    let times= document.querySelector("#num6").value;

    if (times > 0 && times < 10) {
        document.querySelector("#result16").innerHTML = "Hello! ".repeat(times)
    } else {
        document.querySelector("#result16").innerHTML ="Please enter a number between 0 & 10"
    }

    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 17: Input x 10
function repeat(event) {
    let in3 = document.querySelector("#in3").value;
    let rep = 10;

    for (let i = 0; i <=10 ; i++) {
        document.querySelector("#result17").innerHTML = (in3 +" ").repeat(rep) 
        
    }

    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 18: how's bigger with alert
function whosBiggerAlert(event) {
    let num7 = document.querySelector("#num7").value;
    let num8 = document.querySelector("#num8").value;

    if (num7 > num8) {
        window.alert(num7 + " is bigger")
    } else if (num8 > num7){
        window.alert(num8 + " is bigger")
    } else {
        window.alert("The numbers are even!")
    }

    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 19: Tip calculator
function tipCalc(event) {
    let mealCost = Number(document.querySelector("#mealCost").value);
    let tip = Number(document.querySelector("#tip").value/100);
    let tipCost = Number(mealCost*tip);
    
    
    if (mealCost == 0 || tip == 0) {
        document.querySelector("#result19").innerHTML = "It's free!"
    } else {
        document.querySelector("#result19").innerHTML = "The tip is: " + tipCost
        document.querySelector("#result19b").innerHTML = "The cost with the tip: " + (mealCost + tipCost)
    }

    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 20: +1, -1, reset
function increment(event) {
    let n1 = Number(document.querySelector("#result20").innerHTML);
    n1++
    let resin = n1
    document.querySelector("#result20").innerHTML = resin
    event.preventDefault();
}
function decrement(event) {
    let n1 = Number(document.querySelector("#result20").innerHTML);
    n1--
    let resin = n1
    document.querySelector("#result20").innerHTML = resin
    event.preventDefault();
}
function resetFunc(event) {
    let n1 = Number(document.querySelector("#result20").innerHTML = 0);
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 21: quote
const quotes =[
   " Be yourself; everyone else is already taken. - Oscar Wilde ", 
    "Be the change that you wish to see in the world. - Mahatma Gandhi", 
    "Without music, life would be a mistake. - Friedrich Nietzsche ", 
    "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring. - Marilyn Monroe", 
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. - Albert Einstein", 
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "We are all in the gutter, but some of us are looking at the stars. - Oscar Wilde", 
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison", 
    "There is no greater agony than bearing an untold story inside you. - Maya Angelou", 
    "You can never get a cup of tea large enough or a book long enough to suit me. - C.S. Lewis"]

function showQuote(event) {
    let pick = Math.floor(Math.random()*(quotes.length));
    document.querySelector("#result21").innerHTML = quotes[pick]
}
document.addEventListener("load",showQuote());
//------------------------------------------------------------------------
//Excersize 22: Student Names
function studentNames(event) {
    const sNames = ["Joey", "Rachel", "Ross", "Monica", "Chandler", "Phoebe"]
    document.querySelector("#result22").innerHTML = sNames.join(', ')
    event.preventDefault();
}
//------------------------------------------------------------------------
//Excersize 23: Book List
const bList = [];
function bookList(event) {
    let bName = document.querySelector("#bookName").value;
    bList.push(bName)

    event.preventDefault();
}
function bShow(event) {
    document.querySelector("#result23").innerHTML = bList.join(', ')
    event.preventDefault();
}