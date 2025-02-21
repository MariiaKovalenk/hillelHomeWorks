let number = 45;
let string = "Hello World";
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;
// let undefinedValue;
let object = { name: "Anna", age: 25 };
let array = [1, 2, 3];
let func = function() { return "i`m function"; };
let symbol = Symbol("symbol");
let bigInt = BigInt(12345678901234567890);

console.log("number:", typeof number);
console.log("string:", typeof string);
console.log("boolean:", typeof boolean);
console.log("nullValue:", typeof nullValue); // "object"
console.log("undefinedValue:", typeof undefinedValue);
console.log("object:", typeof object);
console.log("array:", typeof array); // "object"
console.log("func:", typeof func);
console.log("symbol:", typeof symbol);
console.log("bigInt:", typeof bigInt);