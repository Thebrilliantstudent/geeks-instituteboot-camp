// ===== Exercise 1
//using DOM colsole log h1 from html file
const h1Element = document.querySelector('h1');
console.log(h1Element);

const articleElement = document.querySelector('article');
const paragraphs = articleElement.getElementsByTagName('p');    
articleElement.removeChild(paragraphs[paragraphs.length - 1]); 
console.log(articleElement);       

const h2Element = document.querySelector('h2');
h2Element.addEventListener('click', function() {
    h2Element.style.backgroundColor = 'red';
});

const h3Element = document.querySelector('h3');
h3Element.addEventListener('click', function() {
    h3Element.hidden = true;
});

const boldbuton = document.getElementById('BoldButton');
boldbuton.addEventListener('click', function() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontWeight = 'bold';
    }   
});
//set the font size to a random pixel size between 0 to 100.
const hoverh1Element = document.querySelector('h1');
hoverh1Element.addEventListener('mouseover', function() {
    const randomSize = Math.floor(Math.random() * 101); // Generate a random number between 0 and 100
    hoverh1Element.style.fontSize = randomSize + 'px';
});

//When you hover on the 2nd paragraph, it should fade out 
const secondParagraph = paragraphs[1];
secondParagraph.addEventListener('mouseover', function() {
    secondParagraph.style.transition = 'opacity 0.5s'; // Add a transition effect
    secondParagraph.style.opacity = '0'; // Fade out the paragraph
});
// ===== Exercise 2
//1
const formelement = document.querySelector('form');
console.log(formelement);

const inputselementbyid = document.getElementById('submit');  
//by id
inputselementbyid.addEventListener('click', function(event) {
    //on click console log inputs values
    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    event.preventDefault(); 
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);

});


form.addEventListener('submit', function (e) {
    e.preventDefault()

    const fnameValue = fnameById.value.trim()
    const lnameValue = lnameById.value.trim()

    if(fnameValue === "" || lnameValue === ""){
        alert("please fill in both first name or last name")
        return;
    }

    const ul = document.getElementsByClassName('usersAnswer')[0]
    const liFirst = document.createElement('li')
    const liLast = document.createElement('li')

    liFirst.textContent = "first name is : " + fnameValue
    ul.appendChild(liFirst)

    liLast.textContent = "last name is : " + lnameValue
    ul.appendChild(liLast)

    fnameById.value = ""
    lnameById.value = ""
})

// ===== Exercise 3

var allBoldItems;

function getBoldItems() {
    let bold_items = document.getElementsByTagName('strong');
    allBoldItems = Array.from(bold_items)
    console.log(allBoldItems)
}

getBoldItems()

function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = "blue"
    });
}

function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = "black"
    })
}

const p = document.querySelector("p")

p.addEventListener('mouseover', function () {
    highlight()
})

p.addEventListener('mouseout', function () {
    returnItemsToDefault()
})

// ===== Exercise 4

const form = document.getElementById("MyForm")
const radiusInput = document.getElementById("radius")
const volumeInput = document.getElementById("volume")

function calculeSphere(r) {
    let result = (4 / 3) * Math.PI * Math.pow(r, 3);
    return result.toFixed(2)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const radiusValue = parseFloat(radiusInput.value)

    if (isNaN(radiusValue) || radiusValue <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }
    
    const volume = calculeSphere(radiusValue)
    volumeInput.value = volume
})

console.log(calculeSphere(5))

