let modeTravail = document.getElementById("travail");
let modePause = document.getElementById("pause");
let bouton = document.getElementById("start");

let timer= document.getElementById("timer");

let tempsTravail = 25;
let tempsPause = 5;


let secondes = 0;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

bouton.addEventListener('click',() => {
    if(bouton.innerHTML === "↻"){
        bouton.innerHTML ="▶";
    }
    else{
        bouton.textContent = "↻";
        while(!(tempsTravail ==0 && secondes ==0)){
            if(secondes >0){
                secondes-=1;
            }
            else{
                secondes = 59;
                tempsTravail-=1;
            }
            timer.innerHTML= `<p> ${tempsTravail + " : " + secondes} </p>`;
            console.log(tempsTravail + " : " + secondes);
            setTimeout(1000);


            
        }
    }
})



