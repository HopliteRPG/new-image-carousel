import { createCaroBaseHtml } from "./carouselCode-folder/carouselBaseHtml-folder/carouselBaseHtml";
import { displayImage } from "./carouselCode-folder/carouselDisplay-folder/carouselDisplay";
import { carArr, photosForCarousel } from "./imageCode-folder/imageCode";
import "./styles.css";
photosForCarousel();
createCaroBaseHtml();
displayImage(0, carArr);
