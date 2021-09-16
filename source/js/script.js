const headerButton = document.querySelector(".page-header__button");
const pageNavigation = document.querySelector(".page-header__navigation");

pageNavigation.classList.remove("page-header__navigation--nojs");
headerButton.classList.remove("page-header__button--nojs");

headerButton.addEventListener("click", function () {
  if (headerButton.classList.contains("page-header__button--open")) {
    headerButton.classList.remove("page-header__button--open");
    headerButton.classList.add("page-header__button--close");
    pageNavigation.classList.remove("page-header__navigation--closed");

  } else {
    headerButton.classList.add("page-header__button--open");
    headerButton.classList.remove("page-header__button--close");
    pageNavigation.classList.add("page-header__navigation--closed");
  }
})
