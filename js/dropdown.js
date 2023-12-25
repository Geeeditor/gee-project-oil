const dropdownItems = document.querySelectorAll(".dropdown");
const dropdownIcons = document.querySelectorAll(".dropdown-icon");

dropdownItems.forEach(function (item) {
  item.addEventListener("click", function () {
    const dropdown = this.querySelector("ul");
    const isActive = dropdown.classList.contains("show");

    closeAllDropdowns();

    if (!isActive) {
      dropdown.classList.add("show");
    }
  });
});

function closeAllDropdowns() {
  dropdownItems.forEach(function (item) {
    const dropdown = item.querySelector("ul");
    dropdown.classList.remove("show");
  });
}