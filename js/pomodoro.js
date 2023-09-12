let mode = document.getElementById("mode");
let button = document.getElementById("start");

let timer = document.getElementById("timer");

let workTime = 25;
let breakTime = 5;

let seconds = 0;





function chrono() {
    if (workTime != 0) {
        if (seconds > 0) {
            seconds -= 1;
        }
        else {
            seconds = 59;
            workTime -= 1;
        }
        
    }
    else{
        if(seconds >0){
            seconds -=1;
        }
        
    }
    timer.innerHTML = `<p> ${workTime + " : " + seconds} </p>`;

}

button.addEventListener('click', () => {
    if (button.innerHTML === "↻") {
        button.innerHTML = "▶";
    }
    else {
        button.textContent = "↻";
        setInterval(chrono, 1000);

    }
});