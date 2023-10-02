const buttons = document.querySelectorAll('button[id^="button"]');
const contents = document.querySelectorAll('section[id^="menu"]');

function toggleContent(index) {
  contents.forEach((content) => (content.style.display = "none"));
  contents[index].style.display = "block";
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => toggleContent(index));
});
