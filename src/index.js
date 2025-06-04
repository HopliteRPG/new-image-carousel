import { createCaroBaseHtml } from "./carousel-code-folder/carouselBaseHtml";
import { displayImage } from "./carousel-code-folder/carouselDisplay";
import { bottomCarouselButtonCreator } from "./button-code-folder/selectionButton";
import { carArr, photosForCarousel } from "./image-code-folder/imageCode";
import "./styles.css";
photosForCarousel();
createCaroBaseHtml();
displayImage(0, carArr);
bottomCarouselButtonCreator(carArr);
