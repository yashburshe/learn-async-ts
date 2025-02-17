const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function negsPerRow(arr: number[][], rowIdx: number): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (arr.length > rowIdx) {
          const length = arr[rowIdx].filter((e) => e < 0).length;
          if (length > 0) {
            resolve(`[${arr[rowIdx].join(", ")}]`);
          }
        } else {
          reject("Invalid row index");
        }
      });
    });
  }
  
  let negsPerRowPromises: Promise<string>[] = [];
  
  for (let x = 0; x < array2D_3.length; x++) {
    negsPerRowPromises.push(negsPerRow(array2D_3, x));
  }
  
  Promise.any(negsPerRowPromises)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
  