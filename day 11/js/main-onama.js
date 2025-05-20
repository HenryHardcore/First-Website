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
if (window.matchMedia("(max-width: 600px)").matches) {
  window.addEventListener('load', resizing);
  window.addEventListener('resize', resizing);
  function resizing () {
  const papir = document.querySelector('.papir');
  const visina = papir.offsetHeight + 85;
  document.querySelector('.kontejner').style.height = `${visina}px`;
  }
}
else if (window.matchMedia("(min-width: 601px) and (max-width: 768px)").matches) {
  window.addEventListener('load', resizing);
  window.addEventListener('resize', resizing);
  function resizing () {
  const papir = document.querySelector('.papir');
  const visina = papir.offsetHeight - 690;
  document.querySelector('.kontejner').style.height = `${visina}px`;
  }
}
else if (window.matchMedia("(min-width: 769px) and (max-width: 991px)").matches) {
  window.addEventListener('load', resizing);
  window.addEventListener('resize', resizing);
  function resizing () {
  const papir = document.querySelector('.papir');
  const visina = papir.offsetHeight - 760;
  document.querySelector('.kontejner').style.height = `${visina}px`;
  }
}
else if (window.matchMedia("(min-width: 992px) and (max-width: 1200px)").matches) {
  window.addEventListener('load', resizing);
  window.addEventListener('resize', resizing);
  function resizing () {
  const papir = document.querySelector('.papir');
  const visina = papir.offsetHeight - 760;
  document.querySelector('.kontejner').style.height = `${visina}px`;
  }
}
else {
  window.addEventListener('load', resizing);
  window.addEventListener('resize', resizing);
  function resizing () {
  const papir = document.querySelector('.papir');
  const visina = papir.offsetHeight - window.innerWidth / 3.4 ;
  document.querySelector('.kontejner').style.height = `${visina}px`;
  }
}