let mode = document.getElementById("workMode");
let button = document.getElementById("startButton");
let timer = document.getElementById("timer");

let workTime = 25;
let breakTime = 5;

let seconds = 0;


let chrono;

let secondsPrint;

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
            breakMode = 5;
            seconds = 0;
            mode.id = 'breakMode';
            document.body.style.backgroundColor = "lightgreen";
            clearInterval(chrono);
            chrono = setInterval(breakChrono, 1000);
        }

    }
    secondsPrint = seconds.toString().length < 2 ? '0' + seconds : seconds;
    timer.innerHTML = `${workTime + " : " + secondsPrint}`;

}


function timerDisplay (chrono) {
    let chronoString = chrono.toString()
    chronoString = chronoString.length < 2 ? '0' + chronoString : chronoString
    return chronoString
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
            workTime = 25;
            mode.id = 'workMode';
            document.body.style.backgroundColor = "rgb(173, 9, 9)";
            clearInterval(chrono);
            chrono = setInterval(workChrono, 1000);

        }

    }
    secondsPrint = seconds.toString().length < 2 ? '0' + seconds : seconds;
    timer.innerHTML = ` ${breakTime + " : " + secondsPrint} `;

}



function reset() {
    location.reload();
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