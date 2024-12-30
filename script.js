// Hide loader and show content when page is fully loaded
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
    content.style.opacity = 1; // Make content visible
  }, 2000); // Adjust time as needed
});














