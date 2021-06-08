const buttons = document.querySelectorAll('.button');
const inners = document.querySelectorAll('.inner');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    btn.classList.toggle('active');
    inners.forEach((inner, i) => {
      if (i == index) {
        inner.classList.add('active');
      } else {
        inner.classList.remove('active');
      }
    });
  });
});
