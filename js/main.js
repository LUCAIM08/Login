function InvioModulo() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    document.getElementById("ris").innerHTML = "Loggato come: " + username + " | Password: " + password
}

const sfondo = document.querySelector(".sfondo");

// Funzione per creare e animare i pallini
function creaPallino() {
  let pallino = document.createElement("div");
  pallino.className = "pallino";

  // Posizione iniziale casuale
  pallino.style.left = Math.random() * window.innerWidth + "px";
  pallino.style.top = Math.random() * window.innerHeight + "px";

  sfondo.appendChild(pallino);

  // Movimento automatico continuo
  function muoviPallino() {
    let nuovaX = Math.random() * window.innerWidth;
    let nuovaY = Math.random() * window.innerHeight;

    pallino.style.transition = `transform ${Math.random() * 5 + 5}s linear`; // Da 5 a 10 secondi di transizione
    pallino.style.transform = `translate(${nuovaX - pallino.offsetLeft}px, ${nuovaY - pallino.offsetTop}px)`;

    setTimeout(muoviPallino, Math.random() * 500);
  }

  muoviPallino();
}

for (let i = 0; i < 100; i++) {
  creaPallino();
}

// Effetto di movimento con il cursore
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".pallino").forEach(pallino => {
    let dx = e.clientX - pallino.offsetLeft;
    let dy = e.clientY - pallino.offsetTop;
    let distanza = Math.sqrt(dx * dx + dy * dy);

    if (distanza < 100) {
      let angolo = Math.atan2(dy, dx);
      pallino.style.transform += `translate(${Math.cos(angolo) * 30}px, ${Math.sin(angolo) * 30}px)`;
    }
  });
});