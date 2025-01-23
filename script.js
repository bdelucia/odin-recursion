function fibs(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const result = [0, 1];

  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

function fibsRec(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const sequence = fibsRec(num - 1);

  const nextNumber =
    sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextNumber);

  return sequence;
}

console.log(fibs(8));
console.log(fibsRec(8));
