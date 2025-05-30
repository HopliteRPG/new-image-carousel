export { lowerCounter, raiseCounter };
import { createCaroBaseHtml } from "../carouselBaseHtml-folder/carouselBaseHtml";
import { displayImage } from "../carouselDisplay-folder/carouselDisplay";

function lowerCounter(displayImageCounter, array) {
  let leftButton = document.querySelector(".left-btn");
  leftButton.addEventListener("click", () => {
    createCaroBaseHtml();
    displayImageCounter--;
    displayImage(displayImageCounter, array);
  });
}

function raiseCounter(displayImageCounter, array) {
  let rightButton = document.querySelector(".right-btn");
  rightButton.addEventListener("click", () => {
    createCaroBaseHtml();
    displayImageCounter++;
    displayImage(displayImageCounter, array);
  });
}
