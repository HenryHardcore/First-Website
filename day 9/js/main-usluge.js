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
window.addEventListener('load', resizing);
window.addEventListener('resize', resizing);
function resizing () {
  const papir = document.querySelector('.papir');
  const visina = papir.offsetHeight - 790;
  document.querySelector('.kontejner').style.height = `${visina}px`;
}