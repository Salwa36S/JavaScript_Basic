// Task 6: sumEvenNumbers (Easy)
// Add up all even numbers from 1 to n.
//
// - Use a for loop and an if.
// - sumEvenNumbers(6) = 2 + 4 + 6 = 12.

function sumEvenNumbers(n) {
  let even =0;
  for(let i =0; i<= n ; i++){
    if(i%2 ==0 ){
      even +=i;
    }
  }
  return even;
  // your code
}

// Expected output:
console.log(sumEvenNumbers(0));   // 0
console.log(sumEvenNumbers(1));   // 0
console.log(sumEvenNumbers(6));   // 12
console.log(sumEvenNumbers(10));  // 30
console.log(sumEvenNumbers(15));  // 56
