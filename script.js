// ===== NAV SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

// ===== PRODUCT FILTER =====
function filterProducts(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#products-grid .product-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// ===== FORM SUBMIT SIMULATION =====
function submitForm(e) {
  e.preventDefault();
  const success = document.getElementById('form-success');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => { success.style.display = 'none'; }, 6000);
}

// ===== ACTIVE NAV LINK HIGHLIGHT ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sections.forEach(section => {
    const h = section.offsetHeight;
    const top = section.offsetTop - 80;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = (scrollY > top && scrollY < top + h) ? 'white' : '';
    }
  });
});
