// ===== Exercise 1
// check a string is blank
function isBlank(str) {
  return str.trim() === '';
}

// Test cases
console.log(isBlank(""));           // true
console.log(isBlank("  hello  ")); // false
// ===== Exercise 2
//JavaScript function to convert a string into an abbreviated form.
function abbrevName(name) {
  const parts = name.split(' ');
  if (parts.length < 2) return name;    
    return `${parts[0]} ${parts[1][0]}.`;
}
// Test 
console.log(abbrevName("Ismail Andour"));   // --> "Ismail A."
console.log(abbrevName("Robin Singh"));// --> "Robin S."

// ===== Exercise 3
//JavaScript function which takes a string as an argument and swaps the case of each character.
function swapCase(str) {
  let swapped = '';     
    for (let char of str) {
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }           
    }
    return swapped;
}
// Test 
console.log(swapCase("Hello World")); // --> "hELLO wORLD"
console.log(swapCase("JavaScript"));   // --> "jAVAsCRIPT"
// ===== Exercise 4
//  function that determines whether an argument is omnipresent for a given array.A value is omnipresent if it exists in every subarray inside the main array.
function isOmnipresent(arr, val) {
  for (let subArr of arr) {
      if (!subArr.includes(val)) {
          return false;
      }
  }     
  return true;
}                               
// Test 
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]])); 
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); //➞ true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); //➞ false

// ===== Exercise 5
//Javascript code to color all diagonal table cells in red.
