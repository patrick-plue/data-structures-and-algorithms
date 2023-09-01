function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i];
    console.log({ numberToInsert });
    let j;

    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      console.log("inner", { j });
      nums[j + 1] = nums[j];
      console.log("1", nums);
    }

    console.log({ j });
    console.log({ i });
    nums[j + 1] = numberToInsert;
    console.log("2", nums);
  }
  return nums;
}

insertionSort([4, 5, 7, 8, 6]);

/*
we start at index 1;
everything before is considered sorted
than we move through the array and store the current number
if the current number is smaller than the previous one 
we move the bigger number to the right
we repeat this until we found the spot were the current number is no longer smaller than the previous number
here we insert the stored number


move through until we find a smaller number
4, 5, 7, 8, 6
                store 6
                move number before 6 one position right (we copy the value to the new position)
4 , 5, 7, 8, 8
                compare stored number to next number left and do the same
4, 5, 7, 7, 8

4, 5, 6, 7, 8

*/
