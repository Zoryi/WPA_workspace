// Vérifie si les Service Workers sont supportés par le navigateur
if ('serviceWorker' in navigator) {
    // Écoute l'événement 'load' de la fenêtre pour enregistrer le Service Worker
    window.addEventListener('load', () => {
        // Enregistre le Service Worker situé à la racine du site
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                // Succès de l'enregistrement
                console.log('Service Worker enregistré avec succès:', registration.scope);
            })
            .catch(error => {
                // Échec de l'enregistrement
                console.error('Échec de l\'enregistrement du Service Worker:', error);
            });
    });
}
