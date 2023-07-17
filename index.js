const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const menuWrapper = document.querySelector(".wrapper");
const menu = document.querySelector("nav");

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
  menuWrapper.style.animationName = "fadeIn";
  menu.style.animationName = "menuSlideIn";
  menuWrapper.style.display = "block";
  menu.style.display = "flex";
}
function closeMenu() {
  menu.style.animationName = "menuSlideOut";
  menuWrapper.style.animationName = "fadeOut";
  setTimeout(() => {
    menuWrapper.style.display = "none";
    menu.style.display = "none";
  }, 300);
}

const featuresBtn = document.getElementById("features");
const featuresDropdown = document.querySelector(".featuresDropdown");
const companyBtn = document.getElementById("company");
const companyDropdown = document.querySelector(".companyDropdown");

featuresBtn.addEventListener("click", () => changeDropdown("Features"));
companyBtn.addEventListener("click", () => changeDropdown("Company"));

function changeDropdown(s) {
  let open = `${s} <img src="images/icon-arrow-down.svg">`;
  let close = `${s} <img src="images/icon-arrow-up.svg">`;

  if (s === "Features") {
    if (featuresBtn.innerHTML === open) {
      featuresBtn.innerHTML = close;
      featuresDropdown.style.maxHeight = "1000px";
      featuresDropdown.style.boxShadow = "0 0 5px 0 var(--black)";
    } else {
      featuresBtn.innerHTML = open;
      featuresDropdown.style.maxHeight = "0px";
      featuresDropdown.style.boxShadow = "none";
    }
  } else if (s === "Company") {
    if (companyBtn.innerHTML === open) {
      companyBtn.innerHTML = close;
      companyDropdown.style.maxHeight = "1000px";
      companyDropdown.style.boxShadow = "0 0 5px 0 var(--black)";
    } else {
      companyBtn.innerHTML = open;
      companyDropdown.style.maxHeight = "0px";
      companyDropdown.style.boxShadow = "none";
    }
  }
}
