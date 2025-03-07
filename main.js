const arr = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
            array.splice(i, 1);
            break;
        }
    }
}
removeElement(arr, 4);
console.log(arr);
