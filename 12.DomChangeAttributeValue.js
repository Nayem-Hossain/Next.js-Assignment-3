/** b. Implement a JavaScript function that changes the source URL of the image element when a button is clicked. Use a different image URL of your choice. */

function changeImage(){
    const myImage = document.getElementById("my-image");
    const btnChange = document.getElementById("btn-change-img");
    btnChange.addEventListener("click", ()=>{
        myImage.src="https://i.ibb.co/2vqRyDm/1653922.jpg";
    })
}
changeImage();