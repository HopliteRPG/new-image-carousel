export { lowerCounter, raiseCounter };
import { createCaroBaseHtml } from "../carousel-code-folder/carouselBaseHtml";
import { displayImage } from "../carousel-code-folder/carouselDisplay";

function lowerCounter(displayImageCounter, array) {
  let leftButton = document.querySelector(".left-btn");
  leftButton.addEventListener("click", () => {
    alert("left");
  });
}

function raiseCounter(displayImageCounter, array) {
  let rightButton = document.querySelector(".right-btn");
  rightButton.addEventListener("click", () => {
    alert("right");
  });
}
