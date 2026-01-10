const hours = document.querySelector(".hours");
const minutes = document.querySelector(".min");
const seconds = document.querySelector(".sec");

setInterval(runClock, 1000);

function runClock() {
    const time = new Date();

    const secFraction = time.getSeconds() / 60;
    const minFraction = (secFraction + time.getMinutes()) / 60;
    const hrFraction = (minFraction + time.getHours()) / 12;

    hours.style.setProperty('--rotation', hrFraction * 360);
    minutes.style.setProperty('--rotation', minFraction * 360);
    seconds.style.setProperty('--rotation', secFraction * 360);
}

runClock()