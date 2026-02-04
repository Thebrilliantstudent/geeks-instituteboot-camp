// ====== Daily Challenge 1
const btn = document.getElementById('lib-button')
const shuffleBtn = document.getElementById('shuffle-button')


btn.addEventListener('click', function (e) {
    e.preventDefault()

    const noun = document.getElementById('noun').value
    const adjective = document.getElementById('adjective').value
    const person = document.getElementById('person').value
    const verb = document.getElementById('verb').value
    const place = document.getElementById('place').value

    if (!noun.trim() || !adjective.trim() || !person.trim() || !verb.trim() || !place.trim()) {
        alert("Veuillez remplir tous les champs")
        return
    }

    const stories = [
        `${noun} est ${adjective} il ${verb} a ${place}, et son ami ${person} aussi.`,
        
    ];

const randomStory = stories[Math.floor(Math.random() * stories.length)];
    document.getElementById('story').textContent = randomStory
})

shuffleBtn.addEventListener('click', function () {
    const noun = document.getElementById('noun').value
    const adjective = document.getElementById('adjective').value
    const person = document.getElementById('person').value
    const verb = document.getElementById('verb').value
    const place = document.getElementById('place').value

    if (!noun.trim() || !adjective.trim() || !person.trim() || !verb.trim() || !place.trim()) {
        alert("Veuillez remplir tous les champs")
        return
    }

    const stories = [
         `${noun} est ${adjective} il ${verb} a ${place}, et son ami ${person} aussi.`,
        
    ];
    const randomStory = stories[Math.floor(Math.random() * stories.length)];

    document.getElementById('story').textContent = randomStory;
})
// ====== Daily Challenge 2
 const input = document.getElementById('letterInput');

   

    //: Using input event (removes non-letters after typing)
    
    input.addEventListener('input', function(event) {
      this.value = this.value.replace(/[^a-zA-Z]/g, '');
    });
