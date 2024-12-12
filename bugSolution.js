function foo(a, b) {
  // Handle null or undefined values using the nullish coalescing operator
  a = a ?? 0; 
  b = b ?? 0; 
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
console.log(foo(undefined, 2)); //2
console.log(foo(1, undefined)); //1