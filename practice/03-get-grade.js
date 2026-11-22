// Task 3: getGrade (Warm-up)
// Turn a score into a letter grade.
//
// - 90+ is "A", 80+ is "B", 70+ is "C", 60+ is "D", otherwise "F".
// - A score below 0 or above 100 gives "Invalid".

function getGrade(score) {
  let grade = ''
 if ( score < 0 || score > 100){
  grade = 'Invalid'
 } else if(score >= 90){
  grade = 'A'
 }
   else if(score >= 80){
  grade = 'B'
 }
   else if(score >= 70){
  grade = 'C'
 }
   else if(score >= 60){
  grade = 'D'
 }
   else {
  grade = 'F'
 }
 return grade
}

// Expected output:
console.log(getGrade(95));   // "A"
console.log(getGrade(90));   // "A"
console.log(getGrade(85));   // "B"
console.log(getGrade(72));   // "C"
console.log(getGrade(65));   // "D"
console.log(getGrade(30));   // "F"
console.log(getGrade(0));    // "F"
console.log(getGrade(101));  // "Invalid"
console.log(getGrade(-5));   // "Invalid"
