 // ====== Exercices XP Gold
 //Exercise 1 : Divisible by three
   //Loop through the array above and determine whether or not each number is divisible by three.
   let numbers = [123, 8409, 100053, 333333333, 7];
   for (let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 3 === 0) {
           console.log(`${numbers[i]} is divisible by three.`);
       } else {
           console.log(`${numbers[i]} is not divisible by three.`);
       }
   }
   //Each time you loop console.log true or false.
   function istrue(){
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
           console.log(true);
       } else {
           console.log(false);
       }
     }
}
istrue();
//Exercise 2 : Attendance
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
//Prompt the student for their name.
let Studentname = prompt("Enter your  first name :");
console.log(`Student name is : ${Studentname}`);
//If the name is in the object, console.log the name of the student and the country they come from.
console.log(guestList[Studentname] ? `Student name is : ${Studentname} and the country they come from is : ${guestList[Studentname]}` : "Name not found in the guest list.");
//If the name is not in the object, console.log: "Hi! I'm a guest."
if (!guestList[Studentname]) {
    console.log("Hi! I'm a guest.");
}
//Exercise 3 : Playing with numbers
let age = [20,5,12,43,98,55];
//Console.log the sum of all the numbers in the age array.
let sum =0;
for(let i =0; i < age.length ; i++){
    sum += age[i];
}
console.log(sum);
//Console.log the highest age in the array.
console.log(Math.max(...age));



