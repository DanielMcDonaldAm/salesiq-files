try {
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Check if we can select the logo container
    var logoContainer = document.querySelector('.logo-container');

    if (logoContainer) {
        console.log('Logo container found');

        // Create the new element
        var newElement = document.createElement('h1');
        newElement.className = 'bcheadb';
        newElement.textContent = 'betcart';

        // Insert the new element inside the logo container
        logoContainer.appendChild(newElement);

        console.log('New element added');
    } else {
        console.log('Logo container not found');
    }
});


} catch (error) {}
