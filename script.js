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

console.log(fibs(8));
