const buyButtons = document.querySelectorAll('.buy');
const sellButtons = document.querySelectorAll('.sell');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('You bought a stock!');
  });
});

sellButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('You sold a stock!');
  });
});

