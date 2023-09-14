let mode = document.getElementById("workMode");
let button = document.getElementById("startButton");
let timer = document.getElementById("timer");

let workTime = 25;
let breakTime = 5;

let seconds = 0;


let chrono;

let secondsPrint;


let timerChoice = document.getElementById("timerChoice");

let newWorkTime;
let newBreakTime;

function printTimer(time) {
    secondsPrint = seconds.toString().length < 2 ? '0' + seconds : seconds;
    timer.innerHTML = `${time + " : " + secondsPrint}`;
}

printTimer(workTime);
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
            if (newBreakTime == undefined) {
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
            if (newWorkTime == undefined) {
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



function reset() {
    location.reload();
}

function chronoModifier() {
    newWorkTime = prompt("À combien de minutes souhaitez-vous initialiser votre temps de travail ?");
    if (!(newWorkTime == null || newWorkTime == "")) {
        workTime = newWorkTime;
    }
    newBreakTime = prompt("À combien de minutes souhaitez-vous initialiser votre temps de pause ?")
    if (!(newBreakTime == null || newBreakTime == "")) {
        breakTime = newBreakTime;
    }
    if (mode.id = 'workMode') {
        printTimer(workTime);
    }
    else{
        printTimer(breakTime);
    }
}

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


timerChoice.addEventListener('click', () => {
    chronoModifier();
})


