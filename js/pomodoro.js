let mode = document.getElementById("workMode"); // To switch styles between the work mode and the break mode
let button = document.getElementById("startButton"); // To change the icon of the button and interact with the start button
let timer = document.getElementById("timer"); // To print the new value of the timer at each changes


// The values of the differents parts of the chrono 
let workTime = 25;
let breakTime = 5;
let seconds = 0;


let chrono; // Stocks the setInterval function and stop it when a chrono ends 

let secondsPrint; // To have the display : HH /mm


// To change the value of the break and work chronos;
let timerChoice = document.getElementById("timerChoice");
let newWorkTime;
let newBreakTime;

if (localStorage) {
    newWorkTime = localStorage.getItem('newWorkTime');
    newBreakTime = localStorage.getItem('newBreakTime');
    if (newWorkTime != undefined && newWorkTime != null) {
        workTime = newWorkTime;
    }
    if (newBreakTime != undefined || newBreakTime != null) {
        breakTime = newBreakTime;
    }

}

// Display the timer as HH/mm 
function printTimer(time) {
    secondsPrint = seconds.toString().length < 2 ? '0' + seconds : seconds;
    timer.innerHTML = `${time + " : " + secondsPrint}`;
}
printTimer(workTime);


/* - Decrement the chrono of 1 second if in work mode and print it on the screen.

   - If the timer reaches 0:00, switches the mode to break mode and do all the changes that come with it, 
   putting the break chrono and clearing the chrono variable in order to stop the function from repeting itself.
   Starts repeting every second the breakChrono() function.
*/
function workChrono() {
    if (workTime != 0) {
        if (seconds > 0) {
            seconds -= 1;
        }
        else {
            seconds = 59;
            workTime -= 1;
        }

    }
    else {
        if (seconds > 0) {
            seconds -= 1;
        }
        else {
            if (newBreakTime == undefined || isNaN(newBreakTime)) {
                breakTime = 5;
            }
            else {
                breakTime = newBreakTime;
            }
            seconds = 0;
            mode.id = 'breakMode';
            document.body.style.backgroundColor = "lightgreen";
            clearInterval(chrono);
            chrono = setInterval(breakChrono, 1000);
        }

    }
    printTimer(workTime);
}


/* - Decrement the chrono of 1 second if in work mode and print it on the screen.

   - If the timer reaches 0:00, switches the mode to work mode and do all the changes that come with it, 
   putting the break chrono and clearing the chrono variable in order to stop the function from repeting itself.
   Starts repeting every second the workChrono() function.
*/


function breakChrono() {
    if (breakTime != 0) {
        if (seconds > 0) {
            seconds -= 1;
        }
        else {
            seconds = 59;
            breakTime -= 1;
        }
    }
    else {
        if (seconds > 0) {
            seconds -= 1;
        }
        else {
            if (newWorkTime == undefined || isNaN(newWorkTime)) {
                workTime = 25;
            }
            else {
                workTime = newWorkTime;
            }
            mode.id = 'workMode';
            document.body.style.backgroundColor = "rgb(248, 42, 6)";
            clearInterval(chrono);
            chrono = setInterval(workChrono, 1000);

        }

    }
    printTimer(breakTime);

}


// Reload the page 
function reset() {
    location.reload();
}


/*  - Asks the user to change the work and break chronos' values, 
    and changes it for all the cycles incoming until the page gets reload.
    
    - Print the new timer by calling the printTimer() function */

function chronoModifier() {
    newWorkTime = prompt("À combien de minutes souhaitez-vous initialiser votre temps de travail ?");
    if (!(newWorkTime == null || newWorkTime == "")) {
        if (isNaN(newWorkTime)) {
            alert("Ce n'est pas un nombre");
        }
        else {
            workTime = newWorkTime;
            localStorage.setItem('newWorkTime', newWorkTime);
        }
    }

    newBreakTime = prompt("À combien de minutes souhaitez-vous initialiser votre temps de pause ?")
    if (!(newBreakTime == null || newBreakTime == "")) {
        if (isNaN(newBreakTime)) {
            alert("Ce n'est pas un nombre");
        }
        else {
            breakTime = newBreakTime;
            localStorage.setItem('newBreakTime', newBreakTime);
        }
    }

    if (mode.id = 'workMode') {
        printTimer(workTime);
    }
    else {
        printTimer(breakTime);
    }
}


/*  Changes the icon of the start button when clicked :
    - If the icon is the start triangle : 
        1. Changes the icon to a restart arrow 
        2. Launch the chrono's decrementing
    - If the icon is the restart arrow :
        1. Changes the icon to the start triangle
        2. Call the function reset() to reload the page
*/

button.addEventListener('click', () => {
    if (button.innerHTML === `<em class="fa-solid fa-arrow-rotate-right fa-rotate-180"></em>`) {
        button.innerHTML = `<em class="fa-solid fa-play"></em>`;
        reset();

    }
    else {
        button.innerHTML = `<em class="fa-solid fa-arrow-rotate-right fa-rotate-180"></em>`;
        chrono = setInterval(workChrono, 1000);
    }
});


// When the settings button is clicked, call the chronoModifier() function to modify the chronos' value
timerChoice.addEventListener('click', () => {
    chronoModifier();
})


