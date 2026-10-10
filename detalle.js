const messages = [
    "¿Segura?",
    "¡Piénsalo otra vez!",
    "¿Y si dices que sí?",
    "¡Ándale! 🥺"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    const mensaje = encodeURIComponent("¡Dije que sí! ❤️😊");
    window.location.href = `https://wa.me/?text=${mensaje}`;
}