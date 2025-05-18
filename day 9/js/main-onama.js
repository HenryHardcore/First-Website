
window.addEventListener('load', resizing);
window.addEventListener('resize', resizing);
function resizing () {
  const papir = document.querySelector('.papir');
  const visina = papir.offsetHeight - 795;
  document.querySelector('.kontejner').style.height = `${visina}px`;
}