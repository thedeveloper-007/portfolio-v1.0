/* let selectID = document.getElementById("test");
var buttonSelector = document.querySelector(".button");
function humanageOndogAges(){
    var dogAge = document.getElementById("ageOfdog").value;
    var humanAge = ((dogAge - 2) * 4) + 21;
    selectID.innerHTML = "Your dog is " + humanAge + " years old in human years!";
    selectID.style.background = "yellow";
    selectID.style.color = "black";
    selectID.style.height = "100px";
    selectID.style.display = "flex";
    selectID.style.justifyContent = "center";
    selectID.style.alignItems = "center";

} 
var checkMatch = document.getElementById("checkMatch");
function loveCalculator(){
    var firstEntry = document.getElementById("firstEntry").value;
    var secondEntry = document.getElementById("secondEntry").value;
    var firstOutPut = document.getElementById("firstOutPut");
    var secondOutPut = document.getElementById("secondOutPut");
    var icon = document.getElementById("icon");
    var percentageOutPut = document.getElementById("percentageOutPut");
    var numberOfMatch = Math.random();
    numberOfMatch = numberOfMatch * 90;
    numberOfMatch = Math.floor(numberOfMatch) + 10;
    
    var commentAbout = document.getElementById("commentAbout");
    if(numberOfMatch>65){
        commentAbout.style.visibility ="visible";
    }else{
        commentAbout.style.visibility ="hidden";
    }
    percentageOutPut.innerHTML = numberOfMatch + "%";
    firstOutPut.innerText = firstEntry;
    secondOutPut.innerText = secondEntry;
    icon.classList.add("activeShow");
}
console.log(numberOfMatch);
 */


var userSubmit = document.getElementById("resultSubmit");
var userInputReset = document.getElementById("resultReset");
var fullContainer = document.getElementById("dogAgeinHumanYears");
var showUserResults = document.getElementById("showingResults");
function dogAgeinHumanAge(){
    var userInput = document.getElementById("userInputdogAge").value; 
    var dogAgeCalculator = ((userInput - 2) * 4) + 21;

    if(userInput <= 0){

        showUserResults.classList.remove("showResult");
        showUserResults.style.visibility = "hidden";
       

    }else{
            showUserResults.classList.add("showResult");
            showUserResults.style.visibility = "visible";
    }
            showUserResults.innerHTML = "Your dog (🐕‍🦺) age in human years is " + dogAgeCalculator + " years old!";
}

var userInput = document.getElementById("userInputdogAge");
userInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        userSubmit.click();
    }
})

userInput.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace" || key === "Delete") {
        showUserResults.style.visibility = "hidden";
    }
});


/* JavaScript for Love Calculator */


var form = document.getElementById("loveCalcultor");
var loveResult = document.getElementById("displayResult");
var firstNameResult = document.getElementById("firstNameResult");
var secondNameResult = document.getElementById("secondNameResult");
var showPercentage  = document.getElementById("symbolResult");
var buttonForSubmit = document.getElementById("btn_one");
var buttonForReset = document.getElementById("btn_two");
var showQuote = document.getElementById("quote");

function resetForm(){
    form.reset();
    form.classList.add("show");
    buttonForSubmit.classList.add("show");
    form.classList.remove("hide");
    buttonForSubmit.classList.remove("hide");
    buttonForReset.classList.add("hide");
    loveResult.classList.add("hide")
    showQuote.classList.add("hide")

}
function submitMatch(){
    form.classList.add("hide");
    buttonForSubmit.classList.add("hide");
    buttonForReset.classList.remove("hide");
    loveResult.classList.add("show")
    loveResult.classList.remove("hide")

var randomLove = Math.random() * 100;
let result = Math.floor(randomLove) + 1;
showPercentage.innerHTML = result + "%"
var inputFirstName = document.getElementById("yourName").value;
var inputSecondName = document.getElementById("yourCrushName").value;

var userFirstChar = inputFirstName.slice(0,1);
var upperCase = userFirstChar.toUpperCase();
var lowarCase = inputFirstName.slice(1,inputFirstName.length);
var fullName = upperCase + lowarCase;

var secondUserFirstChar = inputSecondName.slice(0,1);
var secondUpperCase = secondUserFirstChar.toUpperCase();
var secondLowarCase = inputSecondName.slice(1,inputSecondName.length);
var secondFullName = secondUpperCase + secondLowarCase;

firstNameResult.innerHTML = fullName;
secondNameResult.innerHTML = secondFullName;
if(result > 70){
    showQuote.innerHTML = "You love each other like fevicol gule 🌹";
}if(result >= 30 && result <= 70){
    showQuote.innerHTML = "Your relationship need care 💕";
}
if(result <= 30){
 showQuote.innerHTML = "You love each other like water and oil 🙂"
}
}


/* let selectID = document.getElementById("test");
var buttonSelector = document.querySelector(".button");
function humanageOndogAges(){
    var dogAge = document.getElementById("ageOfdog").value;
    var humanAge = ((dogAge - 2) * 4) + 21;
    selectID.innerHTML = "Your dog is " + humanAge + " years old in human years!";
    selectID.style.background = "yellow";
    selectID.style.color = "black";
    selectID.style.height = "100px";
    selectID.style.display = "flex";
    selectID.style.justifyContent = "center";
    selectID.style.alignItems = "center";

} 
var checkMatch = document.getElementById("checkMatch");
function loveCalculator(){
    var firstEntry = document.getElementById("firstEntry").value;
    var secondEntry = document.getElementById("secondEntry").value;
    var firstOutPut = document.getElementById("firstOutPut");
    var secondOutPut = document.getElementById("secondOutPut");
    var icon = document.getElementById("icon");
    var percentageOutPut = document.getElementById("percentageOutPut");
    var numberOfMatch = Math.random();
    numberOfMatch = numberOfMatch * 90;
    numberOfMatch = Math.floor(numberOfMatch) + 10;
    
    var commentAbout = document.getElementById("commentAbout");
    if(numberOfMatch>65){
        commentAbout.style.visibility ="visible";
    }else{
        commentAbout.style.visibility ="hidden";
    }
    percentageOutPut.innerHTML = numberOfMatch + "%";
    firstOutPut.innerText = firstEntry;
    secondOutPut.innerText = secondEntry;
    icon.classList.add("activeShow");
}
console.log(numberOfMatch);
 */


var userSubmit = document.getElementById("resultSubmit");
var userInputReset = document.getElementById("resultReset");
var fullContainer = document.getElementById("dogAgeinHumanYears");
var showUserResults = document.getElementById("showingResults");
function dogAgeinHumanAge(){
    var userInput = document.getElementById("userInputdogAge").value; 
    var dogAgeCalculator = ((userInput - 2) * 4) + 21;

    if(userInput <= 0){

        showUserResults.classList.remove("showResult");
        showUserResults.style.visibility = "hidden";
       

    }else{
            showUserResults.classList.add("showResult");
            showUserResults.style.visibility = "visible";
    }
            showUserResults.innerHTML = "Your dog (🐕‍🦺) age in human years is " + dogAgeCalculator + " years old!";
}

var userInput = document.getElementById("userInputdogAge");
userInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        userSubmit.click();
    }
})

userInput.addEventListener('keydown', function(event) {
    const key = event.key; // const {key} = event; ES6+
    if (key === "Backspace" || key === "Delete") {
        showUserResults.style.visibility = "hidden";
    }
});


/* JavaScript for Love Calculator */


var form = document.getElementById("loveCalcultor");
var loveResult = document.getElementById("displayResult");
var firstNameResult = document.getElementById("firstNameResult");
var secondNameResult = document.getElementById("secondNameResult");
var showPercentage  = document.getElementById("symbolResult");
var buttonForSubmit = document.getElementById("btn_one");
var buttonForReset = document.getElementById("btn_two");
var showQuote = document.getElementById("quote");

function resetForm(){
    form.reset();
    form.classList.add("show");
    buttonForSubmit.classList.add("show");
    form.classList.remove("hide");
    buttonForSubmit.classList.remove("hide");
    buttonForReset.classList.add("hide");
    loveResult.classList.add("hide")
    showQuote.classList.add("hide")

}

function submitMatch(){
    form.classList.add("hide");
    buttonForSubmit.classList.add("hide");
    buttonForReset.classList.remove("hide");
    loveResult.classList.add("show")
    loveResult.classList.remove("hide")
    showQuote.classList.remove("hide")

// var randomLove = Math.random();
let result = Math.floor(Math.random() * (100 - 30) + 30);
showPercentage.innerHTML = result + "%"
var inputFirstName = document.getElementById("yourName").value;
var inputSecondName = document.getElementById("yourCrushName").value;

var userFirstChar = inputFirstName.slice(0,1);
var upperCase = userFirstChar.toUpperCase();
var lowarCase = inputFirstName.slice(1,inputFirstName.length);
var fullName = upperCase + lowarCase;

var secondUserFirstChar = inputSecondName.slice(0,1);
var secondUpperCase = secondUserFirstChar.toUpperCase();
var secondLowarCase = inputSecondName.slice(1,inputSecondName.length);
var secondFullName = secondUpperCase + secondLowarCase;

firstNameResult.innerHTML = fullName;
secondNameResult.innerHTML = secondFullName;
if(result > 80 ){
    showQuote.innerHTML = "You love each other like fevicol gule 🌹";
}if(result >= 40 && result <= 80){
    showQuote.innerHTML = "Your relationship need care 💕";
}
if(result <= 40){
 showQuote.innerHTML = "You love each other like water and oil 🙂"
}
}
var inputFirstName = document.getElementById("yourName");
var inputSecondName = document.getElementById("yourCrushName");
inputFirstName.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        buttonForSubmit.click();
    }
})
inputSecondName.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        buttonForSubmit.click();
    }
})


/* Leap Year Script */

var showleapYear = document.getElementById("showleapYear");

var btn_leapYear = document.getElementById("btn_leapYear")


function leapYearCheck(){
    let leapYearInput = document.getElementById("leapYearInput").value;
    if(leapYearInput % 4 === 0){
        inputOutputTrue();
       if(leapYearInput % 100 === 0){
           
            if(leapYearInput % 400 === 0){
                
                showleapYear.innerHTML = "<span class='tik'>This is a leap Year! ✔</span>";

  
            }else{
                showleapYear.innerHTML = "<span class='cross'>This is not a leap Year! ✖</span>";
                
            }
       }else{
           showleapYear.innerHTML = "<span class='tik'>This is a leap Year! ✔</span>";
           
       }
    }else{
        showleapYear.innerHTML = "<span class='cross'>This is not a leap Year! ✖</span>";
        inputOutPutFalse();
    }
   if(leapYearInput <= 0){
       
       showleapYear.innerHTML = "";
   }

}
    
    function showExplain(){
        var showExplanation = document.querySelector(".showExplanation");
        let leapYearInput = document.getElementById("leapYearInput").value;
        if(leapYearInput === ""){
            showExplanation.classList.remove("show")
            showleapYear.innerHTML = "";
        }
        if(leapYearInput > 0){
            showExplanation.classList.add("show")
        }
        
    }
    var toggleHidden = document.getElementById("checkbox");
    var toggleClass = document.getElementById("contentBox");
function checkUnchek(){
    toggleClass.classList.toggle("active");
}
    var trueLeapyear = document.querySelector(".leapYearTrue");
    var falseLeapyear = document.querySelector(".leapYearFalse");
function inputOutputTrue(){
    let leapYearInput = document.getElementById("leapYearInput").value;
    var lyt = document.getElementsByClassName("lyt");
    trueLeapyear.style.display = "block";
    falseLeapyear.style.display = "none";
    lyt[0].innerHTML = leapYearInput;
   lyt[1].innerHTML = leapYearInput;
   lyt[2].innerHTML = leapYearInput;
}
function inputOutPutFalse(){
    let leapYearInput = document.getElementById("leapYearInput").value;
    var lyf = document.getElementsByClassName("lyf");
    falseLeapyear.style.display = "block";
    trueLeapyear.style.display = "none";
    lyf[0].innerHTML = leapYearInput;
   lyf[1].innerHTML = leapYearInput;
   lyf[2].innerHTML = leapYearInput;
}

var leapYearInputKey = document.getElementById("leapYearInput");
leapYearInputKey.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        btn_leapYear.click();
    }
})

/* Fibonacci Generator */


function fibonacciGenerator(){
    var fn = document.getElementById("fibonacciInput").value;
    var result = document.getElementById("resultOfFibonacciNumberGenerator");
    var output = [];
    if(output === 1){
        output = [0];
    }else if(output === 2){
        output = [0,1];
    }else{
        output = [0, 1];
        for(var r = 2; r < fn; r++){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    result.innerHTML = output.slice(0,20) + "</br>" + output.slice(21, 40) + "</br>" + output.slice(41, 60);
    result.classList.toggle("showResult");
}
