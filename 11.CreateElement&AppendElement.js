/** b. Implement a JavaScript function that dynamically creates five list items (<li>) with sequential numbers (1 to 5) and appends them to the unordered list. */


function createList() {
    const unorderedListContainer = document.getElementById("my-empty-list");
    let fruits = ["(1) apple", "(2) orange", "(3) banana", "(4) mango", "(5) grape"];

    for (i in fruits) {
        let list = document.createElement('li');
        list.innerText = fruits[i];
        unorderedListContainer.appendChild(list);
    }
}
createList();