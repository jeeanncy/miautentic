((d) => {
  const $btnMenu = d.querySelector(".btn-burguer");
  const $btnClose = d.querySelector(".btn-close");
  const $menu = d.querySelector(".menu");
  const $overlay = d.querySelector(".overlay");

  const close = () => {
    $menu.classList.toggle("show");
    $overlay.classList.toggle("show");
  };

  $btnMenu.addEventListener("click", close);
  $btnClose.addEventListener("click", close);
  $overlay.addEventListener("click", close);

})(document);
