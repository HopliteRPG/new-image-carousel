let leftButton = document.querySelector(".left-btn");
let rightButton = document.querySelector(".right-btn");

function lowerCounter(displayImageCounter, array) {
  leftButton.addEventListener("click", () => {
    displayImageCounter--;
    dispayImages(array);
  });
}

function raiseCounter(displayImageCounter, array) {
  rightButton.addEventListener("click", () => {
    console.log(displayImageCounter);
    displayImageCounter++;
    dispayImages(array);
  });
}
