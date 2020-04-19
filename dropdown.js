let dropDownButton = document.querySelector(".menu-icon");
let dropDownMenu = document.querySelector(".dropdown-menu");
let visible = 0;


dropDownButton.addEventListener("click", function() {
  visible = 1;
  dropDownMenu.setAttribute("style", "visibility:visible");
});


dropDownMenu.addEventListener("click", function() {
  if(visible == 1) {
    visible = 0;
    dropDownMenu.setAttribute("style", "visibility:hidden");
  }

});
