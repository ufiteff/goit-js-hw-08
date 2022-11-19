// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const item =
`<a class="gallery__item" href="large-image.jpg">
<img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> `
function createItemCards (arrey){
    return arrey.map((el)=>{
        const {description, original, preview} = el
        
            return`
        <a class="gallery__item" href='${original}'>
              <img class="gallery__image" src='${preview}' alt='${description}' />
        </a>`
  })
   .join('')
}
const markup = createItemCards (galleryItems);

const list = document.querySelector('.gallery');
list.insertAdjacentHTML("afterbegin", markup);

const captionOptions = {
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    
    uniqueImages: true,
   };
   list.addEventListener(`click`, GalleryItemClick);
function GalleryItemClick(event) {
    event.preventDefault();
}
const galleryImgA = document.querySelector('.gallery a')
galleryImgA.addEventListener(`click`, elementCaptionOptions);
function elementCaptionOptions() {
    let captionOptionsElement = {};
    return captionOptionsElement;
};
galleryImgA.addEventListener(`click`, elementCaptionOptions);

let simpleLightboxGallery = new SimpleLightbox('.gallery a', captionOptions);
simpleLightboxGallery.on('show.simplelightbox', function () {
    open
    });
console.log(galleryItems);
