//Iterate with JavaScript While Loops
  // Setup
  const myArray = [];
  // Only change code below this line
  let i = 5;
  while (i >= 0) {
    myArray.push(i);
    i--;
  }
  
  //Iterate with JavaScript For Loops
  // Setup
  const myArray = [];
  // Only change code below this line
  for (let i = 1; i <= 5; i++) {
    myArray.push(i);
  }
  
  //Iterate Odd Numbers With a For Loop
  // Setup
  const myArray = [];
  // Only change code below this line
  for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
  }
  
  //Count Backwards With a For Loop
  // Setup
  const myArray = [];
  // Only change code below this line
  for (let i = 9; i > 0; i-= 2) {
    myArray.push(i);
  }
  
  //Iterate Through an Array with a For Loop
  // Setup
  const myArr = [2, 3, 4, 5, 6];
  // Only change code below this line
  let total = 0;
  for (let i = 0; i < myArr.length; i++) {
    console.log(total += myArr[i]);
  }
  
  //Nesting For Loops
  function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
    // Only change code above this line
    return product;
  }
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  
  //Iterate with JavaScript Do...While Loops
  // Setup
  const myArray = [];
  let i = 10;
  // Only change code below this line
  do {
    myArray.push(i);
    i++;
  } while (i < 10);
  
  //Replace Loops using Recursion
  function sum(arr, n) {
    // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum (arr, n - 1) + arr [n - 1];
  }
    // Only change code above this line
  }
  