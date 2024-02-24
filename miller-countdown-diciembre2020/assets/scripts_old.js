var countDownDate = new Date("Jun 15, 2021 19:59:59").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    document.getElementById("demo1").innerHTML = days;

    document.getElementById("demo2").innerHTML = hours;

    document.getElementById("demo3").innerHTML = minutes;

    document.getElementById("demo4").innerHTML = seconds;
    
    // Countdown terminado
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Expirado";
    }
}, 1000);