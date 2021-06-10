//accordions
const elements = document.querySelectorAll('.accordion-item');
elements.forEach(element => {
  const accordionButton = element.querySelector('.accordion-btn');
  const last = element.lastElementChild;
  const accordionContents = document.querySelectorAll('.accordion-content');
  accordionButton.addEventListener('click', () => {
    accordionContents.forEach(acc => {
      if (last !== acc) {
        acc.classList.add('accordion-content--hide');
      }
    });
    last.classList.toggle('accordion-content--hide');
  });
});

//dropdown
const dropdown = document.querySelector('.dropdown');
const dropDownList = document.querySelector('.dropdown-list');
const dropItems = document.querySelectorAll('.dropdown-item');
const dropBtn = document.querySelector('.dropdown-btn');

dropdown.addEventListener('click', (e) => {
  if (!dropDownList.classList.contains('dropdown-list--active')) {
    dropDownList.classList.add('dropdown-list--active');
  } else {
    dropDownList.classList.remove('dropdown-list--active');
  }
  dropItems.forEach(dropItem => {
    dropItem.addEventListener('click', () => {
      dropBtn.innerHTML = dropItem.innerHTML
    })
  });
});

//tabs
const tabs = document.querySelectorAll('.tabs');
const tabElements = document.querySelectorAll('.tab-btn');
const tabContentElements = document.querySelectorAll('.tab-content');
tabElements.forEach((element, index) => {
  element.addEventListener('click', () => {
    const tab = document.querySelector('.js-tab-content-' + index);
    tabContentElements.forEach(e => {
      e.classList.remove('tab-content-active');
    })
    if (!tab.classList.contains('tab-content-active')) {
      tab.classList.add('tab-content-active');
    } else {
      tab.classList.remove('tab-content-active');
    }
  })
})
function initTab () {
  window.addEventListener('load', () => {
    const firstTab = document.querySelectorAll('.js-tab-content-0');
    firstTab[0].classList.add('tab-content-active');
  })
}
initTab()