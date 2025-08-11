// ---------- Menú ----------
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
  };

  window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
  });
}

// ---------- Acordeón de productos ----------
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    // Accesibilidad
    if (!btn.hasAttribute('tabindex')) btn.setAttribute('tabindex', '0');
    if (!btn.hasAttribute('role')) btn.setAttribute('role', 'button');

    const toggle = (ev) => {
      ev.preventDefault();
      const card = btn.closest('.expandable');
      if (card) {
        card.classList.toggle('active');
      }
    };

    // Click
    btn.addEventListener('click', toggle);

    // Teclado (Enter o Space)
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(e);
      }
    });
  });
});
