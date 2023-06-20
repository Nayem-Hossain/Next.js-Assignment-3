/* b. Implement a JavaScript function that adds a CSS class named "highlight" to the paragraph element when the button is clicked. 
      The "highlight" class should change the background color of the paragraph to yellow.
*/
const btnHighlight = document.getElementById("btn-highlight-text");
const myText = document.getElementById("my-text");

btnHighlight.addEventListener("click", ()=>{
myText.classList.add('highlight');
})