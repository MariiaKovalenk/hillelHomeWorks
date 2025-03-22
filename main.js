document.getElementById('button-random-image').addEventListener('click', ((arguments) => {
    const imageElement = document.getElementById('image-random');
    imageElement.src = `images/download${Math.floor(Math.random() * 10) + 1}.jpg`;
}));