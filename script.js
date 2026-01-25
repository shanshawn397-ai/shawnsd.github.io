// ===== PASSWORD SETTINGS =====
const password = "family123"; // you can change this

function checkPassword() {
    const input = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    if (input === password) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Incorrect password. Please try again.";
    }
}

// ===== MUSIC CONTROL =====
function playMusic() {
    const music = document.getElementById("bg-music");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
