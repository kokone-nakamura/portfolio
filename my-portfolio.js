const toggleBtn = document.getElementById('langToggle');
const enElements = document.querySelectorAll('.en');
const jpElements = document.querySelectorAll('.jp');

toggleBtn.addEventListener('click', function(e) {
  e.preventDefault();
  enElements.forEach(el => el.classList.toggle('d-none'));
  jpElements.forEach(el => el.classList.toggle('d-none'));
});
