let dropDownBars = document.querySelector(".drop-down-menu-bars");
let dropDownMenu = document.querySelector(".drop-down-menu");

dropDownBars.addEventListener("click", () => {
    if (dropDownMenu.style.display === "none") {
        dropDownMenu.style.display = "block";
        dropDownMenu.style.animation = "";
        dropDownMenu.setAttribute("open", "");
    } else {
        dropDownMenu.removeAttribute("open");
        dropDownMenu.style.animation = "fade-out 1000ms forwards, slide-out 1000ms forwards";
        setTimeout(() => {
            dropDownMenu.style.display = "none";
        }, 1000);
    }
});