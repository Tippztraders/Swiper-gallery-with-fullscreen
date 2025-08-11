body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.gallery-container {
  max-width: 900px;
  margin: 20px auto;
}

.gallery-container img {
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
}

.swiper {
  width: 100%;
  height: 100%;
}

.fullscreen-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.95);
  z-index: 9999;
  justify-content: center;
  align-items: center;
}

.fullscreen-overlay.active {
  display: flex;
}

.fullscreen-overlay img {
  max-height: 90%;
  max-width: 90%;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 28px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10000;
}
