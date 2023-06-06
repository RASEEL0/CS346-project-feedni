//shareEX.js
const shareExperienceBtn = document.getElementById("shareExperienceBtn");
shareExperienceBtn.addEventListener("click", () => {
if (localStorage.getItem("isLoggedIn") === "false") {
alert("You need to login to share experience ");
if (confirm("Do you want to login?")) {
window.location.href = "login.html";
}
} else {
// Share experience logic
const experience = experienceText.value;fetch('/share-experience', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      experience
    })
  }).then(() => {
    alert('Experience shared!');
    experienceText.value = '';
  })
}
})
//for searchbar
const form = document.getElementById('search-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = document.getElementById('search-input').value;  
  const lang = document.getElementById('lang-select').value;
  const city = document.getElementById('city-select').value;
  
  // Call API with search options 
  fetch(`/api/experiences?search=${searchTerm}&lang=${lang}&city=${city}`) 
  .then(res => res.json())
  .then(data => {
    // Render results
    data.results.forEach(result => {
      renderCommentCard(result);  
    })  
  })
});

function renderCommentCard(result) {
const card = document.createElement('div');
card.classList.add('comment-card');

// Render card html
card.innerHTML = `
  <h3>${result.title}</h3>
  <p>${result.text}</p>
`;

document.querySelector('.comment-container').appendChild(card);
}
