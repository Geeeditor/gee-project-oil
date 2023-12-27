const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(function (item) {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", function () {
    const isActive = item.classList.contains("active");

    closeAllAccordions();

    if (!isActive) {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

function closeAllAccordions() {
  accordionItems.forEach(function (item) {
    const content = item.querySelector(".accordion-content");

    item.classList.remove("active");
    content.style.maxHeight = "0";
  });
}
