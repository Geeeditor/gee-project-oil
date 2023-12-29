document.addEventListener("DOMContentLoaded", function () {
  const defaultContent = document.getElementById("showOne");
  defaultContent.style.display = "block";

  const reportTabs = document.querySelectorAll(".report-tab");
  const reportContents = document.querySelectorAll(".report-content");

  reportTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const reportId = tab.getAttribute("id");
      const correspondingContent = document.getElementById(
        "show" + reportId.slice(6)
      );

      reportContents.forEach(function (content) {
        content.style.display = "none";
      });

      reportTabs.forEach(function (tab) {
        tab.classList.remove("active");
      });

      correspondingContent.style.display = "block";
      tab.classList.add("active");
    });
  });
});
