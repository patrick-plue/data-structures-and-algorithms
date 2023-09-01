//own implementation

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array.pop();
  console.log({ pivot });
  const leftArray = array.filter((el) => el <= pivot);
  console.log({ leftArray });
  const rightArray = array.filter((el) => el > pivot);
  console.log({ rightArray });

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort([9, 2, 63, 5, 4, 123, 444, 894, 1, -12, 434, 123]));

/* last element in the array is our pivot
 we devide the array into two
 "left array" -> elements that are smaller or equal to the pivot
"right" array -> elements that are bigger than our pivot
we call quicksort again on these arrays 
until they just have one element; than we return that array
at the end we concatenate the left array with the pivot and with the right array
*/
