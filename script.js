/**
 * Chinmay Vinayak Thukaru - Portfolio JavaScript
 * Interactivity: Navbar Scroll, Skill Filtering, Form Validation & Effects
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById('mainNav');
  const backToTopBtn = document.getElementById('backToTop');

  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      if (backToTopBtn) backToTopBtn.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      if (backToTopBtn) backToTopBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // 2. Auto-close mobile navbar on link click
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
  const navbarCollapse = document.getElementById('navbarContent');

  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }

  // 3. Interactive Skill Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillItems = document.querySelectorAll('.skill-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 4. Contact Form Validation & Submission Feedback
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }

      contactForm.classList.add('was-validated');

      // Loading state
      const btnText = submitBtn.querySelector('.btn-text');
      const spinner = submitBtn.querySelector('.spinner-border');

      btnText.classList.add('d-none');
      spinner.classList.remove('d-none');
      submitBtn.disabled = true;

      // Simulate sending
      setTimeout(() => {
        spinner.classList.add('d-none');
        btnText.classList.remove('d-none');
        submitBtn.disabled = false;

        // Show success alert
        if (formAlert) {
          formAlert.classList.remove('d-none');
        }

        // Reset form
        contactForm.reset();
        contactForm.classList.remove('was-validated');

        // Scroll alert into view smoothly if on mobile
        formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 900);
    });
  }

  // Console Easter Egg for Professor / Evaluator
  console.log(
    '%c🎬 Chinmay Vinayak Thukaru | Portfolio %c\n' +
    'Designed with HTML5, CSS3, and Bootstrap 5.\n' +
    'GitHub: https://github.com/chinmay337\n' +
    'Project: Lok Netra — Civic Engagement Hub',
    'background: #f59e0b; color: #000; font-weight: bold; font-size: 14px; padding: 4px 8px; border-radius: 4px;',
    'color: #38bdf8; font-size: 12px;'
  );
});
