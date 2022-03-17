((d) => {
  const btnMenu = d.querySelector(".btn-burguer");
  const btnClose = d.querySelector(".btn-close");
  const menu = d.querySelector(".menu");
  const overlay = d.querySelector(".overlay");
  const body = d.body;

  const toggleMenu = () => {
    menu.classList.toggle("show");
    overlay.classList.toggle("show");
    body.classList.toggle("hideScroll");
  };

  btnMenu.addEventListener("click", toggleMenu);
  btnClose.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  window.matchMedia("(min-width: 62em)").addEventListener("change", (e) => {
    if (e.matches && menu.classList.contains("show")) {
      menu.classList.remove("show");
      overlay.classList.remove("show");
      body.classList.remove("hideScroll");
    }
  });
})(document);
