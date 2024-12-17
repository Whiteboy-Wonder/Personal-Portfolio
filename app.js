function displayTime() {
    let timePara = document.getElementById("time");
    let time = new Date();
    let hour = time.getHours();
    let mins = time.getMinutes();
    let sec = time.getSeconds();
    timePara.innerHTML = hour + " : " + mins + " : " + sec;
}

setInterval(displayTime, 1000);