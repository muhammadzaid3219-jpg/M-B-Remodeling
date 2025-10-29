
  const buttons = document.querySelectorAll(".team-filters button");
  const images = document.querySelectorAll(".team-img");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      images.forEach((img) => {
        if (filter === "all" || img.classList.contains(filter)) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    });
  });