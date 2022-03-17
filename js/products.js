((d) => {
  const btnFilter = d.querySelector(".btn-filter");
  const sidebar = d.querySelector(".sidebar");
  const btnSidebarClose = d.querySelector(".btn-sidebar-close");
  const body = d.body;

  const toggleSidebar = () => {
    sidebar.classList.toggle("show");
    body.classList.toggle("hideScroll");
  };

  btnFilter.addEventListener("click", toggleSidebar);
  btnSidebarClose.addEventListener("click", toggleSidebar);

  window.matchMedia("(min-width: 40em)").addEventListener("change", (e) => {
    if (e.matches && sidebar.classList.contains("show")) {
      sidebar.classList.remove("show");
      body.classList.remove("hideScroll");
    }
  });
})(document);
