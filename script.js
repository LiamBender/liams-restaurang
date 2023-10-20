const buttons = document.querySelectorAll('button[id^="button"]');
const contents = document.querySelectorAll('section[id^="menu"]');
let buttonClicked = false;

function toggleContent(index) {
  contents.forEach((content) => (content.style.display = "none"));
  contents[index].style.display = "block";
  buttonClicked = true;
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => toggleContent(index));
});

if (!buttonClicked) {
  contents[0].style.display = "block";
}
