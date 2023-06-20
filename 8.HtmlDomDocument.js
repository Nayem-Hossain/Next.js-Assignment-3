/* b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked. */

const myBtn = document.getElementById("btn-change-text");
const txt = document.getElementById("originag-text");
myBtn.addEventListener('click', () => {
    txt.textContent = "Hey ! plz don't do that.";
})