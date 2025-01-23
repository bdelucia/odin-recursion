function mergeSort(array) {
  if (array.length === 1) return array;
  let middleIndex = array.length / 2;

  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex);

  let sortedLeftArray = mergeSort(leftArray);
  let sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArray, rightArray) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] > rightArray[j]) {
      mergedArray.push(rightArray[j]);
      j++;
    } else {
      mergedArray.push(leftArray[i]);
      i++;
    }
  }

  return mergedArray.concat(leftArray.slice(i)).concat(rightArray.slice(j));
}

console.log(mergeSort([5, 3, 1, 4, 2, 7, 1, 10, 4, 13]));
