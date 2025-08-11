// Main Gallery Swiper
const mainSwiper = new Swiper('.main-swiper', {
  navigation: {
    nextEl: '.main-next',
    prevEl: '.main-prev',
  },
  pagination: {
    el: '.main-pagination',
    clickable: true,
  },
});

// Fullscreen Swiper (init later)
let fullscreenSwiper;
const fullscreenOverlay = document.getElementById('fullscreenOverlay');

function openFullscreen(index) {
  fullscreenOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scroll

  if (!fullscreenSwiper) {
    fullscreenSwiper = new Swiper('.fullscreen-swiper', {
      navigation: {
        nextEl: '.fullscreen-next',
        prevEl: '.fullscreen-prev',
      },
      pagination: {
        el: '.fullscreen-pagination',
        clickable: true,
      },
    });
  }

  fullscreenSwiper.slideTo(index, 0);
}

function closeFullscreen() {
  fullscreenOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ESC key closes fullscreen
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && fullscreenOverlay.classList.contains('active')) {
    closeFullscreen();
  }
});
