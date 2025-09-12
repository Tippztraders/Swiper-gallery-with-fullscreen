// Initialize all Swipers
document.querySelectorAll('.mySwiper').forEach((el) => {
  new Swiper(el, {
    loop: true,
    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: el.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
});

// Open modal
document.querySelectorAll('.openGallery').forEach((img) => {
  img.addEventListener('click', () => {
    const modalId = img.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('active');
  });
});

// Close modal with swipe down or Esc
document.querySelectorAll('.modal').forEach((modal) => {
  let touchStartY = 0;

  modal.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  });

  modal.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchEndY - touchStartY > 100) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('active');
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
