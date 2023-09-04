function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  const newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }
  return newArr;
}

console.log(selectionSort([3, 5, 1, 2, 7, 44, 2, 1, 333, 433, 23]));

// console.log([1, 2, 3, 4].slice(1));
