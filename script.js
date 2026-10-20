const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menuToggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('interest-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email');
  const message = document.getElementById('form-message');
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }
  message.textContent = 'Thanks for your interest. This preview is not connected to a mailing list yet, so your email has not been submitted.';
  email.value = '';
});
