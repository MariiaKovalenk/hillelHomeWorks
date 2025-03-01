let number = Number (prompt("Enter your number"));

function isRight(inputNumber) {
    let result = true;

    if ( inputNumber <= 1) {
        result = false;
    }

    for (let i = 2; i < inputNumber; i++) {
        if (inputNumber % i === 0) {
            result = false;
            break;
        }
    }

    return result;
}
console.log(isRight(number));

//(простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
// 3 - i=2; 2 <= 3 (true); 2++ - 3 % 2 = 1(false); output: -;
// 3 - i=3; 3 < 3 (false);