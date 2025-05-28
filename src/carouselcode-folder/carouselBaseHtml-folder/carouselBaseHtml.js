export { createCaroBaseHtml };
const divCreate = document.createElement("div");
const buttonCreate = document.createElement("button");
const topCaroContainer = document.querySelector(".top-caro-container");

function createDivSection(parentDiv, div, className) {
  let cloneDivCreate = div.cloneNode(true);
  cloneDivCreate.classList.add(className);
  parentDiv.appendChild(cloneDivCreate);
  return { cloneDivCreate };
}

function createButton(div, button, buttonClass, text) {
  let cloneButtonCreate = button.cloneNode(true);
  cloneButtonCreate.classList.add(buttonClass);
  div.appendChild(cloneButtonCreate);
  cloneButtonCreate.innerText = text;
  return { cloneButtonCreate };
}

function createCaroBaseHtml() {
  topCaroContainer.innerText = "";
  createButton(topCaroContainer, buttonCreate, "left-btn", "left button");
  createDivSection(topCaroContainer, divCreate, "image-container");
  createButton(topCaroContainer, buttonCreate, "right-btn", "right button");
}
