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
/*
arr1 = [2, 4, "5"];
arr2 = ["yes", "no", 2];
arr3 = [1, 2, 3, 4, 5, 6, "7"];
console.log(processArray(arr1));
console.log(processArray(arr2));
console.log(processArray(arr3));
console.log(arr1);
console.log(arr2);
console.log(arr3);
*/

//Task 2 
function formatArray(stringArr, numArr) {
    numbers = processArray(numArr);
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2  == 0) {
            stringArr[i] = stringArr[i].toLowerCase();
        } else {
            stringArr[i] = stringArr[i].toUpperCase();
        }
    }
    return stringArr;
}

//Tests 
/*
console.log(formatArray(["kofi","KOJO", "Ama", "Kweku", "John"],[1,2,3,4,5]));
console.log(formatArray(["kofi","KOJO", "Ama", "Kweku", "John"],[1,7,10,4,2]));
console.log(formatArray(["kofi","KOJO", "Ama", "Kweku", "John"],[1,2,17,4,5]));
*/

//Task 3
//They are exported so they can be used in userInfo.js
let originalNames = ["kofi","KOJO", "Ama", "Kweku", "John"];
let numberArray = [1,7,10,4,2]
let modifiedNames = formatArray(originalNames,numberArray); 


module.exports = {modifiedNames, originalNames}





