// Images repertoire
const gallery = document.getElementById('gallery');

const items = [
    { name: 'T-Shirt', image: 'tshirt.jpg' },
    { name: 'Pajamas', image: 'pajamas.jpg' },
    { name: 'Pajamas Set 1', image: 'pset1.jpg' },
    { name: 'Pajamas Set 2', image: 'pset2.jpg' },
    { name: 'Regattas', image: 'regattas.jpg' },
    { name: 'Casuals', image: 'casuals.jpg' },
    { name: 'Casuals 2', image: 'casuals2.jpg' },
    { name: 'Robe', image: 'robe.jpg' },
    // Add more items as needed -
];

items.forEach(item => {
    const imgElement = document.createElement('img');
    imgElement.src = 'src/gallery/' + item.image;;
    imgElement.alt = item.name;
    gallery.appendChild(imgElement);
});

