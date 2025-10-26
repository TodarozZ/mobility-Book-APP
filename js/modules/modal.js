// ===== MODULO MODAL - Gestione popup dettagli esercizio =====

import { getExerciseById } from '../data/exercises.js';

let currentModal = null;

// Apri modal con dettagli esercizio
export function openModal(exerciseId) {
    const exercise = getExerciseById(parseInt(exerciseId));

    if (!exercise) {
        console.error('❌ Esercizio non trovato:', exerciseId);
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    if (!modal || !modalBody) {
        console.error('❌ Elementi modal non trovati nel DOM');
        return;
    }

    // Costruisci contenuto modal
    modalBody.innerHTML = `
        <h2>${exercise.nome}</h2>
        
        <div class="modal-meta">
            <span class="badge">${exercise.categoria}</span>
            <span class="badge">${exercise.difficolta}</span>
            <span class="badge">⏱️ ${exercise.durata}s</span>
        </div>
        
        <div class="video-container">
            <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/${exercise.videoId}"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        
        <div class="modal-content-text">
            <h3>Descrizione</h3>
            <p>${exercise.descrizione}</p>
            
            <h3>Movimenti correlati</h3>
            <p>🏋️ ${exercise.movimento.join(', ')}</p>
            
            <h3>Istruzioni</h3>
            <ol class="instructions-list">
                ${exercise.istruzioni.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;

    // Mostra modal
    modal.classList.remove('hidden');
    currentModal = exercise;

    console.log('📖 Modal aperto:', exercise.nome);
}

// Chiudi modal
export function closeModal() {
    const modal = document.getElementById('modal');

    if (modal) {
        modal.classList.add('hidden');
        currentModal = null;
        console.log('📖 Modal chiuso');
    }
}

// Setup event listeners per modal
export function initModalListeners() {
    // Click su bottone close
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Click su overlay
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    // Tasto ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && currentModal) {
            closeModal();
        }
    });

    console.log('✅ Modal listeners inizializzati');
}

console.log('✅ Modal module caricato');