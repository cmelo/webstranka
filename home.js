const preview = document.getElementById("preview");

document.querySelectorAll("a.open-app").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!preview) return;
    event.preventDefault();
    preview.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
