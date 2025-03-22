document.getElementById('button-change-color').addEventListener('click', ((arguments) => {
    const { colorToChange } = arguments;
    const textElement = document.getElementById('text-element');
    const textElementColor = textElement.style.color;
    textElement.style.color = textElementColor === colorToChange ? this.previousColor : colorToChange;
    this.previousColor = textElementColor;
}).bind({}, {colorToChange: 'yellow'}));