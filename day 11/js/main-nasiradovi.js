window.addEventListener('load', () => {
  const wrapper = document.querySelector('.wrapper');
  const images = wrapper.querySelectorAll('img');
  let totalWidth = 0;
  let widthh = wrapper.offsetWidth

  images.forEach(img => {
    totalWidth += img.offsetWidth;
  });

  

  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';

  
  const keyframes = `
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      95% {
        transform: translateX(-${totalWidth - widthh}px);
      }
      100% {
        transform: translateX(0);
      }
    }
  `;

  styleSheet.innerHTML = keyframes;
  document.head.appendChild(styleSheet);
});

let burgerBtn = document.querySelector(".burger-menu-btn");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;

burgerBtn.onclick = function () {
  if (!isBurgerOpen) {
    burgerMenu.style.display = "block";
    burgerBtn.style.backgroundPosition = "center left 50px, center";
    isBurgerOpen = true;
  }
  else if (isBurgerOpen){
    burgerMenu.style.display = "none";
    burgerBtn.style.backgroundPosition = "center,center left 50px";
    isBurgerOpen = false;
  }
}
  const images = document.querySelectorAll('.wrapper img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showImage();
    });
  });

  function showImage() {
    lightbox.style.display = 'flex';
    lightboxImg.src = images[currentIndex].src;
  }

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });

  



  