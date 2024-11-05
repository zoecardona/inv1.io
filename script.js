const countdownDate = new Date("Jan 24, 2025 17:00:00").getTime(); // Inicio de la cuenta regresiva

function padNumber(number) {
    return number < 10 ? '0' + number : number;
}

const x = setInterval(function() {
    const now = new Date().getTime(); // Tiempo actual
    const distance = countdownDate - now; // Diferencia entre la fecha actual y la fecha del evento

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar resultado en los elementos HTML con ceros a la izquierda
    document.getElementById("days").innerHTML = padNumber(days) + " :";
    document.getElementById("hours").innerHTML = padNumber(hours) + " :";
    document.getElementById("minutes").innerHTML = padNumber(minutes) + " :";
    document.getElementById("seconds").innerHTML = padNumber(seconds);

    // Si el contador ha llegado a cero
    if (distance < 0) {
        clearInterval(x); // Detener el contador
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!"; // Mensaje al finalizar
    }
}, 1000); // Actualización cada segundo
