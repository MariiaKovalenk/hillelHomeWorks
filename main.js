function removeCharacters(str, arrToDelete) {
    let result = str
        .trim() // remove spaces
        .split('') // to array
        .filter(item => !arrToDelete.includes(item)) // remove items
        .join(''); // to string
    return result;
}

console.log(removeCharacters(" hello world", ['l', 'd'])); // "heo wor"


//'func(" hello world", ['l', 'd'])' поверне нам "heo wor"
// 1) цикли, повернення рядку
// 2) split replace join