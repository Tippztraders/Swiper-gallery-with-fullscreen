// Main gallery swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
});

// Create fullscreen lightbox swiper
let lightboxSwiper;
let lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
lightbox.innerHTML = `
  <span class="lightbox-close">&times;</span>
  <div class="swiper lightbox-swiper">
    <div class="swiper-wrapper"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
`;
document.body.appendChild(lightbox);

// Open fullscreen on image click
document.querySelectorAll(".mySwiper .swiper-slide img").forEach((img, index) => {
  img.addEventListener("click", () => {
    const wrapper = lightbox.querySelector(".swiper-wrapper");
    wrapper.innerHTML = ""; // clear old slides
    document.querySelectorAll(".mySwiper .swiper-slide img").forEach(slideImg => {
      wrapper.innerHTML += `<div class="swiper-slide"><img src="${slideImg.src}"></div>`;
    });
    lightbox.style.display = "block";
    lightboxSwiper = new Swiper(".lightbox-swiper", {
      initialSlide: index,
      loop: true,
      zoom: true,
      pagination: { el: ".lightbox-swiper .swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".lightbox-swiper .swiper-button-next",
        prevEl: ".lightbox-swiper .swiper-button-prev"
      }
    });
  });
});

// Close lightbox
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("lightbox-close") || e.target.classList.contains("lightbox")) {
    lightbox.style.display = "none";
  }
});
