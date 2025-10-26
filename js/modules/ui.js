// ===== MODULO UI - Rendering e DOM Manipulation =====

import { mobilityExercises, categories, movements } from '../data/exercises.js';

// Renderizza singola card esercizio
export function renderExerciseCard(exercise) {
    return `
        <div class="mobility-card" data-id="${exercise.id}">
            <div class="card-header">
                <h3>${exercise.nome}</h3>
                <span class="difficulty-badge ${exercise.difficolta.toLowerCase()}">${exercise.difficolta}</span>
            </div>
            <div class="card-body">
                <p class="category">📍 ${exercise.categoria}</p>
                <p class="movement">🏋️ ${exercise.movimento.join(', ')}</p>
                <p class="duration">⏱️ ${exercise.durata}s</p>
                <p class="description">${exercise.descrizione}</p>
            </div>
            <div class="card-footer">
                <button class="btn-details" data-id="${exercise.id}">
                    Vedi dettagli
                </button>
            </div>
        </div>
    `;
}

// Renderizza tutte le card
export function renderAllExercises(exercisesToRender = mobilityExercises) {
    const container = document.querySelector('.mobility-section');

    if (!container) {
        console.error('❌ Container .mobility-section non trovato');
        return;
    }

    const exercisesHTML = exercisesToRender
        .map(exercise => renderExerciseCard(exercise))
        .join('');

    container.innerHTML = `
        <h2>Esercizi di Mobilità</h2>
        <div class="exercises-grid">
            ${exercisesHTML}
        </div>
    `;

    console.log('✅ Renderizzati', exercisesToRender.length, 'esercizi');
}

// Renderizza bottoni filtri
export function renderFilterButtons() {
    const filterContainer = document.querySelector('.filter-container');

    if (!filterContainer) return;

    // Filtri per categoria
    const categoryHTML = categories.map(cat => `
        <button class="filter-btn" data-filter="category" data-value="${cat}">
            ${cat}
        </button>
    `).join('');

    filterContainer.innerHTML = `
        <div class="filter-group">
            <h3>Categoria</h3>
            ${categoryHTML}
        </div>
    `;
}

// Aggiorna contatore esercizi
export function updateExerciseCount(count) {
    const counter = document.querySelector('.exercise-count');
    if (counter) {
        counter.textContent = `${count} esercizi`;
    }
}

console.log('✅ UI module caricato');