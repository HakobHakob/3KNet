const dropdownHeaderMenu = document.querySelectorAll(".dropdown");
const menuBg = document.querySelector(".top_container_body");
let pseudoElement;

dropdownHeaderMenu.forEach((menu) => {
  menu.addEventListener("mouseover", () => {
    pseudoElement = document.createElement("div");
    pseudoElement.classList.add("hovered");
    menuBg.appendChild(pseudoElement);
  });

  menu.addEventListener("mouseout", () => {
    if (pseudoElement) {
      pseudoElement.classList.remove("hovered");
      menuBg.removeChild(pseudoElement);
      pseudoElement = null;
    }
  });
});
