// ===== FUNZIONI HELPER UTILITY =====

// Formatta tempo in MM:SS
export function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Genera un ID unico
export function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

// Capitalizza prima lettera
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Aspetta X millisecondi (per animazioni)
export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('✅ Helpers module caricato');