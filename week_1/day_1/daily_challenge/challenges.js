
// ====== Daily Challenge 1
//  Exercise 1 : List of people
// Part I - Review about arrays
const people = ["Greg", "Mary", "Devon", "James"];  
people.shift(); // Remove "Greg" (Q1)
console.log(people);
people.splice(people.indexOf("James"), 1, "Jason"); // Replace "James" with "Jason" (Q2)
console.log(people);
people.push("ANDOUR ISMAIL"); // Add your name to the end (Q3)
console.log(people);
const peoplecopy = people.slice(1); //
console.log(peoplecopy); // Create a copy of the array with "Mary" and "Devon" (Q4)// Add "Foo" to the beginning of the copied array (Q5)   
console.log(peoplecopy);
console.log(peoplecopy.indexOf("Foo"));
console.log(peoplecopy[peoplecopy.length - 1]); // Get the last element without removing it (Q6)
peoplecopy.push("Last"); // Add variable Last to the end of the copied array the relation between the last element of the array and the length of the same array is that the length equal (the index of the last element - 1)(Q7)
console.log(peoplecopy);
console.log(peoplecopy.indexOf("Last")); 
//people.pop(); // Remove "James"
//people.unshift("Matt"); // Add "Matt" to the front
//people.push("YourName"); // Add your name to the end   
//console.log(people.indexOf("Mary")); // Find the index of "Mary"    
//const newPeople = people.slice(1, 3); // Create a new array with "Mary" and "Devon"
//console.log(newPeople);
//console.log(people.indexOf("Foo")); // Should return -1 since "Foo" is not in the array     
//const last = people[people.length - 1]; // Get the last element without removing it
//console.log(last);    
// Part II - Loops

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);     
} // Q8 : Print all the names using a for loop

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] !== "Devon") {
        break;
    }  
}// Q9 : Print all the names except "Devon" using a for loop

//  Exercise 2 : Your favorite colors
const colors = ["blue", "green", "red", "yellow", "black","white"]; // Q1 : Create an array called colors with your five favorite colors
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
} //Q2 Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
//Q3 Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number, Hint : create an array of suffixes to do the Bonus
const suffixes = ["st", "nd", "rd", "th", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

//  Exercise 3 : Repeat the question

let Usernumber = parseInt(prompt("Please enter your number:"));//Q1 Prompt the user for a number, Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
console.log(typeof(Usernumber));
console.log(`Your number is : ${Usernumber}!`);
while(Usernumber < 10) {
    let Usernumber = parseInt(prompt("Please enter a new number:"));
} //Q2 While the number is smaller than 10 continue asking the user for a new number.

// 🌟 Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log( 'First floor number is : '+  building.numberOfAptByFloor.firstFloor +' and the second floor number is : '+ building.numberOfAptByFloor.thirdFloor);
console.log('the name of the second tenant is : ' +building.nameOfTenants[1] +' and the number of rooms he has in his apartment is : '+ building.numberOfRoomsAndRent.dan[0]);
Sumofsarahanddavidrent = (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]);
console.log('Sum of Sarah and David\'s rent is : ' + Sumofsarahanddavidrent);
if(Sumofsarahanddavidrent > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log('Dan\'s rent has been increased to : ' + building.numberOfRoomsAndRent.dan[1]);
}else{
    console.log('Dan\'s rent is bigger than the sum of sarah and david\'s : ' + building.numberOfRoomsAndRent.dan[1]);
}
//🌟 Exercise 5 : Family
//Create an object called family with a few key value pairs.
const family = {
    father: ["John", 20],
       mother: ["Jane", 18],
       son: ["Junior", 5],
       daughter: ["Janie", 3],
   };    
//Using a for loop, console.log the keys of the object.
for (let member in family) {
    console.log(member);
}
for(let nameandage in family){
    console.log(family[nameandage]);
}
//Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
//Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
for (let key in details) {
    console.log(`${key} ${details[key]}`);
}
//Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
let societyName = "";
names.sort();
for (let i = 0; i < names.length; i++) {
    societyName += names[i][0];
}
console.log(societyName); //Console.log the name of their secret society. The output should be “ABJKPS” 
   // ====== Daily Challenge 2
// ====== Daily Challenge 3
