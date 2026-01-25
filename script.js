const password = "family123"; // Change this to whatever you want

function checkPassword() {
    const input = document.getElementById("password").value;
    if (input === password) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        document.getElementById("error-msg").textContent = "Incorrect password! Try again.";
    }
}
