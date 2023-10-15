 var hors = 0;
 var min = 0;
 var sec = 0;
 var msec = 0;
 var horsHeading = document.getElementById("hours1");
 var minHeading = document.getElementById("minutes1");
 var secHeading = document.getElementById("seconds1");
 var msecHeading = document.getElementById("milliseconds1");

 var interval;


 function timer(){
     msec++;
     msecHeading.innerHTML = msec;
     if(msec >= 100){
        sec++
        secHeading.innerHTML = sec
        msec = 0;
     }else if(sec >= 60){
        min++;
        minHeading.innerHTML =min
        sec = 0;
     }


 }
 function Start(){
     interval = setInterval(timer,10);
     document.getElementById("start").disabled = true;


 }

 function Stop(){
    clearInterval(interval);
    document.getElementById("start").disabled = false;

 }

 function Reset(){
    hors = "00";
    min = "00";
    sec = "00";
    msec = "000";
    horsHeading.innerHTML = hors;
    minHeading.innerHTML  =  min;
    secHeading.innerHTML  =  sec;
    msecHeading.innerHTML =  msec
    document.getElementById("start").disabled = false;

    Stop();
 }



var countdown;
var countdownDuration = 60;

function startCountdown() {
    clearInterval(countdown);
    const timerDisplay = document.querySelector('.countdown');
    const startButton = document.getElementById('Minbtn1');
    Minbtn1 .disabled = true;
    Hourbtn.disabled = true;
    Minbtn10.disabled =true;


    const endTime = Date.now() + countdownDuration * 1000;

    displayTimeLeft(countdownDuration);

    countdown = setInterval(() => {
        const secondsLeft = Math.max(Math.floor((endTime - Date.now()) / 1000), 0);

        if (secondsLeft === 0) {
            clearInterval(countdown);
            startButton.disabled = false;
            Hourbtn.disabled = false;
            Minbtn10.disabled = false;

        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    

    
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(remainingSeconds).padStart(2, '0');
}




var countdown;
var countdownDurationminutes10 = 60 * 10 ; 

function startCountminutes10() {
    clearInterval(countdown);
    
    const timerDisplay = document.querySelector('.countdown');
    const minbtn10 = document.getElementById('Minbtn10');
    minbtn10.disabled = true;
    Minbtn1.disabled = true;
    Hourbtn.disabled = true;


    

    var endTime = Date.now() + countdownDurationminutes10 * 1000;

    displayTimeLeft(countdownDurationminutes10);

    countdown = setInterval(() => {
        var secondsLeft = Math.max(Math.floor((endTime - Date.now()) / 1000), 0);

        if (secondsLeft === 0) {
            clearInterval(countdown);
            startButton.disabled = false;
            Hourbtn.disabled = false;
            Minbtn10.disabled =false;
        
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;
   document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(remainingSeconds).padStart(2, '0');
}


function resetbtn(){
 var resettime= document.getElementById("Resettime");
 var hoursreset = document.getElementById("hours");
 var minutesreset =  document.getElementById("minutes");
 var secondsreset = document.getElementById("seconds");

//  const timerDisplay = document.querySelector('.countdown');
 var resettime = document.getElementById('Resettime');
 Minbtn10.disabled = true;
 Minbtn1.disabled = true;
 Hourbtn.disabled = true;



 resettime = hoursreset.innerHTML
 if (resetbtn !== 0) {
    clearInterval(countdown);
    Minbtn10.disabled =false;
    Minbtn1.disabled = false;
    Hourbtn.disabled = false;
    hoursreset.innerHTML = "00"
    minutesreset.innerHTML ="00"
    secondsreset.innerHTML ="00"

}
}





var countdown;
var countdownDurationminutes = 60 * 60 ; 

function startCountminutes() {
    clearInterval(countdown);
    
    const timerDisplay = document.querySelector('.countdown');
    const startButton = document.getElementById('Hourbtn');
    Minbtn1 .disabled = true;
    Hourbtn.disabled = true;
    Minbtn10.disabled =true;

    var endTime = Date.now() + countdownDurationminutes * 1000;

    displayTimeLeft(countdownDurationminutes);

    countdown = setInterval(() => {
        var secondsLeft = Math.max(Math.floor((endTime - Date.now()) / 1000), 0);

        if (secondsLeft === 0) {
            clearInterval(countdown);
            startButton.disabled = false;
            Hourbtn.disabled = false;
            Minbtn10.disabled = false;


        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;


    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(remainingSeconds).padStart(2, '0');
}