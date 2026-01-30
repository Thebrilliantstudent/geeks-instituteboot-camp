var number = prompt("Enter a number : ");
while (number = isNaN(number) || number < 10) {
    number = prompt("Enter a number : ");
}
console.log("Thank you! You entered " + number);
