import "./style.scss";

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button') as HTMLElement;
    const checkbox = document.getElementById('menuToggle') as HTMLInputElement;
  
    menuButton.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
    });
  });
  
// Light/dark mode
const toggleButton = document.getElementById('theme-toggle') as HTMLButtonElement;
const themeIcon = document.getElementById('theme-icon') as HTMLElement;

function updateTheme(theme: 'light' | 'dark') {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = 'dark_mode';
  } else {
    document.body.classList.remove('dark-mode');
    themeIcon.textContent = 'light_mode';
  }
  localStorage.setItem('theme', theme);
}

toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  updateTheme(isDark ? 'light' : 'dark');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    updateTheme(savedTheme);
  } else {
    updateTheme(prefersDark ? 'dark' : 'light');
  }
});
