// ===== Exercise 1
//Exercise 1 : Find the numbers divisible by 23
function displayNumbersDivisible(divisor) {
    let sum = 0;
    let numbers = [];

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbers.push(i);
            sum += i;
        }
    }

    console.log(`Numbers divisible by ${divisor}: ${numbers.join(' ')}`);
    console.log(`Sum: ${sum}`);
}
displayNumbersDivisible(23);
displayNumbersDivisible(45);
displayNumbersDivisible(3);

//  Exercise 2 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
const shoppingList = ["banana", "orange", "apple"]


function myBill() {
    let sum = 0
    for (let i of shoppingList){
        if (i in stock && stock[i] > 0){
            sum += prices[i]
            stock[i]--
        }
    }
    return sum
}
console.log('Total bill is : ' + myBill())
console.log('Updated stock is : ', stock);
//Exercise 3 : What’s in my wallet ?
function changeEnough(itemPrice, amountOfChange) {
    
}