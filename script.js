// ===== PASSWORD SETTINGS =====
const password = "vento1729"; // change this

function checkPassword() {
    const input = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    if (input === password) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");

        // AUTO START MUSIC
        const music = document.getElementById("bg-music");
        music.volume = 0.5; // soft sound
        music.play();

        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Wrong password. Try again.";
    }
}
