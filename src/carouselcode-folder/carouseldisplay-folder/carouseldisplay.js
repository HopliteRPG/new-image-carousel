import {
  lowerCounter,
  raiseCounter,
} from "../leftAndRightButton-folder/leftAndRightButton";

export { displayImage };
function displayImage(startingPoint, array) {
  let displayImageCounter = startingPoint;

  if (displayImageCounter == array.length) {
    displayImageCounter = 0;
    console.log(array[displayImageCounter]);
  } else if (displayImageCounter == -1) {
    displayImageCounter = array.length - 1;
    console.log(array[displayImageCounter]);
  } else {
    console.log(array[displayImageCounter]);
  }

  lowerCounter(displayImageCounter, array);
  raiseCounter(displayImageCounter, array);
}
