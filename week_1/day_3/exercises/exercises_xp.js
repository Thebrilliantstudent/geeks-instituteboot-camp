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
//by name
const inputselementbyname = document.querySelector('input[name="submit"]');
inputselementbyname.addEventListener('click', function(event) {
    //on click console log inputs values
    const firstname = document.getElementsByName('firstname')[0].value;
    const lastname = document.getElementsByName('lastname')[0].value;
    event.preventDefault(); 
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);

});
// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...