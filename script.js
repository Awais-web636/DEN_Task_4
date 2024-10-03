// Feature detection example using querySelector
if ('querySelector' in document) {
    // This will run if the browser supports querySelector
    document.getElementById('clickMe').addEventListener('click', function () {
        const response = document.getElementById('response');
        // ES6 Template literals for modern browsers
        response.textContent = `Button clicked at ${new Date().toLocaleTimeString()}`;
    });
} else {
    // Fallback for browsers that don't support querySelector
    alert('Your browser is outdated and does not support modern JavaScript features.');
}

// Polyfill for older browsers if fetch or Promise is not supported
if (!window.Promise || !window.fetch) {
    document.write('<script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>');
    document.write('<script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0.0/dist/fetch.umd.min.js"></script>');
}
