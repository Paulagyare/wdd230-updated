let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
imagesToLoad.forEach((img) => {
    loadImages(img);
  });

  const modal = document.querySelector(".modal");
  const close = document.querySelector(".close");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");
  const modalImg = document.querySelector(".modal-img");
  const captionText = document.querySelector(".caption-text");
  const modalImgSrc = document.querySelector(".modal-img").getAttribute("src");
  const captionTextSrc = document.querySelector(".caption-text").getAttribute("data-caption");
  const modalImgAlt = document.querySelector(".modal-img").getAttribute("alt");
  const captionTextAlt = document.querySelector(".caption-text").getAttribute("data-alt");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }