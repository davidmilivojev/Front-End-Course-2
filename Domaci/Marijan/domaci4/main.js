function accordions() {
  const buttons = document.querySelectorAll('.js-acc-btn');
  const contents = document.querySelectorAll('.js-acc-content');
  const activeClass = 'accordion-item--active';

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (button.parentElement.classList.value.includes(activeClass)) {
        button.parentElement.classList.remove(activeClass);
        contents[index].style.display = 'none';
      } else {
        button.parentElement.classList.add(activeClass);
        contents[index].style.display = 'block';
      }
    });
  });
}

function tabs() {
  const tabs = document.querySelectorAll('.js-tab-btn');
  const contents = document.querySelectorAll('.js-tab-content');
  const tabActive = 'tab-btn-active';
  const contentActive = 'tab-content-active';

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      contents.forEach(content => {
        content.classList.remove(contentActive)
      });
      tabs.forEach(tab => {
        tab.classList.remove(tabActive)
      });
      tab.classList.add(tabActive);
      contents[index].classList.add(contentActive);
    });
  });
}

function dropdown() {
  const dropButton = document.querySelector('.js-drop-btn');
  const dropItems = document.querySelectorAll('.js-drop-item');
  const dropList = document.querySelector('.js-drop-list');

  dropButton.addEventListener('click', () => {
    if (dropList.style.display === 'none') {
      dropList.style.display = 'block';
      return
    }
    dropList.style.display = 'none';
  });

  dropItems.forEach(dropItem => {
    dropItem.addEventListener('click', () => {
      dropList.style.display = 'none';
      console.log(dropButton)
      dropButton.innerHTML = dropItem.innerHTML
    })
  });
}

accordions();
tabs();
dropdown();