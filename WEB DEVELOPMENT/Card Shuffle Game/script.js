const cardsData = [
    "🍎", "🍌", "🍒", "🍓",
    "🍎", "🍌", "🍒", "🍓",
    "🍇", "🍉",
    "🍇", "🍉",
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(cardsData);

const rows = document.querySelectorAll(".card-row");
let cardIndex = 0;

rows.forEach((row) => {
    row.querySelectorAll(".card").forEach((card) => {
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">${cardsData[cardIndex]}</div>
                <div class="card-back">?</div>
            </div>
        `;
        cardIndex++;
    });
});



document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
        checkMatch();
    });
});

function checkMatch() {
    const flippedCards = document.querySelectorAll(".card.is-flipped");
    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        if (firstCard.querySelector(".card-front").textContent === secondCard.querySelector(".card-front").textContent) {
            setInterval(() => {
                firstCard.classList.add("is-matched");
                secondCard.classList.add("is-matched");
                firstCard.classList.remove("is-flipped");
                secondCard.classList.remove("is-flipped");
            }, 700);
        } else {
            setTimeout(() => {
                firstCard.classList.remove("is-flipped");
                secondCard.classList.remove("is-flipped");
            }, 500);
        }
    }
}