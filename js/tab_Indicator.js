const menuTab = document.querySelectorAll(".menu-item");
const tabContent = document.querySelectorAll(".tab-content");

menuTab.forEach((tab) =>
  tab.addEventListener("click", function (e) {
    menuTab.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    const tabIndex = e.target.dataset.tab;

    tabContent.forEach((item) => {
      item.classList.remove("show");
      if (tabIndex === item.dataset.content) {
        item.classList.add("show");
      }
    });
  })
);
