document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.querySelector('.login-container');
    const contentContainer = document.querySelector('.content-container');
    const keyTitle = document.getElementById('key-title');
    const keyDescription = document.getElementById('key-description');

    // Vordefinierte Zugangsdaten
    const freeUser = { username: 'Freeoption', password: 'Freeplan' };
    const paidUser = { username: 'Paidabo', password: 'Key1CA28F5948FBC63C9B63973B31F95' };

    // Überprüfung der Zugangsdaten
    if (username === freeUser.username && password === freeUser.password) {
        // Kostenloses Abo
        keyTitle.textContent = 'Pregrand';
        keyDescription.textContent = '(3 Times Key)';
        loginContainer.style.display = 'none';
        contentContainer.style.display = 'block';
    } else if (username === paidUser.username && password === paidUser.password) {
        // Bezahltes Abo
        keyTitle.textContent = 'Key1CA28F5948FBC63C9B63973B31F95';
        keyDescription.textContent = 'This is the golden key for the fly system module.';
        loginContainer.style.display = 'none';
        contentContainer.style.display = 'block';
    } else {
        // Ungültige Zugangsdaten
        errorMessage.style.display = 'block';
    }
});

// Download-Button-Funktionalität
document.getElementById('download-button').addEventListener('click', function() {
    const scriptContent = 'loadstring(game:HttpGet("https://github.com/Noel671/flyscript/blob/main/flyscript"))()';
    const blob = new Blob([scriptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'script.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
