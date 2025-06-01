export { createImageHtml, removeImageHtml };
const imageVar = document.createElement("img");

function createImageHtml(imageSrc, className) {
  let imageContainer = document.querySelector(".image-container");
  let cloneImageCreate = imageVar.cloneNode(true);
  cloneImageCreate.src = imageSrc;
  cloneImageCreate.classList.add(className);
  console.log(cloneImageCreate);
  console.log(imageContainer);
  imageContainer.appendChild(cloneImageCreate);
}

function removeImageHtml() {
  let imageContainer = document.querySelector(".image-container");
  let currentPhoto = document.querySelector(".photoTest");
  if (currentPhoto !== null) {
    imageContainer.removeChild(currentPhoto);
  } else {
    return;
  }
}
