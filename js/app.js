// ===== APP PRINCIPALE - Entry Point =====

// Import di tutti i moduli
import { mobilityExercises, categories } from './data/exercises.js';
import { renderAllExercises, renderFilterButtons } from './modules/ui.js';
import { initTimer } from './modules/timer.js';
import { openModal, closeModal, initModalListeners } from './modules/modal.js';

console.log('🚀 Mobility Tracker App - Inizializzazione...');

// Inizializzazione app
document.addEventListener('DOMContentLoaded', () => {
    console.log('📱 DOM caricato, inizializzo componenti...');

    // Renderizza UI iniziale
    renderAllExercises();
    renderFilterButtons();

    // Inizializza timer
    initTimer();

    // Inizializza modal
    initModalListeners();

    // Event delegation per bottoni "Vedi dettagli"
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-details')) {
            const exerciseId = e.target.dataset.id;
            openModal(exerciseId);
        }
    });

    // Event delegation per filtri
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            const filterType = e.target.dataset.filter;
            const filterValue = e.target.dataset.value;
            handleFilter(filterType, filterValue);

            // Aggiorna stato attivo bottoni
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });

    console.log('✅ App inizializzata con successo!');
    console.log('📊 Esercizi disponibili:', mobilityExercises.length);
});

// Gestione filtri
function handleFilter(type, value) {
    console.log(`🔍 Filtro applicato: ${type} = ${value}`);

    let filtered = mobilityExercises;

    if (type === 'category' && value !== 'All') {
        filtered = mobilityExercises.filter(ex => ex.categoria === value);
    }

    renderAllExercises(filtered);
}

console.log('✅ App module caricato');
