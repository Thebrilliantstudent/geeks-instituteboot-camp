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
    const coinValues = [0.25, 0.10, 0.05, 0.01];
    let amountSum = 0
    for(let i = 0; i < amountOfChange.length; i++){
        amountSum += amountOfChange[i] * coinValues[i]
    }
    if(amountSum >= itemPrice)
        return true
    else
        return false
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));
// ===== Exercise 4
function hotelCost() {
    
    //  Calculate the total cost of hotel stay.
    //  Prompts user for number of nights and returns total cost at $140/night.
     
    while (true) {
        let nights = prompt("How many nights would you like to stay in the hotel?");
        
        // Check if user cancelled or didn't enter anything
        if (nights === null || nights.trim() === "") {
            alert("Please enter a valid number.");
            continue;
        }
        
        // Convert to number and validate
        nights = Number(nights);
        
        if (isNaN(nights) || nights <= 0) {
            alert("Please enter a valid number.");
            continue;
        }
        
        return nights * 140;
    }
}


function planeRideCost() {
    
    //   Calculate the cost of plane tickets based on destination.
    //   Returns $183 for London, $220 for Paris, $300 for all other destinations.
     
    while (true) {
        let destination = prompt("What is your destination?");
        
        // Check if user cancelled or didn't enter anything
        if (destination === null || destination.trim() === "") {
            alert("Please enter a valid destination.");
            continue;
        }
        
        // Check if it's a string (it always will be from prompt, but we validate it's not empty)
        if (typeof destination !== 'string') {
            alert("Please enter a valid destination.");
            continue;
        }
        
        destination = destination.trim().toLowerCase();
        
        if (destination === "london") {
            return 183;
        } else if (destination === "paris") {
            return 220;
        } else {
            return 300;
        }
    }
}


function rentalCarCost() {
    
    //   Calculate the cost of renting a car with 5% discount for rentals over 10 days.
    //   Car costs $40 per day.
     
    while (true) {
        let days = prompt("How many days would you like to rent the car?");
        
        // Check if user cancelled or didn't enter anything
        if (days === null || days.trim() === "") {
            alert("Please enter a valid number.");
            continue;
        }
        
        // Convert to number and validate
        days = Number(days);
        
        if (isNaN(days) || days <= 0) {
            alert("Please enter a valid number.");
            continue;
        }
        
        let total = days * 40;
        
        // Apply 5% discount if renting for more than 10 days
        if (days > 10) {
            total = total * 0.95;
        }
        
        return total;
    }
}


function totalVacationCost() {
    
    //   Calculate the total vacation cost by calling all cost functions.
    //   Displays breakdown of costs and returns the total.
     
    alert("Let's calculate your vacation costs!");
    
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();
    
    let total = hotel + plane + car;
    
    // Display the breakdown
    let message = "--- Vacation Cost Breakdown ---\n";
    message += `Hotel cost: $${hotel}\n`;
    message += `Plane tickets cost: $${plane}\n`;
    message += `Car rental cost: $${car}\n`;
    message += `Total vacation cost: $${total}`;
    
    alert(message);
    console.log(message);
    
    return total;
}


// Call the main function
totalVacationCost();
// // ===== Exercise 5        
       // 1. Retrieve the div and console.log it
        const mainDiv = document.getElementById('mainDiv');
        console.log('Main div:', mainDiv);
        
        // 2. Change the name "Pete" to "Richard"
        const allUls = document.querySelectorAll('ul');
        const firstUl = allUls[0];
        const firstLiOfFirstUl = firstUl.querySelector('li');
        firstLiOfFirstUl.textContent = 'Richard';
        
        // 3. Delete the second <li> of the second <ul>
        const secondUl = allUls[1];
        const secondLiOfSecondUl = secondUl.querySelectorAll('li')[1];
        secondLiOfSecondUl.remove();
        
        // 4. Change the name of the first <li> of each <ul> to your name (using a loop)
        const yourName = 'Ismail'; // Change this to your actual name
        allUls.forEach(ul => {
            const firstLi = ul.querySelector('li');
            firstLi.textContent = yourName;
        });
        
        

        
        // 1. Add a class called student_list to both of the <ul>'s
        allUls.forEach(ul => {
            ul.classList.add('student_list');
        });
        
        // 2. Add the classes university and attendance to the first <ul>
        firstUl.classList.add('university', 'attendance');
        
        
     
        
        // 1. Add a "light blue" background color and some padding to the <div>
        mainDiv.style.backgroundColor = 'lightblue';
        mainDiv.style.padding = '20px';
        
        // 2. Do not display the <li> that contains the text node "Dan" (the last <li> of the first <ul>)
        const allLisInFirstUl = firstUl.querySelectorAll('li');
        allLisInFirstUl.forEach(li => {
            if (li.textContent === 'Dan') {
                li.style.display = 'none';
            }
        });
        
        // 3. Add a border to the <li> that contains the text node "Richard" (the second <li> of the <ul>)
        const allLisInSecondUl = secondUl.querySelectorAll('li');
        allLisInSecondUl.forEach(li => {
            if (li.textContent === 'Richard') {
                li.style.border = '2px solid black';
            }
        });
        
        // 4. Change the font size of the whole body
        document.body.style.fontSize = '18px';
        
        
        //  Bonus
        // If the background color of the div is "light blue", alert "Hello x and y" 
        // (x and y are the users in the div)
        const computedStyle = window.getComputedStyle(mainDiv);
        const bgColor = computedStyle.backgroundColor;
        
        // Convert "lightblue" to RGB to compare (lightblue = rgb(173, 216, 230))
        // Or we can check if it contains "lightblue" in the style attribute
        if (mainDiv.style.backgroundColor === 'lightblue') {
            // Get all li elements within the div
            const allLis = mainDiv.querySelectorAll('li');
            const users = [];
            
            allLis.forEach(li => {
                // Only add visible list items
                if (li.style.display !== 'none' && li.textContent.trim() !== '') {
                    users.push(li.textContent);
                }
            });
            
            // Remove duplicates
            const uniqueUsers = [...new Set(users)];
            
            if (uniqueUsers.length >= 2) {
                alert(`Hello ${uniqueUsers[0]} and ${uniqueUsers[1]}`);
            } else if (uniqueUsers.length === 1) {
                alert(`Hello ${uniqueUsers[0]}`);
            }
        }
    

// // ===== Exercise 6

// const navBar  = document.getElementById("navBar")
// navBar.setAttribute("id", "socialNetworkNavigation")

// const ul = document.querySelector("#socialNetworkNavigation ul")
// const addLi = document.createElement("li")
// const text = document.createTextNode("Logout")
// addLi.appendChild(text)
// ul.appendChild(addLi)
// console.log(ul);


// const firstLi = ul.firstElementChild;
// const lastLi = ul.lastElementChild;

// console.log(firstLi.textContent);
// console.log(lastLi.textContent);


// // ===== Exercise 7

// const allBooks = [
//     {
//         title: "Harry Potter",
//         author: "J.K. Rowling",
//         image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
//         alreadyRead: true
//     },
//     {
//         title: "The Alchemist",
//         author: "Paulo Coelho",
//         image: "https://covers.openlibrary.org/b/id/8278326-L.jpg",
//         alreadyRead: false
//     }
// ];

// const section = document.querySelector(".listBooks")

// for (let book of allBooks) {
//     const div = document.createElement("div")

//     const p = document.createElement("p")
//     p.textContent = `${book.title}  written by ${book.author}`

//     const img = document.createElement("img")
//     img.src = book.image
//     img.style.width = "100px"


//     if(book.alreadyRead === true)
//         p.style.color = "red"

//     div.appendChild(p)
//     div.appendChild(img)
//     section.appendChild(div)
// }


