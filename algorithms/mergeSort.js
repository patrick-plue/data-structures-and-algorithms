// left and right are already sorted
const merge = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else results.push(right.shift());
  }

  return results.concat(left, right);
};

const mergeSort = (nums) => {
  //base case, return if length 1 or 0

  if (nums.length < 2) {
    return nums;
  }
  // break into smaller arrays
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  console.log({ left });
  console.log({ right });

  // call mergeSort on left and right
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // return the merge of left and right
  return merge(sortedLeft, sortedRight);
};

// console.log(mergeSort([3, 4, 123, 4453, 23, 3, 121, 4, 34]));

// we split a long array into smaller arrays until we just have two arrays of 1 number
// then it is sorted per definition
// merge we take the two arrays and stitch them together

console.log(mergeSort([6, 5, 5, 3]));

/*

--> break them apart
        [6, 5]   und     [5, 3]

    [6]       [5]      [5]     [3]

--> stitch them together in a sorted way

        [5,6]            [3,5]


                [3,5,5,6]

*/
