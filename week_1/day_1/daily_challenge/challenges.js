// ====== Daily Challenge 1
// Part I - Review about arrays
const people = ["Greg", "Mary", "Devon", "James"];  
people.shift(); // Remove "Greg" (Q1)
console.log(people);
people.splice(people.indexOf("James"), 1, "Jason"); // Replace "James" with "Jason" (Q2)
console.log(people);
people.push("ANDOUR ISMAIL"); // Add your name to the end (Q3)
console.log(people);
const peoplecopy = people.slice(1); //
console.log(peoplecopy); // Create a copy of the array with "Mary" and "Devon" (Q4)
peoplecopy.push("Foo"); // Add "Foo" to the beginning of the copied array (Q5)   
console.log(peoplecopy);
console.log(peoplecopy.indexOf("Foo"));
peoplecopy.length - 1; // Get the last element without removing it (Q6)
console.log(peoplecopy[peoplecopy.length - 1]);
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

// ====== Daily Challenge 2

// ====== Daily Challenge 3
