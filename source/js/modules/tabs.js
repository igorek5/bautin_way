const tabsButton = document.querySelectorAll(".info__tab-link");
const tabsItem = document.querySelectorAll(".countrys__item");

const classControl = (items, indexElement) => {
  items.forEach((el, index) => {
    el.classList.remove("active");
    if (index === indexElement) {
      el.classList.add("active");
    }
  });
};

const setTabsControl = () => {
  tabsButton.forEach((el, index) => {
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      classControl(tabsButton, index);
      classControl(tabsItem, index);
    });
  })
}

export { setTabsControl };
