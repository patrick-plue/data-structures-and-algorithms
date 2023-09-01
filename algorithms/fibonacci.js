//recursive

function fibonacci(n) {
  if (n === 2 || n === 1) {
    return 1;
  } else if (n <= 0) {
    return 0;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

//loop
// a lot faster
function fibonacciLoop(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence[n];
}

console.log(fibonacci(70));
console.log(fibonacciLoop(70));
