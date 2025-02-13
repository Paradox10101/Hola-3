let messages = [
    "¿Estás segura?", 
    "Piénsalo bien...",
    "Aún estás a tiempo de cambiar de opinión. 👀",
    "¡Última oportunidad!",
    "No te arrepentirás... tu confía. 😌",
    "Si dices que no, me pondré muy triste...",
    "Me pondré muy, muy, muy triste...",
    "muy, muy, muy triste..."
];

let gifs = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2RucWMzMGVvYmFjZ3VlM20yZzA4dWNkZms5bTh1ZzB2NXdqbXd4MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif",    
];

let messageIndex = 0;
let gifIndex = 0;
let yesSize = 20; // Tamaño inicial del botón "Sí"
let noPosition = 0; // Posición inicial del botón "No"

function handleNoClick() {
    const noButton = document.querySelector(".no_button");
    const yesButton = document.querySelector(".yes-button");
    const gifImage = document.getElementById("cute-gif");

    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex];
        gifImage.src = gifs[gifIndex];

        messageIndex++;
        gifIndex = (gifIndex + 1) % gifs.length;
    }

    // Hacer crecer el botón "Sí"
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Si el botón "Sí" crece demasiado, mover el "No" y el GIF hacia abajo
    if (currentSize > 50) {
        moveDown += 30; // Ajusta cuánto baja
        noButton.style.transform = `translateY(${moveDown}px)`;
        gifImage.style.transform = `translateY(${moveDown}px)`; // Ahora el GIF también baja
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
