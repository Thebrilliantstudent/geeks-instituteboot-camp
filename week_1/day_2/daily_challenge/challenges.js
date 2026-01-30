// Daily challenge: Planets

const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 79 },
  { name: "Saturn", color: "goldenrod", moons: 83 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 }
];

const section = document.querySelector("section")

planets.forEach((planet) => {
    const planetDiv = document.createElement("div")
    planetDiv.classList.add("planet")

    planetDiv.style.backgroundColor = planet.color

    for (let i = 0; i < planet.moons; i++){
        const moon = document.createElement("div")
        moon.classList.add("moon")

        moon.style.backgroundColor = "white"

        planetDiv.appendChild(moon)
    }

    section.appendChild(planetDiv)
})
console.log(section)



// Daily Challenge : Words in the stars
// 1. Prompt the user
const input = prompt("Enter several words separated by commas:");

// 2. Put the words into an array (trim spaces)
const words = input.split(",").map(word => word.trim());

// 3. Find the longest word
const maxLength = Math.max(...words.map(word => word.length));

// 4. Create the top/bottom border
const border = "*".repeat(maxLength + 4);

// 5. Print the frame
console.log(border);

words.forEach(word => {
  const spaces = " ".repeat(maxLength - word.length);
  console.log(`* ${word}${spaces} *`);
});

console.log(border);
