// Log di avvio
console.log("🚀 Fitness Tracker caricato!");

// dati di exempli per i mobility
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


// ===== TIMER WORKOUT =====

// Variabili del timer
let timerInterval = null;
let secondsRemaining = 0;
let isPaused = false;

// Elementi DOM
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const presetBtns = document.querySelectorAll('.preset-btn');

// Funzione per formattare il tempo (secondi → MM:SS)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Funzione per aggiornare il display
function updateDisplay() {
    timerDisplay.textContent = formatTime(secondsRemaining);
    console.log('⏱️ Timer aggiornato:', formatTime(secondsRemaining));
}

// Funzione per avviare il timer
function startTimer() {
    if (secondsRemaining === 0) {
        alert('⚠️ Seleziona prima un tempo dai bottoni sotto!');
        return;
    }

    console.log('▶️ Timer avviato');
    isPaused = false;
    startBtn.disabled = true;
    pauseBtn.disabled = false;

    timerInterval = setInterval(() => {
        secondsRemaining--;
        updateDisplay();

        // Timer finito
        if (secondsRemaining === 0) {
            stopTimer();
            alert('🎉 Tempo scaduto! Ottimo lavoro!');
            playSound(); // Suono (opzionale)
        }
    }, 1000); // 1000ms = 1 secondo
}

// Funzione per mettere in pausa
function pauseTimer() {
    console.log('⏸️ Timer in pausa');
    clearInterval(timerInterval);
    isPaused = true;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Funzione per fermare completamente
function stopTimer() {
    console.log('⏹️ Timer fermato');
    clearInterval(timerInterval);
    timerInterval = null;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Funzione per resettare
function resetTimer() {
    console.log('🔄 Timer resettato');
    stopTimer();
    secondsRemaining = 0;
    updateDisplay();
}

// Funzione suono (opzionale)
function playSound() {
    // Crea un beep usando Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = 800;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Event listeners per i bottoni
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Event listeners per i preset
presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const seconds = parseInt(btn.dataset.seconds);
        console.log(`⏱️ Preset selezionato: ${seconds} secondi`);

        // Reset e imposta nuovo tempo
        stopTimer();
        secondsRemaining = seconds;
        updateDisplay();

        // Feedback visivo
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 100);
    });
});

console.log('⏱️ Timer inizializzato!');