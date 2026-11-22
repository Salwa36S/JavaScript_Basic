// Task 11: getDaysInMonth (Easy)
// Return the number of days in a month (ignore leap years).
//
// - Month is a number from 1 to 12. February has 28 days.
// - April, June, September and November have 30. The rest have 31.
// - Any other month number: return 0.

function getDaysInMonth(month) {
let days = 0;
  if (month <= 0 || month > 12) {
    days = 0;
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    days = 30;
  } else if (month == 2) {
    days = 28;
  } else {
    days = 31;
  }
  return days;
  }
  // your code


// Expected output:
console.log(getDaysInMonth(1));   // 31
console.log(getDaysInMonth(2));   // 28
console.log(getDaysInMonth(4));   // 30
console.log(getDaysInMonth(9));   // 30
console.log(getDaysInMonth(12));  // 31
console.log(getDaysInMonth(0));   // 0
console.log(getDaysInMonth(13));  // 0
