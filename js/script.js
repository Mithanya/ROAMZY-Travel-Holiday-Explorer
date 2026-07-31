const destinations = [
  { name: 'Amalfi Coast', country: 'Italy', category: 'Beach', image: 'assets/images/amalfi.jpg', description: 'A stunning Italian coastline with colorful villages, crystal waters and luxury seaside experiences.' },
  { name: 'Paris', country: 'France', category: 'City', image: 'assets/images/paris.jpg', description: 'The city of love featuring iconic architecture, culture and unforgettable experiences.' },
  { name: 'Kyoto', country: 'Japan', category: 'Culture', image: 'assets/images/kyoto.jpg', description: 'Ancient temples, traditional gardens and Japanese heritage.' },
  { name: 'Maldives', country: 'Maldives', category: 'Beach', image: 'assets/images/maldives.jpg', description: 'Private islands, luxury resorts and crystal clear ocean views.' },
  { name: 'Swiss Alps', country: 'Switzerland', category: 'Mountain', image: 'assets/images/swiss.jpg', description: 'Snow covered mountains, peaceful villages and adventure experiences.' },
  { name: 'Santorini', country: 'Greece', category: 'Beach', image: 'assets/images/santorini.jpg', description: 'Beautiful white buildings, blue domes and amazing sunset views.' },
  { name: 'Bali', country: 'Indonesia', category: 'Beach', image: 'assets/images/bali.jpg', description: 'Tropical paradise with beaches, temples and cultural experiences.' },
  { name: 'Dubai', country: 'UAE', category: 'City', image: 'assets/images/dubai.jpg', description: 'Luxury shopping, futuristic architecture and premium experiences.' },
  { name: 'Norway', country: 'Norway', category: 'Mountain', image: 'assets/images/norway.jpg', description: 'Beautiful fjords, northern lights and breathtaking landscapes.' },
  { name: 'London', country: 'United Kingdom', category: 'City', image: 'assets/images/london.jpg', description: 'Historic landmarks combined with modern city life.' },
  { name: 'Singapore', country: 'Singapore', category: 'City', image: 'assets/images/singapore.jpg', description: 'Modern skyline, gardens and world-class attractions.' },
  { name: 'New York', country: 'USA', category: 'City', image: 'assets/images/newyork.jpg', description: 'The city that never sleeps with iconic landmarks.' },
];

const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCountry = document.getElementById('modalCountry');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');
const reviewForm = document.querySelector('.review-form');
const ctaBtn = document.querySelector('.cta-btn');

function getSearchQuery() {
  return searchInput.value.trim().toLowerCase();
}

function getFilteredDestinations() {
  const query = getSearchQuery();
  return destinations.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(query) || place.country.toLowerCase().includes(query);
    return matchesSearch;
  });
}

function renderGallery(data) {
  gallery.innerHTML = data.map((place, index) => `
    <div class="card">
        <img src="${place.image}" alt="${place.name}" loading="lazy">
      <div class="card-body">
        <h3>${place.name}</h3>
        <p>${place.country}</p>
        <span class="category">${place.category}</span>
        <div class="card-actions">
          <button class="wishlist" data-index="${index}">♡</button>
          <button class="explore-btn" data-index="${index}">View</button>
        </div>
      </div>
    </div>
  `).join('');
}

function updateGallery() {
  renderGallery(getFilteredDestinations());
}

function openModal(place) {
  modalImage.src = place.image;
  modalTitle.textContent = place.name;
  modalCountry.textContent = place.country;
  modalDescription.textContent = place.description;
  modal.classList.add('show');
}

function closeModalWindow() {
  modal.classList.remove('show');
}

function toggleWishlist(button) {
  button.classList.toggle('active');
  button.textContent = button.classList.contains('active') ? '♥' : '♡';
}

searchInput.addEventListener('input', updateGallery);
searchBtn.addEventListener('click', updateGallery);

gallery.addEventListener('click', event => {
  const exploreButton = event.target.closest('.explore-btn');
  if (exploreButton) {
    const index = Number(exploreButton.dataset.index);
    const destination = getFilteredDestinations()[index];
    if (destination) openModal(destination);
    return;
  }

  const wishlistButton = event.target.closest('.wishlist');
  if (wishlistButton) {
    toggleWishlist(wishlistButton);
  }
});

closeModal.addEventListener('click', closeModalWindow);
modal.addEventListener('click', event => {
  if (event.target === modal) closeModalWindow();
});

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', navLinks.classList.contains('active'));
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

reviewForm?.addEventListener('submit', event => {
  event.preventDefault();
  alert('Thank you — your review has been submitted.');
  reviewForm.reset();
});

ctaBtn?.addEventListener('click', () => {
  const reviewsSection = document.getElementById('reviews');
  if (reviewsSection) {
    reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    alert('Your quote request has been received. One of our TravelVista specialists will contact you soon.');
  }
});

document.addEventListener('click', event => {
  if (event.target.classList.contains('book-btn')) {
    alert('Your journey request has been received. Our travel team will contact you.');
  }
});

updateGallery();

// Scroll reveal (IntersectionObserver) and parallax effect for hero
function initScrollEffects(){
  // Reveal elements
  const srElems = document.querySelectorAll('.sr');
  if('IntersectionObserver' in window && srElems.length){
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('reveal');
          obs.unobserve(e.target);
        }
      });
    }, {root:null, rootMargin:'0px 0px -8% 0px', threshold:0.08});
    srElems.forEach(el => io.observe(el));
  } else {
    // fallback: reveal immediately
    srElems.forEach(el => el.classList.add('reveal'));
  }

  // Simple parallax for hero content
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  if(hero && heroContent){
    let lastY = 0;
    let ticking = false;
    window.addEventListener('scroll', () => {
      lastY = window.scrollY;
      if(!ticking){
        window.requestAnimationFrame(() => {
          const move = Math.min(40, lastY * 0.08);
          heroContent.style.transform = `translateY(${move}px)`;
          // gentle background shift
          hero.style.backgroundPosition = `center calc(50% + ${move * 0.25}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, {passive:true});
  }
}

// Initialize on DOM ready
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initScrollEffects);
} else {
  initScrollEffects();
}
