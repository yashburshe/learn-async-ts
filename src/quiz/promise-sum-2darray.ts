const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumOfARow(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (arr.length > rowIdx) {
          let sum = 0;
          console.log(`Computing sum of row ${rowIdx}`);
          for (let i = 0; i < arr[rowIdx].length; i++) {
            sum += arr[rowIdx][i];
          }
          resolve(sum);
        } else {
          reject("Invalid row index");
        }
      });
    });
  }
  
  let rowSumPromises: Promise<number>[] = [];
  
  for (let x = 0; x < array2D_1.length; x++) {
    rowSumPromises.push(sumOfARow(array2D_1, x));
  }
  
  async function calculateSum(numArr: number[][]) {
    if (numArr.length === 0) {
      throw "Array is empty";
    }
  
    let rowSumPromises: Promise<number>[] = [];
  
    for (let x = 0; x < array2D_1.length; x++) {
      rowSumPromises.push(sumOfARow(array2D_1, x));
    }
  
    try {
      const rowSums = await Promise.all(rowSumPromises);
      let sum = 0;
      console.log("Computing sum of all rows");
      rowSums.forEach((rowSum) => {
        sum += rowSum;
      });
      console.log(`Total sum: ${sum}`);
      return "done";
    } catch (err) {
      console.error(`Error: ${err}`);
      return "failed";
    }
  }
  
  calculateSum(array2D_1).then((status) => console.log(status));
  
  console.log("end main thread");
  