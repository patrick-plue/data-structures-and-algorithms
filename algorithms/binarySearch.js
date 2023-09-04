// just for already sorted data;

function binarySearch(array, item) {
  let high = array.length - 1;
  let low = 0;
  let count = 0;
  let middle;

  while (low <= high) {
    count++;
    console.log("binary", { steps: count });
    middle = Math.floor((high + low) / 2);
    let guess = array[middle];

    if (guess === item) {
      return middle;
    } else if (guess > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return middle;
}

const data = [
  "albert",
  "berta",
  "colin",
  "darius",
  "emil",
  "ferdinand",
  "gustav",
  "harry",
  "ismael",
  "jacob",
  "karl",
  "maya",
  "nana",
  "olga",
];

console.log(binarySearch(data, "berta"));
console.log(binarySearch(data, "nana"));
