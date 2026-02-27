// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('service-worker.js')
            .then(function (registration) {
                console.log('Service Worker berhasil didaftarkan:', registration.scope);
            })
            .catch(function (error) {
                console.log('Service Worker gagal didaftarkan:', error);
            });
    });
}