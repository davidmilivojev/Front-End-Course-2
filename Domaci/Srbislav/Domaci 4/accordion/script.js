const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
  const btn = element.querySelector('.title');
  const last = element.lastElementChild;
  const inners = document.querySelectorAll('.inner');
  btn.addEventListener('click', () => {
    inners.forEach((inner) => {
      if (last !== inner) {
        inner.classList.add('hideText');
      }
    });
    last.classList.toggle('hideText');
  });
});
