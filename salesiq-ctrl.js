try {
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Create the new element
        var newElement = document.createElement('h1');
        newElement.className = 'bcheadb';
        newElement.textContent = 'betcart';

        // Find the logo container
        var logoContainer = document.querySelector('.logo-container');

        // Insert the new element inside the logo container
        if (logoContainer) {
            logoContainer.appendChild(newElement);
        } else {
            console.warn('Logo container not found.');
        }
    } catch (error) {
        console.error('An error occurred while appending the new element:', error);
    }
});


} catch (error) {}
