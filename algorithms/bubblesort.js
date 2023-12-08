let nums = [3, 2, 1, 6, 4, 5, 6, 7, 1];

let cities = ["Berlin", "Madrid", "Washington", "Florenz"];

function bubbleSort(array) {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

console.log(bubbleSort(nums));
console.log(bubbleSort(cities));

module.exports = { bubbleSort };
