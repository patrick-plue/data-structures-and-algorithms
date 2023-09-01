//own implementation
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array.pop();
  const leftArray = array.filter((el) => el <= pivot);
  const rightArray = array.filter((el) => el > pivot);
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

function quickSortB(nums) {
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return sortedLeft.concat(pivot, sortedRight);
}

console.log(quickSortB([32, 121, 5, 3, 312, 1, 2, 34, 5, 6]));
