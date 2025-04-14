import "./style.scss";

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button') as HTMLElement;
    const checkbox = document.getElementById('menuToggle') as HTMLInputElement;
  
    menuButton.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
    });
  });
  