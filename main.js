let N = Number (prompt("Enter your number")); // 40;
let i = 1;
while (i * i <= N && i <= 100) {
    console.log(i++);
}
// (1 * 1 <= N - True AND 1<= 100 - True) - True; output: 1; i(1) = 2;
// (2 * 2 <= N - True AND 2<= 100 - True) - True; output: 2; i(2) = 3;
// (3 * 3 <= N - True AND 3<= 100 - True) - True; output: 3; i(3) = 4;
// (4 * 4 <= N - True AND 4<= 100 - True) - True; output: 4; i(4) = 5;
// (5 * 5 <= N - True AND 5<= 100 - True) - True; output: 5; i(5) = 6;
// (6 * 6 <= N - True AND 6<= 100 - True) - True; output: 6; i(6) = 7;
// (7 * 7 <= N - False AND 7<= 100 - True) - True; output: 6; i(6) = 7;