function switchball() {
  const imageElement = document.getElementById('pokeball');
  imageElement.src = '/pokeballs/greatball.png';
  imageElement.alt = 'greatball';
}
const btn = document.querySelector("#add");
let increaseBy=1; 
btn.addEventListener("click", () => {
  score+=increaseBy;
  title.textContent = 'Score: {score}';
});
