function fibs(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let array = [0, 1];

  for (let i = 2; i < num; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array;
}

function fibsRec(num) {
  if (num <= 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let array = fibsRec(num - 1);

  let nextNum = array[array.length - 1] + array[array.length - 2];
  array.push(nextNum);

  return array;
}
// console.log(fibs(8));
console.log(fibsRec(8));
