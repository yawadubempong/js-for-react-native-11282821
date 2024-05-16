const processArray = (arr) => {
  return arr.map((elem) => {
    try {
      //Ensure whole numbers
      Math.trunc(elem);
      if (elem % 2 == 0) {
        return elem ** 2;
      } else {
        return elem * 3;
      }
    
    } catch (error) {
      return elem;
    }
  });
};

//Test cases
arr1 = [2, 4, "5"];
arr2 = ["yes", "no", 2];
arr3 = [1, 2, 3, 4, 5, 6, "7"];
console.log(processArray(arr1));
console.log(processArray(arr2));
console.log(processArray(arr3));
console.log(arr1);
console.log(arr2);
console.log(arr2);
