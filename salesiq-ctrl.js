try {
 document.addEventListener('DOMContentLoaded', function() {
    // Create the new element
    var newElement = document.createElement('h1');
    newElement.className = 'bcheadb';
    newElement.textContent = 'betcart';

    // Find the logo container
    var logoContainer = document.querySelector('.logo-container');

    // Insert the new element inside the logo container
    if (logoContainer) {
        logoContainer.appendChild(newElement);
    }
});

} catch (error) {}
