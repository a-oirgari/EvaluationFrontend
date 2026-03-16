const matchs = [
    {
        id: 1,
        equipe1: "FC VOID",
        equipe2: "Raja Club",
        date: "15/03/2025",
        heure: "20:00",
        stade: "Stade Mohammed V",
        prix: { tribune: 200, virage: 100, pelouse: 50 }
    },
    {
        id: 2,
        equipe1: "FC VOID",
        equipe2: "Wydad AC",
        date: "22/03/2025",
        heure: "18:00",
        stade: "Stade Mohammed V",
        prix: { tribune: 250, virage: 120, pelouse: 60 }
    },
    {
        id: 3,
        equipe1: "FC VOID",
        equipe2: "AS FAR",
        date: "05/04/2025",
        heure: "21:00",
        stade: "Stade Mohammed V",
        prix: { tribune: 300, virage: 150, pelouse: 80 }
    }
];




let reservationCount = 0;

const matchList = document.getElementById("matchList");
const matchSelect = document.getElementById("matchSelect");
const reservationCounter = document.getElementById("reservationCount");


matchs.forEach(match => {

    const card = document.createElement("div");
    card.innerHTML = `
<h3>${match.equipe1} vs ${match.equipe2}</h3>
<p>Date : ${match.date}</p>
<p>Heure : ${match.heure}</p>
<p>Stade : ${match.stade}</p>

<p>Prix :</p>
<ul>
<li>Tribune : ${match.prix.tribune} MAD</li>
<li>Virage : ${match.prix.virage} MAD</li>
<li>Pelouse : ${match.prix.pelouse} MAD</li>
</ul>

<button class="reserveBtn" data-id="${match.id}">
Réserver
</button>
`;

    matchList.appendChild(card);

});


const buttons = document.querySelectorAll(".reserveBtn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const matchId = this.dataset.id;
        matchSelect.value = matchId;
        document.getElementById("reservationForm").scrollIntoView({ behavior: "smooth" });

    });

});




document.getElementById("reservationForm").addEventListener("submit", function () {
        reservationCount++;
        reservationCounter.textContent = reservationCount;

    });