// Switch between tabs (pages)
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('show', p.id === id));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.page === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide SOP details in Premium Library
function toggleDetails(btn) {
  const details = btn.nextElementSibling;
  const isOpen = details.classList.toggle('open');
  btn.textContent = isOpen ? 'Hide Details' : 'View Details';
}

// Open the Home page on load
showPage('home');
