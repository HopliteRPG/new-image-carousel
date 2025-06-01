import { createCaroBaseHtml } from "../carouselBaseHtml-folder/carouselBaseHtml";
import { displayImage } from "../carouselDisplay-folder/carouselDisplay";
export { timeoutFunc };

function timeoutFunc(displayImageCounter, array) {
  setInterval(() => {
    let startingPoint = displayImageCounter;
    createCaroBaseHtml();
    displayImage(startingPoint, array);
  }, 5000);
}

// function raiseCounter(displayImageCounter, array) {
//   let rightButton = document.querySelector(".right-btn");
//   rightButton.addEventListener("click", () => {
//     createCaroBaseHtml();
//     displayImageCounter++;
//     displayImage(displayImageCounter, array);
//   });
// }
