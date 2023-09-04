// non comparison sorting
// only used in very specific circumstances

function getlongestNumber(array) {
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}

function getDigit(number, place, longestNumber) {
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string[place - mod] || 0;
}

function radixSort(array) {
  const longestNumber = getlongestNumber(array);
  const buckets = new Array(10).fill().map(() => []);

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift();
      buckets[getDigit(current, i, longestNumber)].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }
  return array;
}

console.log(
  radixSort([1, 2, 4, 5533, 1212, 32, 123124, 12, 43435435, 123, 34])
);
