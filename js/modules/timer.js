// ===== MODULO TIMER =====

import { formatTime } from '../utils/helpers.js';

// State del timer
let timerInterval = null;
let secondsRemaining = 0;
let isPaused = false;

// Elementi DOM (inizializzati dopo)
let timerDisplay, startBtn, pauseBtn, resetBtn, presetBtns;

// Inizializza riferimenti DOM
export function initTimer() {
    timerDisplay = document.getElementById('timer');
    startBtn = document.getElementById('startBtn');
    pauseBtn = document.getElementById('pauseBtn');
    resetBtn = document.getElementById('resetBtn');
    presetBtns = document.querySelectorAll('.preset-btn');

    if (!timerDisplay || !startBtn || !pauseBtn || !resetBtn) {
        console.error('❌ Elementi timer non trovati nel DOM');
        return;
    }

    // Event listeners
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);

    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const seconds = parseInt(btn.dataset.seconds);
            setTimer(seconds);
        });
    });

    console.log('✅ Timer inizializzato');
}

// Imposta timer a X secondi
function setTimer(seconds) {
    stopTimer();
    secondsRemaining = seconds;
    updateDisplay();
    console.log(`⏱️ Timer impostato a ${seconds}s`);

    // Feedback visivo
    presetBtns.forEach(btn => {
        if (parseInt(btn.dataset.seconds) === seconds) {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 100);
        }
    });
}

// Aggiorna display
function updateDisplay() {
    if (timerDisplay) {
        timerDisplay.textContent = formatTime(secondsRemaining);
    }
}

// Avvia timer
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
            playSound();
        }
    }, 1000);
}

// Pausa timer
function pauseTimer() {
    console.log('⏸️ Timer in pausa');
    clearInterval(timerInterval);
    isPaused = true;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Stop timer
function stopTimer() {
    console.log('⏹️ Timer fermato');
    clearInterval(timerInterval);
    timerInterval = null;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Reset timer
function resetTimer() {
    console.log('🔄 Timer resettato');
    stopTimer();
    secondsRemaining = 0;
    updateDisplay();
}

// Suono di completamento
function playSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.frequency.value = 800;
        oscillator.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log('Audio non disponibile');
    }
}

console.log('✅ Timer module caricato');