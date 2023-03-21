let nums = [3, 2, 1, 6, 4, 5, 6, 7];

let cities = ["Berlin", "Madrid", "Washington", "Florenz"];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

bubbleSort(nums);
bubbleSort(cities);
