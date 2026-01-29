// ===== PASSWORD SETTINGS =====
const password = "vento1729"; // change this

function checkPassword() {
    const input = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    if (input === password) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");

       // 🎵 ESSENTIAL MUSIC PLAY
        const music = document.getElementById("bg-music");
        music.volume = 0.5;
        music.play().catch(err => {
            console.log("Audio play blocked:", err);
        });
    } else {
        error.innerText = "Wrong password 😕";
    }
}
