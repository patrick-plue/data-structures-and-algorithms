const { bubbleSort } = require("../bubblesort.js");

describe("bubblesort", () => {
  it("should sort an array; starting with the lowest number", () => {
    const testArray = [2, 5, 1, 3, 7];
    const expectedValue = [1, 2, 3, 5, 7];

    const result = bubbleSort(testArray);

    expect(result).toEqual(expectedValue);
  });

  it("should sort an array of cities with capital letters starting with the letter A", () => {
    let testArray = ["Berlin", "Madrid", "Washington", "Florenz"];
    const expectedValue = ["Berlin", "Florenz", "Madrid", "Washington"];

    const result = bubbleSort(testArray);

    expect(result).toEqual(expectedValue);
  });
});
