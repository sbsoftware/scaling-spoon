const menuActiveClass = "active";

document.addEventListener("DOMContentLoaded", () => {
  let menu = document.querySelector("#menu");
  let menuSwitches = document.querySelectorAll(".menu-switch");

  menuSwitches.forEach((menuSwitch) => {
    menuSwitch.addEventListener("click", (e) => {
      menu.classList.toggle(menuActiveClass);
    });
  });
});
