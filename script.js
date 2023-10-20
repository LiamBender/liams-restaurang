const buttons = document.querySelectorAll('button[id^="button"]');
const contents = document.querySelectorAll('section[id^="menu"]');
let buttonClicked = false;

function toggleContent(index) { // Uses the parameter to display the right content depending on button click
  contents.forEach((content) => (content.style.display = "none"));
  contents[index].style.display = "block";
  buttonClicked = true;
}

buttons.forEach((button, index) => { // Grabs the selected button's index and uses it as an argument in the toggleContent function
  button.addEventListener("click", () => toggleContent(index));
});

if (!buttonClicked) { // When no button is selected then display content [0]
  contents[0].style.display = "block";
}
