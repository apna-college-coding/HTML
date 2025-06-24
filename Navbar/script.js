const navItems = document.querySelectorAll('.nav-item');
const indicator = document.querySelector('.indicator');

function updateIndicator(activeItem) {
  const color = activeItem.getAttribute('data-color');
  const left = activeItem.offsetLeft + activeItem.offsetWidth / 2 - 25;

  indicator.style.left = `${left}px`;
  indicator.style.background = color;
  indicator.style.boxShadow = `0 4px 8px ${color}, 0 0 12px ${color}`;
  document.documentElement.style.setProperty('--active-color', color);
}

window.addEventListener('DOMContentLoaded', () => {
  const active = document.querySelector('.nav-item.active');
  updateIndicator(active);
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.nav-item.active')?.classList.remove('active');
    item.classList.add('active');
    updateIndicator(item);
  });
});