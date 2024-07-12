document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("welcomeButton");
    button.addEventListener("click", function() {
        var messageContainer = document.getElementById("messageContainer");
        var message = document.createElement("p");
        message.textContent = "¡Bienvenido!";
        messageContainer.appendChild(message);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userName = `${user.name.first} ${user.name.last}`;
            document.getElementById('user-name').textContent = userName;
        })
        .catch(error => console.error('Error fetching user:', error));
});