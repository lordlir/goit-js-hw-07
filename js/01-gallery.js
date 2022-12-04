import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryOfImg = document.querySelector(".gallery");

galleryOfImg.insertAdjacentHTML("afterbegin", createListOfImg(galleryItems));

function createListOfImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryOfImg.addEventListener("click", openOriginImg);

function openOriginImg(event) {
  event.preventDefault();

  //   console.log(event.target);
  //     console.log(event.currentTarget);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originImgSie = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originImgSie}" >
`);

  instance.show();

  window.addEventListener("keydown", closeOfEscape);
  function closeOfEscape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
