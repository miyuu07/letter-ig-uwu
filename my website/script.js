function openEnvelope() {
    document.querySelector(".envelope").classList.toggle("open");
}

/* 💙 FLOATING HEARTS */
for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";
    heart.style.fontSize = (15 + Math.random() * 15) + "px";

    document.body.appendChild(heart);
}