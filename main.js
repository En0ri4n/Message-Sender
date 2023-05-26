
function sendMessage() {
    displayMessage("Message Envoyé !")
}

function displayMessage(message) {
    let successText = document.getElementById('success-message');
    successText.textContent = message
    if(successText.classList.contains('success-text'))
        successText.classList.remove('success-text')
    successText.classList.add('success-text')

}