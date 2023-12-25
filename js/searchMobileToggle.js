const searchOpen = document.getElementById("search-open");
const searchClose = document.getElementById("search-close");
const searchMobileContainer = document.querySelector(".search-mobile");

searchOpen.addEventListener("click", () => {
  searchOpen.style.display = "none";
  searchClose.style.display = "block";

  searchMobileContainer.style.opacity = '1'
});

searchClose.addEventListener("click", () => {
    searchOpen.style.display = "block";
    searchClose.style.display = "none";

    searchMobileContainer.style.opacity = "0";
})
