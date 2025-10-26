// ===== DATI ESERCIZI MOBILITÀ =====

export const mobilityExercises = [
    {
        id: 1,
        nome: "Banded Ankle Distraction",
        categoria: "Ankles",
        movimento: ["Snatch", "Clean", "Squat"],
        durata: 90,
        difficolta: "Beginner",
        descrizione: "Migliora la dorsiflexion per squat più profondi e movimenti olimpici",
        videoId: "uwLM5yn_-S0", // Squat University
        istruzioni: [
            "Posiziona una banda elastica attorno alla caviglia anteriore",
            "Fai un affondo in avanti mantenendo il tallone a terra",
            "Spingi il ginocchio oltre le dita dei piedi",
            "Oscilla avanti e indietro per 60-90 secondi",
            "Ripeti sull'altra gamba"
        ]
    },
    {
        id: 2,
        nome: "Overhead Shoulder Stretch",
        categoria: "Shoulders",
        movimento: ["Snatch", "Overhead Squat", "Jerk"],
        durata: 60,
        difficolta: "Beginner",
        descrizione: "Aumenta la mobilità della spalla per posizioni overhead stabili",
        videoId: "quOu3RxDk8c", // The Ready State
        istruzioni: [
            "Sdraiati a pancia in giù con braccio esteso lateralmente",
            "Ruota il corpo lontano dal braccio esteso",
            "Mantieni la posizione per 2 minuti per lato",
            "Respira profondamente e rilassati nella posizione"
        ]
    },
    {
        id: 3,
        nome: "Hip Flexor Couch Stretch",
        categoria: "Hips",
        movimento: ["Clean", "Front Squat", "Snatch"],
        durata: 120,
        difficolta: "Intermediate",
        descrizione: "Allunga i flessori dell'anca per migliorare la posizione di front rack",
        videoId: "p9VwSrdAmN0", // MobilityWOD Kelly Starrett
        istruzioni: [
            "Posiziona un ginocchio contro un muro o divano",
            "L'altra gamba in affondo frontale a 90°",
            "Mantieni il busto eretto, attiva i glutei",
            "Spingi l'anca in avanti per aumentare lo stretch",
            "Mantieni per 2 minuti per lato"
        ]
    },
    {
        id: 4,
        nome: "Thoracic Extension on Foam Roller",
        categoria: "Thoracic",
        movimento: ["Snatch", "Overhead Squat", "Front Squat"],
        durata: 90,
        difficolta: "Beginner",
        descrizione: "Migliora l'estensione toracica per movimenti overhead e front rack",
        videoId: "0TRks5bBfCQ", // Squat University
        istruzioni: [
            "Sdraiati supino con foam roller sotto le scapole",
            "Mani dietro la testa per supporto",
            "Estendi la schiena sopra il roller",
            "Fai 10-15 ripetizioni lente",
            "Sposta il roller leggermente più in alto e ripeti"
        ]
    },
    {
        id: 5,
        nome: "Wrist Mobility Circles",
        categoria: "Wrists",
        movimento: ["Clean", "Front Squat", "Jerk"],
        durata: 60,
        difficolta: "Beginner",
        descrizione: "Prepara i polsi per la posizione di front rack",
        videoId: "CLjtSyuE11I", // WODprep
        istruzioni: [
            "Intreccia le dita delle mani",
            "Fai cerchi ampi con i polsi in entrambe le direzioni",
            "15 cerchi in senso orario, 15 antiorario",
            "Aumenta gradualmente l'ampiezza del movimento"
        ]
    }
];

export const categories = [
    "All",
    "Ankles",
    "Shoulders",
    "Hips",
    "Thoracic",
    "Wrists"
];

export const movements = [
    "All",
    "Snatch",
    "Clean",
    "Front Squat",
    "Overhead Squat",
    "Jerk"
];

// Funzione helper per trovare esercizio per ID
export function getExerciseById(id) {
    return mobilityExercises.find(exercise => exercise.id === id);
}

// Funzione helper per filtrare per categoria
export function getExercisesByCategory(category) {
    if (category === "All") return mobilityExercises;
    return mobilityExercises.filter(exercise => exercise.categoria === category);
}

// Funzione helper per filtrare per movimento
export function getExercisesByMovement(movement) {
    if (movement === "All") return mobilityExercises;
    return mobilityExercises.filter(exercise =>
        exercise.movimento.includes(movement)
    );
}

console.log('✅ Data module caricato:', mobilityExercises.length, 'esercizi');