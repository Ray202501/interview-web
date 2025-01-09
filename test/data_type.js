const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1);
// Expected output: "symbol"

console.log(symbol2 === 42);
// Expected output: false

console.log(symbol3.toString());
// Expected output: "Symbol(foo)"

console.log(Symbol('foo') === Symbol('foo'));
// Expected output: false
console.log(typeof Symbol('foo') === "symbol");
// Expected output: true

let obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "cc";
obj.d = "dd";

// Symbols 在 for...in 迭代中不可枚举
for (let i in obj) {
  console.log(i); // logs keys "c" and "d"
}

// 当使用 JSON.stringify() 时，以 symbol 值作为键的属性会被完全忽略：
let result = JSON.stringify({ [Symbol("foo")]: "foo" });
console.log(result); // Expected output: {}
