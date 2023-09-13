let mode = document.getElementById("mode");
let button = document.getElementById("startButton");

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
    timer.innerHTML = ` ${workTime + " : " + seconds} `;

}

button.addEventListener('click', () => {
    if (button.innerHTML === `<em class="fa-solid fa-arrow-rotate-right fa-rotate-180" style="color: #000000;"></em>`) {
        button.innerHTML = `<em class="fa-solid fa-play"></em>`;
    }
    else {
        button.innerHTML = `<em class="fa-solid fa-arrow-rotate-right fa-rotate-180" style="color: #000000;"></em>`;
        setInterval(chrono, 1000);

    }
});