document.addEventListener('DOMContentLoaded', () => {

  // Dark / light mode toggle (unchanged)
  const toggleMode = document.getElementById('toggleMode');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    toggleMode.textContent = '🌞';
  }

  toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    toggleMode.textContent = theme === 'light' ? '🌞' : '🌙';
  });

  // Minimal Wikimedia POD logic (your template)
  const $img = document.getElementById('photo');
  const $desc = document.getElementById('description');
  const $form = document.getElementById('apodForm');
  const $date = document.getElementById('apodDate');

  $form.addEventListener('submit', e => {
    e.preventDefault();

    const value = $date.value;   // yyyy-mm-dd
    if (!value) return;

    const [y, m, d] = value.split('-');

    fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${y}/${m}/${d}`)
      .then(res => res.json())
      .then(data => {

        // Wikimedia stores image here (minimal fix)
        const image =
          data.image?.image?.source ||
          data.image?.thumbnail?.source ||
          '';

        const desc = data.image?.description?.text || '';

        $img.src = image;
        $desc.textContent = desc;

        document.getElementById('apodDisplay').hidden = false;
      })
      .catch(err => {
        console.error('Error:', err);
        $desc.textContent = 'Sorry, something went wrong. Please try again later.';
      });
  });

});