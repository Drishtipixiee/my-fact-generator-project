// script.js
document.addEventListener('DOMContentLoaded', () => {
    const funFacts = [
        "I'm a 19-year-old adventurous woman.",
        "I love snow and the serene beauty of snowy landscapes.",
        "I'm captivated by the majestic views of mountains.",
        "I enjoy the tranquility and awe that mountains provide from a distance."
    ];

    const funFactsList = document.getElementById('fun-facts-list');

    funFacts.forEach(fact => {
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        funFactsList.appendChild(listItem);
    });
});
