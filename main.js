let arr = [true, 'Hello World', 4, 45, 6, false, 'Hi'];// Дано масив з елементами різних типів.

function sumNumbers(arr) { //створюємо функцію
    let sum = 0; // початкова сума чисел
    let count = 0;
    for (let i = 0; i < arr.length; i++) { // за допомогою циклу фільтруємо числа з масиву з різними елементами
        if (typeof arr[i] === "number") {
            count = count + 1;
            sum = sum + arr[i];
        }
    }
    return sum / count;
}
console.log(sumNumbers(arr));
// i = 0; 0 < 7 - True; 0 + 1; sum = 0 + numbers[0](4) = 4;
// i = 1; 1 < 7 - True; 1 + 1; sum = 4 + numbers[1](45) = 49;
// i = 2; 2 < 7 - True; 2 + 1; sum = 49 + numbers[2](6) = 55;


