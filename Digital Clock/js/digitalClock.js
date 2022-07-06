function digitalClock(){
    let clockTime = new Date();
    let hours = clockTime.getHours();
    let minutes = clockTime.getMinutes();
    let seconds = clockTime.getSeconds();
    let session = "PM";
    
    // change to 24 hours to 12 hours
    if(hours > 12){
        hours = hours - 12;
    }
    
    // hours
    if(hours < 10) {
        hours = "0" + hours;
    }

    // minutes
    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    // seconds
    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    // session
    if(hours > 12){
        session = "AM";
    }


    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("session").innerHTML = session; 
}
setInterval(digitalClock, 500);