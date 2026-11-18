// Greeting ikut waktu
var hour = new Date().getHours();
var greet = "Good night 🌙";
if (hour < 12) { greet = "Good morning ☀️"; }
else if (hour < 18) { greet = "Good evening 🌸"; }
document.getElementById("greeting").textContent = greet;

// Jam live
function updateClock() {
  var now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);

// Butang background music
var bgm = document.getElementById("bgm");
var musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
  if (bgm.paused) {
    bgm.play();
    musicBtn.textContent = "⏸️ Pause Music";
  } else {
    bgm.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
});