/**b. Implement a JavaScript function that selects all paragraphs with a specific class and changes their text color to red. */

function changeTextColor(){
    const allParagraphs = document.querySelectorAll(".dialouge")
    allParagraphs.forEach( paragraph => {
        paragraph.style.color = 'red';
    });
}
changeTextColor();