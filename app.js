import { characters } from './data/characters.js';

document.addEventListener('DOMContentLoaded', function() {
    characters.forEach((character) => {
        // Crea una tarjeta de personaje (div)
        const characterCard = document.createElement('div');
        characterCard.className = 'character-card';
    
        // Crea una imagen para el personaje
        const imageElement = document.createElement('img');
        imageElement.className = 'character-image';
        imageElement.src = character.img; // Establece la ruta de la imagen
    
        // Crea un elemento de texto para el nombre del personaje
        const nameElement = document.createElement('div');
        nameElement.className = 'character-name';
        nameElement.textContent = character.name;
    
        // Crea un elemento de texto para los detalles del personaje
        const detailsElement = document.createElement('div');
        detailsElement.className = 'character-details';
        detailsElement.innerHTML = `HP: ${character.hp}<br>Armadura: ${character.arm}<br>Ataque: ${character.atk}<br>${character.ability}`;

        const showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'Ver Más';
        showMoreButton.className = 'show-more-button';

        detailsElement.appendChild(showMoreButton);
    
        // Agrega la imagen y los elementos de texto a la tarjeta del personaje
        characterCard.appendChild(imageElement);
        characterCard.appendChild(nameElement);
        characterCard.appendChild(detailsElement);
        
    
        // Agrega la tarjeta del personaje al contenedor
        const characterContainer = document.getElementById('characterContainer');
        characterContainer.appendChild(characterCard);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const showMoreButtons = document.querySelectorAll('.show-more-button');

    showMoreButtons.forEach((button) => {
        button.addEventListener('click', function() {
            // Ocultar todas las tarjetas de personajes
            const characterCards = document.querySelectorAll('.character-card');
            characterCards.forEach((card) => {
                card.style.display = 'none';
            });

            // Mostrar solo la tarjeta del personaje específico
            const characterCard = button.closest('.character-card');
            characterCard.style.display = 'block';

            // Ocultar el botón "Ver Más" después de mostrar la tarjeta
            button.style.display = 'none';
        });
    });
});
