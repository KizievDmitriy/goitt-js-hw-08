import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

const createGalleryItems = ({preview, original, description}) => {
    const galleryEl = document.createElement("div");
    galleryEl.insertAdjacentHTML("afterbegin",
    `<a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
    </a>`);
  
  return galleryEl;
}

const galleryElements = galleryItems.map(createGalleryItems);
galleryList.append(...galleryElements);

galleryList.addEventListener("click", selectPicture);

const imgOptions = {
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    alertErrorMessage: 'Image not found, next image will be loaded',
};
   
function selectPicture (event) {
    event.preventDefault();   
}

const lightbox = new SimpleLightbox('.gallery a', imgOptions);
