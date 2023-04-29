let nums = [3, 2, 1, 6, 4, 5, 6, 7];

let cities = ["Berlin", "Madrid", "Washington", "Florenz"];

function bubbleSort(nums) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
}

bubbleSort(nums);
bubbleSort(cities);

module.exports = { bubbleSort };
