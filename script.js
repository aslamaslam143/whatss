function sendToWhatsApp() {
    // Get the WhatsApp number and other form inputs
    let number1 = document.getElementById('number1').value;
    let number = number1; // The number entered by the user
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    // Construct the WhatsApp URL with encoded text
    let url = "https://wa.me/" + number + "?text=" +
        "Name: " + encodeURIComponent(name) + "%0a" +
        "Email: " + encodeURIComponent(email) + "%0a" +
        "Phone: " + encodeURIComponent(phone) + "%0a" +
        "Message: " + encodeURIComponent(message);

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(url, '_blank').focus();

    // Display confirmation message
    document.getElementById('messageSent').style.display = 'block';

    // Reset the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
    document.getElementById('number1').value = '';
}