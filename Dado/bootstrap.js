function dice() {
    number = Math.floor(Math.random() * 6) + 1;
    document.getElementById("numero-aleatorio").textContent = number;
}