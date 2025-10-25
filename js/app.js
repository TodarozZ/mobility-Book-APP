// Log di avvio
console.log("🚀 Fitness Tracker caricato!");

// Dati di esempio per i workout
const workouts = [
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

// Funzione per mostrare i workout
function mostraWorkouts() {
    console.log("📋 Caricamento workout...");

    const workoutSection = document.querySelector('.workout-section');

    // Crea HTML per ogni workout
    let workoutsHTML = '<h2>I Tuoi Workout</h2>';

    workouts.forEach((workout, index) => {
        console.log(`Workout ${index + 1}:`, workout);

        workoutsHTML += `
            <div class="workout-card">
                <h3>${workout.nome}</h3>
                <p><strong>Categoria:</strong> ${workout.categoria}</p>
                <p><strong>Serie:</strong> ${workout.serie}</p>
                <p><strong>Ripetizioni:</strong> ${workout.ripetizioni || workout.durata}</p>
                <p><strong>Difficoltà:</strong> ${workout.difficolta}</p>
            </div>
        `;
    });

    workoutSection.innerHTML = workoutsHTML;
    console.log("✅ Workout caricati con successo!");
}

// Esegui quando la pagina è caricata
document.addEventListener('DOMContentLoaded', mostraWorkouts);