((d) => {
  const btnMenu = d.querySelector(".btn-burguer");
  const btnClose = d.querySelector(".btn-close");
  const menu = d.querySelector(".menu");
  const overlay = d.querySelector(".overlay");
  const btnFilter = d.querySelector(".btn-filter");
  const sidebar = d.querySelector(".sidebar");
  const btnSidebarClose = d.querySelector(".btn-sidebar-close");
  const body = d.body;

  const toggleMenu = () => {
    menu.classList.toggle("show");
    overlay.classList.toggle("show");
    body.classList.toggle("hideScroll");
  };

  const toggleSidebar = () => {
    sidebar.classList.toggle("show");
    body.classList.toggle("hideScroll");
  };

  btnMenu.addEventListener("click", toggleMenu);
  btnClose.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  btnFilter.addEventListener("click", toggleSidebar);
  btnSidebarClose.addEventListener("click", toggleSidebar);

  window.matchMedia("(min-width: 40em)").addEventListener("change", (e) => {
    if (e.matches && sidebar.classList.contains("show")) {
      sidebar.classList.remove("show");
      body.classList.remove("hideScroll");
    }
  });

  window.matchMedia("(min-width: 62em)").addEventListener("change", (e) => {
    if (e.matches && menu.classList.contains("show")) {
      menu.classList.remove("show");
      overlay.classList.remove("show");
      body.classList.remove("hideScroll");
    }
  });
})(document);
