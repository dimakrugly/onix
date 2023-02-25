export const bubbleSort = (arr) => {
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i += 1) {
      if (arr[i].productData.price < arr[i + 1].productData.price) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    len -= 1;
  } while (swapped);
  return arr;
};
