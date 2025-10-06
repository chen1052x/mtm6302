

document.addEventListener('DOMContentLoaded', () => {

  const toggleMode = document.getElementById('toggleMode');

  // Toggle dark/light mode on button click
  toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    toggleMode.textContent = theme === 'light' ? '🌞' : '🌙';
  });

});