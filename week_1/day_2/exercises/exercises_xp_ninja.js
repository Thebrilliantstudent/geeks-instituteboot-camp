// ===== Exercise 1
// random number between 1 and 100
function randomNum() {
  return Math.floor(Math.random() * 100) + 1;
}
console.log(randomNum());
// ===== Exercise 2
function capitalizeEvenOdd(str) {
  let evenCaps = '';
  let oddCaps = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            evenCaps += str[i].toUpperCase();
            oddCaps += str[i];
        } else {
            evenCaps += str[i];
            oddCaps += str[i].toUpperCase();
        }
    }
    return { evenCaps, oddCaps };
}
// Test
console.log(capitalizeEvenOdd("abcdefgh"));

// ===== Exercise 3
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man"));
console.log(isPalindrome("racecar"));
// ===== Exercise 4
function biggestNumberInArray(arrayNumber) {
  let max = arrayNumber[0];
  for (let i = 1; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > max) {
      max = arrayNumber[i];
    }
  }
  return max;
}
console.log(biggestNumberInArray([1, 2, 3, 4, 5]));

// ===== Exercise 5
function uniqueElements(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));
// ===== Exercise 6
// Create a function called createCalendar(year, month)
// The function should create a calendar for the given year/month.
// The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.

// function createCalendar(year, month) {
//   const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];
//   const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//     const firstDay = new Date(year, month - 1, 1);
//     const lastDay = new Date(year, month, 0);
//     let html = `<table border="1"><caption>${monthNames[month - 1]} ${year}</caption><tr>`;
//     for (let dayName of dayNames) {
//         html += `<th>${dayName}</th>`;
//     }
//     html += `</tr><tr>`;
//     let currentDay = firstDay;
//     let dayOfWeek = (firstDay.getDay() + 6) % 7;
//     for (let i = 0; i < dayOfWeek; i++) {
//         html += `<td></td>`;
//     }
//     while (currentDay <= lastDay) {
//         if (dayOfWeek === 7) {
//             html += `</tr><tr>`;
//             dayOfWeek = 0;
//         }
//         html += `<td>${currentDay.getDate()}</td>`;
//         currentDay.setDate(currentDay.getDate() + 1);
//         dayOfWeek++;
//     }
//     while (dayOfWeek < 7) {
//         html += `<td></td>`;
//         dayOfWeek++;
//     }
//     html += `</tr></table>`;
//     document.body.innerHTML += html;
// }
// createCalendar(2024, 6);
