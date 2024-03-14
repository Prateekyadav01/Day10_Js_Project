




let start = document.getElementById('Start');
let stop = document.getElementById('Stop');
let reset = document.getElementById('Reset');


let all = document.getElementById('all');
console.log(all);

let [hours, minutes, seconds] = [0,0,0];
let timer =null;
function stopWatch(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" +hours : hours;
    let m = minutes < 10? "0" +minutes : minutes;
    let s = seconds < 10? "0" +seconds : seconds;

    all.innerText= h + ":" + m + ":" + s ;
}
function watchStart(){
   if(timer!=null){
    clearInterval(timer);
   }
   timer = setInterval(stopWatch,1000);

   start.disabled = true;
   stop.disabled = false;
}

function watchStop(){
    clearInterval(timer);
    start.disabled = false;
    stop.disabled = true;
}


function watchReset(){
   clearInterval(timer);
   seconds = 0;
   minutes = 0;
   hours = 0;
   all.innerText = "00:00:00 ";
   start.disabled = false;
   stop.disabled = false;
}
