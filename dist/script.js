// contentArea
const main = document.querySelector("#main-content");
// full drawer
const drawer = document.getElementById("custom-drawer");
//  drawer content
const drawerContent = document.querySelector(".drawer-content");
//  drawer btn
const drawerBtns = document.querySelectorAll(".drawer-btn");

function openDrawer() {
  for (let i = 0; i < drawerBtns.length; i++) {
    drawerBtns[i].addEventListener("click", () => {
      if (window.innerWidth >= 768) {
        drawer.classList.toggle("open");
        drawerContent.classList.toggle("hide");
        if (drawer.classList.contains("open")) {
          main.addEventListener("click", function () {
            drawer.classList.remove("open");
            drawerContent.classList.add("hide");
          });
        }
      }
    });
  }
}
openDrawer();
window.addEventListener("resize", function () {
  openDrawer();
});
