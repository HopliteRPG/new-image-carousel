import { createCaroBaseHtml } from "../carouselBaseHtml-folder/carouselBaseHtml";
import { displayImage } from "../carouseldisplay-folder/carouseldisplay";

export { bottomCarouselButtonCreator };

const divCreate = document.createElement("div");
const buttonCreate = document.createElement("button");
let bottomCaroContainer = document.querySelector(".bottom-caro-container");

function createDivSection(parentDiv, div, className) {
  let cloneDivCreate = div.cloneNode(true);
  cloneDivCreate.classList.add(className);
  parentDiv.appendChild(cloneDivCreate);
  return { cloneDivCreate };
}

function createButton(div, button, buttonClass) {
  let cloneButtonCreate = button.cloneNode(true);
  cloneButtonCreate.classList.add(buttonClass);
  div.appendChild(cloneButtonCreate);
  return { cloneButtonCreate };
}

function bottomCarouselButtonCreator(array) {
  bottomCaroContainer.innerText = "";
  alert("ran");

  array.forEach((image) => {
    let bottomButtonDiv = createDivSection(
      bottomCaroContainer,
      divCreate,
      "bottomButtonDiv",
    );
    let bottomButton = createButton(
      bottomButtonDiv.cloneDivCreate,
      buttonCreate,
      "bottomButton",
    );
    bottomButton.cloneButtonCreate.addEventListener("click", function () {
      let startingPoint = image.photoId;
      createCaroBaseHtml();
      displayImage(startingPoint, array);
    });
  });
}
