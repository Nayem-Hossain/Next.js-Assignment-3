/*a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.*/

document.addEventListener("click",displayCoordinate);

function displayCoordinate(event){
    let x = event.clientX;
    let y = event.clientY;
    alert(`Clicked at coordinates (x, y): (${x}, ${y})`);
}

/* b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key. */

document.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode || event.which;
    alert(`Key code: ${keyCode}`);
  });


  /* c. When the user moves the mouse over an image, change the image source to another image of your choice. */

  const image = document.getElementById('imgSource');
  image.addEventListener("mouseover", ()=>{
    image.src='https://i.ibb.co/8YzVxR8/13-Koenigsegg-Gemera.jpg';
  });
  image.addEventListener("mouseout", ()=>{
    image.src='https://i.ibb.co/3vFJrTV/2-Honda-Civic-Si-Garber.png';
  });