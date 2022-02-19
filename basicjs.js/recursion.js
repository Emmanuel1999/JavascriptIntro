
//Use Recursion to Create a Countdown
// Only change code below this line
function countdown(n){
    if ( n < 1) {
      return [];
    } else {
      const countArray = countdown (n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  // Only change code above this line
  
  //Use Recursion to Create a Range of Numbers
  function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
  
    } else {
      var numbers = rangeOfNumbers (startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  
  }
  