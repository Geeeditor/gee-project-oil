
const aOpen = document.getElementById("accordion-open");
const aClose = document.getElementById("accordion-close");
const aContent = document.getElementById("accordion-content");
if ((aOpen.style.display = "block")) {
  aClose.style.display = "none";
}
aOpen.addEventListener("click", () => {
  aOpen.style.display = "none";
  aClose.style.display = "block";
  aContent.style.display = "block";
});

aClose.addEventListener("click", () => {
  aOpen.style.display = "block";
  aClose.style.display = "none";
  aContent.style.display = "none";
});


