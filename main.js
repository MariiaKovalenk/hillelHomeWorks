function makeSumCalculator() {
        let totalSum = 0;
        return (a) => {
                totalSum += a;
                return totalSum;
        }
}
const sum = makeSumCalculator();
console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27


// function sum(a) {
//         this.totalsum = (this.totalsum === undefined ? 0 : this.totalsum);
//         this.totalsum = a + this.totalsum;
//         return this.totalsum;
// }
//
// console.log(sum(4)); // 4
//
// console.log(sum(6)); // 10
//
// console.log(sum(10)); // 20
//
// console.log(sum(7)); // 27