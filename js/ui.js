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

