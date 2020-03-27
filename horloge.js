const p = document.getElementById("local_time")
const sec_digit = document.getElementById("digitseconde");
const sec = document.getElementById("seconde");
const min = document.getElementById("minute");
const heure = document.getElementById("heure");
const center = document.getElementById("center");

setInterval(function(){
    let local_time = new Date()
    p.innerHTML = "Your local date: </br>" + local_time
}, 1000)


setInterval(function(){ 
    /* Milliseconds useful for analog seconds value*/
    let time_ms = new Date().getMilliseconds()
    let time_ratio_ms = time_ms / 999
    let ratio_ms = time_ratio_ms * 360


    /* Secondes analog*/
    let time_s = new Date().getSeconds()
    let ratio_ms_for_s = time_ratio_ms * (360/60)
    let time_ratio_s = time_s / 60
    let ratio_s = time_ratio_s * 360 + ratio_ms_for_s
    sec.style.transform = "translate(-50%, -100%) rotate(" + ratio_s + "deg)"

    /* Secondes digit*/
    let time_s_digit = new Date().getSeconds()
    let time_ratio_s_digit = time_s_digit / 60
    let ratio_s_digit = time_ratio_s_digit * 360
    console.log(ratio_s_digit)
    if(ratio_s_digit == 354){
        sec_digit.style.display = "none"
        center.style.animation = "bigger 800ms ease-in-out running"
    }
    else{
        sec_digit.style.display = "block"
        center.style.animation = "bigger 800ms ease-in-out paused"
    }
    sec_digit.style.transform = "translate(-50%, -100%) rotate(" + ratio_s_digit + "deg)"


    /* Minutes */
    let time_m = new Date().getMinutes()
    let ratio_s_for_m = time_ratio_s * 6
    let time_ratio_m = time_m / 60
    let ratio_m = time_ratio_m * 360 + ratio_s_for_m
    min.style.transform = "translate(-50%, -100%) rotate(" + ratio_m + "deg)"


    /* Heures */
    let time_h = new Date().getHours()
    let ratio_m_for_h = time_ratio_m * 30
    if(time_h <= 12){
        var time_ratio_h = time_h / 12
    }
    else{
        time_h -= 12
        var time_ratio_h = time_h / 12
    }
    let ratio_h = (time_ratio_h * 360) + ratio_m_for_h
    heure.style.transform = "translate(-50%, -100%) rotate(" + ratio_h + "deg)"
}, 15)
