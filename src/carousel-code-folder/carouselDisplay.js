import {
  createImageHtml,
  removeImageHtml,
} from "../image-code-folder/imageCodeHtml";
import {
  lowerCounter,
  raiseCounter,
} from "../button-code-folder/leftAndRightButton";
import { bottomCarouselButtonCreator } from "../button-code-folder/selectionButton";

export { displayImage };
function displayImage(startingPoint, array) {
  let displayImageCounter = startingPoint;

  if (displayImageCounter == array.length) {
    displayImageCounter = 0;
    console.log(array[displayImageCounter]);
    removeImageHtml();
    createImageHtml(
      array[displayImageCounter].photoHTML,
      array[displayImageCounter].photoClassName,
    );
  } else if (displayImageCounter == -1) {
    displayImageCounter = array.length - 1;
    console.log(array[displayImageCounter]);
    removeImageHtml();
    createImageHtml(
      array[displayImageCounter].photoHTML,
      array[displayImageCounter].photoClassName,
    );
  } else {
    console.log(array[displayImageCounter]);
    removeImageHtml();
    createImageHtml(
      array[displayImageCounter].photoHTML,
      array[displayImageCounter].photoClassName,
    );
  }

  // bottomCarouselButtonCreator(array);
  // lowerCounter(displayImageCounter, array);
  // raiseCounter(displayImageCounter, array);
}
