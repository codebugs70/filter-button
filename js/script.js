const filterBtn = document.querySelectorAll(".sort-button button");
const images = document.querySelectorAll(".image-box img");

filterBtn.forEach((item) => item.addEventListener("click", handleClickBtn));
function handleClickBtn(e) {
  console.log(e.target);
  const clickedBtn = e.target;
  filterBtn.forEach((item) => item.classList.remove("active"));
  clickedBtn.classList.add("active");
  const btnVal = e.target.dataset.name;

  images.forEach((item) => {
    item.classList.add("hide");
    if (item.dataset.img === btnVal || btnVal === "all") {
      item.classList.remove("hide");
    }
  });
}
