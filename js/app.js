// Log di avvio
console.log("🚀 Fitness Tracker caricato!");

// dali di exempli per i mobility
const mobilitys = [
    {
        nome: "Push-ups",
        categoria: "Upper Body",
        serie: 3,
        ripetizioni: 15,
        difficolta: "Intermedio"
    },
    {
        nome: "Squats",
        categoria: "Lower Body",
        serie: 4,
        ripetizioni: 20,
        difficolta: "Principiante"
    },
    {
        nome: "Plank",
        categoria: "Core",
        durata: "60 secondi",
        serie: 3,
        difficolta: "Intermedio"
    }
];

// Funzione per mostrare i mobility
function mostramobilitys() {
    console.log("📋 Caricamento mobility...");

    const mobilitySection = document.querySelector('.mobility-section');

    // Crea HTML per ogni mobility
    let mobilitysHTML = '<h2>I Tuoi mobility</h2>';

    mobilitys.forEach((mobility, index) => {
        console.log(`mobility ${index + 1}:`, mobility);

        mobilitysHTML += `
            <div class="mobility-card">
                <h3>${mobility.nome}</h3>
                <p><strong>Categoria:</strong> ${mobility.categoria}</p>
                <p><strong>Serie:</strong> ${mobility.serie}</p>
                <p><strong>Ripetizioni:</strong> ${mobility.ripetizioni || mobility.durata}</p>
                <p><strong>Difficoltà:</strong> ${mobility.difficolta}</p>
            </div>
        `;
    });

    mobilitySection.innerHTML = mobilitysHTML;
    console.log("✅ mobility caricati con successo!");
}

// Esegui quando la pagina è caricata
document.addEventListener('DOMContentLoaded', mostramobilitys);