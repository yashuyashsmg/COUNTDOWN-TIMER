const newyears = '1 Jan 2023'

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countdown(){
    const newyearsdate = new Date(newyears);
    const currentdate = new Date();

    const totalseconds = (newyearsdate-currentdate) / 1000;

    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds / 3600)%24;
    const mins = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML =seconds;

}




countdown();
setInterval(countdown, 1000);