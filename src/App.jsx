import { useEffect, useMemo, useState } from 'react';

const destinations = [
  {
    name: 'Amalfi Coast',
    country: 'Italy',
    category: 'Beach Escape',
    image: '/assets/images/amalfi.jpg',
    price: 2240,
    days: '7 Days / 6 Nights',
    rating: '4.9',
    description: 'A stunning Italian coastline with colorful villages, crystal waters and luxury seaside experiences.',
  },
  {
    name: 'Paris',
    country: 'France',
    category: 'City Break',
    image: '/assets/images/paris.jpg',
    price: 1980,
    days: '6 Days / 5 Nights',
    rating: '4.8',
    description: 'The city of love featuring iconic architecture, culture and unforgettable experiences.',
  },
  {
    name: 'Kyoto',
    country: 'Japan',
    category: 'Culture',
    image: '/assets/images/kyoto.jpg',
    price: 2520,
    days: '8 Days / 7 Nights',
    rating: '4.9',
    description: 'Ancient temples, traditional gardens and Japanese heritage.',
  },
  {
    name: 'Maldives',
    country: 'Maldives',
    category: 'Beach Escape',
    image: '/assets/images/maldives.jpg',
    price: 3140,
    days: '5 Days / 4 Nights',
    rating: '5.0',
    description: 'Private islands, luxury resorts and crystal clear ocean views.',
  },
  {
    name: 'Swiss Alps',
    country: 'Switzerland',
    category: 'Mountain',
    image: '/assets/images/swiss.jpg',
    price: 2760,
    days: '7 Days / 6 Nights',
    rating: '4.9',
    description: 'Snow covered mountains, peaceful villages and adventure experiences.',
  },
  {
    name: 'Santorini',
    country: 'Greece',
    category: 'Beach Escape',
    image: '/assets/images/santorini.jpg',
    price: 2360,
    days: '6 Days / 5 Nights',
    rating: '4.8',
    description: 'Beautiful white buildings, blue domes and amazing sunset views.',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    category: 'Wellness',
    image: '/assets/images/bali.jpg',
    price: 2110,
    days: '6 Days / 5 Nights',
    rating: '4.7',
    description: 'Tropical paradise with beaches, temples and cultural experiences.',
  },
  {
    name: 'Dubai',
    country: 'UAE',
    category: 'Luxury City',
    image: '/assets/images/dubai.jpg',
    price: 2940,
    days: '5 Days / 4 Nights',
    rating: '4.9',
    description: 'Luxury shopping, futuristic architecture and premium experiences.',
  },
  {
    name: 'Norway',
    country: 'Norway',
    category: 'Adventure',
    image: '/assets/images/norway.jpg',
    price: 2890,
    days: '8 Days / 7 Nights',
    rating: '4.8',
    description: 'Beautiful fjords, northern lights and breathtaking landscapes.',
  },
  {
    name: 'London',
    country: 'United Kingdom',
    category: 'City Break',
    image: '/assets/images/london.jpg',
    price: 1760,
    days: '5 Days / 4 Nights',
    rating: '4.7',
    description: 'Historic landmarks combined with modern city life.',
  },
  {
    name: 'Singapore',
    country: 'Singapore',
    category: 'Luxury City',
    image: '/assets/images/singapore.jpg',
    price: 2660,
    days: '5 Days / 4 Nights',
    rating: '4.8',
    description: 'Modern skyline, gardens and world-class attractions.',
  },
  {
    name: 'New York',
    country: 'USA',
    category: 'City Break',
    image: '/assets/images/newyork.jpg',
    price: 2180,
    days: '7 Days / 6 Nights',
    rating: '4.8',
    description: 'The city that never sleeps with iconic landmarks.',
  },
];

const departures = [
  { date: '12 Nov 2026', title: 'Europe Explorer — 10 Days', seats: '8 seats left', price: 3190 },
  { date: '24 Nov 2026', title: 'Bali & Singapore Combo', seats: '12 seats left', price: 1890 },
  { date: '05 Dec 2026', title: 'Swiss Winter Wonderland', seats: '5 seats left', price: 2760 },
  { date: '18 Dec 2026', title: 'Dubai Luxury New Year', seats: '16 seats left', price: 2450 },
];

const testimonials = [
  {
    quote:
      'From the first call to the final airport transfer, everything was handled with remarkable attention to detail. The Amalfi itinerary was flawless.',
    name: 'Aarav Sharma',
    role: 'Mumbai, India',
  },
  {
    quote:
      'We booked our honeymoon to the Maldives and the team upgraded our villa without us even asking. Truly a five-star experience end to end.',
    name: 'Diya & Karan',
    role: 'Bengaluru, India',
  },
  {
    quote:
      'The group departure to Switzerland was perfectly paced — great hotels, private transfers and a guide who knew every viewpoint.',
    name: 'Rahul Menon',
    role: 'Chennai, India',
  },
];

const whyUs = [
  { icon: '★', title: 'Best Price Guarantee', text: 'Direct contracts with airlines and hotels mean premium experiences at the sharpest price.' },
  { icon: '✦', title: 'Handpicked Stays', text: 'Every property is inspected by our travel designers before it reaches your itinerary.' },
  { icon: '☎', title: '24/7 Concierge', text: 'A dedicated trip manager stays with you on WhatsApp through the entire journey.' },
  { icon: '✓', title: 'Flexible Booking', text: 'Free date changes up to 30 days before departure on most curated packages.' },
];

function App() {
  const [query, setQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [wishlist, setWishlist] = useState({});
  const [currency, setCurrency] = useState('USD');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedPlace ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPlace]);

  const filteredDestinations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return destinations;

    return destinations.filter(
      (place) =>
        place.name.toLowerCase().includes(normalizedQuery) ||
        place.country.toLowerCase().includes(normalizedQuery) ||
        place.category.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  const toggleWishlist = (placeName) => {
    setWishlist((current) => ({ ...current, [placeName]: !current[placeName] }));
  };

  const formatPrice = (amount) => {
    const usdValue = Number(amount) || 0;

    if (currency === 'INR') {
      return `₹${Math.round(usdValue * 82).toLocaleString('en-IN')}`;
    }

    return `$${usdValue.toLocaleString('en-US')}`;
  };

  const closeModal = () => {
    setSelectedPlace(null);
    setBookingSubmitted(false);
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <a href="mailto:hello@travelvista.com">hello@travelvista.com</a>
          <a href="tel:+919876543210">+91 98765 43210</a>
          <span className="topbar-note">24/7 trip support</span>
          <div className="currency-toggle" role="group" aria-label="Currency">
            <button
              type="button"
              className={currency === 'INR' ? 'active' : ''}
              aria-pressed={currency === 'INR'}
              onClick={() => setCurrency('INR')}
            >
              Indian ₹
            </button>
            <button
              type="button"
              className={currency === 'USD' ? 'active' : ''}
              aria-pressed={currency === 'USD'}
              onClick={() => setCurrency('USD')}
            >
              Dollar $
            </button>
          </div>
        </div>
      </div>

      <header className="site-header">
        <nav className="navbar" aria-label="Primary navigation">
          <div className="logo">
            <a href="#home">
              Travel<span>Vista</span>
            </a>
          </div>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#packages" onClick={() => setMenuOpen(false)}>Packages</a></li>
            <li><a href="#departures" onClick={() => setMenuOpen(false)}>Group Tours</a></li>
            <li><a href="#journeys" onClick={() => setMenuOpen(false)}>Plan Trip</a></li>
            <li><a href="#reviews" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            <a className="nav-cta" href="#packages">Book Now</a>
            <button
              type="button"
              className="menu-btn"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner">
            <p className="hero-kicker">No.1 Curated Travel Experiences</p>
            <h1>Welcome to TravelVista</h1>
            <p className="hero-sub">
              Handcrafted itineraries, private stays and premium group departures across 120+ destinations — planned end to end by travel designers.
            </p>

            <div className="search-box" role="search" aria-label="Search destinations">
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search destination, country or experience..."
                aria-label="Search destination"
              />
              <button type="button" onClick={() => setQuery(query)}>Search Tours</button>
            </div>

            <ul className="hero-stats">
              <li><strong>18+</strong><span>Years of expertise</span></li>
              <li><strong>65k+</strong><span>Happy travellers</span></li>
              <li><strong>4.9/5</strong><span>Average rating</span></li>
              <li><strong>120+</strong><span>Destinations</span></li>
            </ul>
          </div>
        </section>

        <section className="section" id="packages">
          <div className="section-head">
            <div>
              <p className="eyebrow">Popular Packages</p>
              <h2>Trending tours travellers love</h2>
            </div>
            <a className="link-btn" href="#departures">View group departures</a>
          </div>

          <div className="gallery" aria-live="polite" aria-label="Destination gallery">
            {filteredDestinations.map((place) => (
              <article key={place.name} className="card">
                <div className="card-media">
                  <img src={place.image} alt={place.name} loading="lazy" />
                  <span className="card-badge">{place.category}</span>
                  <button
                    type="button"
                    className={`wishlist ${wishlist[place.name] ? 'active' : ''}`}
                    onClick={() => toggleWishlist(place.name)}
                    aria-label={`Toggle wishlist for ${place.name}`}
                  >
                    {wishlist[place.name] ? '♥' : '♡'}
                  </button>
                </div>

                <div className="card-body">
                  <div className="card-meta">
                    <span>{place.days}</span>
                    <span className="card-rating">★ {place.rating}</span>
                  </div>

                  <h3>{place.name}</h3>
                  <p className="country">{place.country}</p>
                  <p className="card-text">{place.description}</p>

                  <div className="card-footer">
                    <div className="price">
                      <span>From</span>
                      <strong>{formatPrice(place.price)}</strong>
                      <small>per person</small>
                    </div>
                    <button type="button" className="btn btn-yellow" onClick={() => setSelectedPlace(place)}>
                      View itinerary
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <p className="empty-note">No packages match “{query}”. Try another destination.</p>
          )}
        </section>

        <section className="section section-soft" id="why">
          <div className="section-head center">
            <div>
              <p className="eyebrow">Stress-free holidays</p>
              <h2>Why travellers book with TravelVista</h2>
            </div>
          </div>

          <div className="why-grid">
            {whyUs.map((item) => (
              <div className="why-card" key={item.title}>
                <span className="why-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="departures">
          <div className="section-head">
            <div>
              <p className="eyebrow">GT-style Group Departures</p>
              <h2>Fixed-date premium group tours</h2>
            </div>
            <a className="link-btn" href="#journeys">Plan a private trip</a>
          </div>

          <div className="departure-grid">
            {departures.map((trip) => (
              <div className="departure-card" key={trip.title}>
                <div className="departure-date">
                  <strong>{trip.date.split(' ')[0]}</strong>
                  <span>{trip.date.split(' ').slice(1).join(' ')}</span>
                </div>
                <div className="departure-info">
                  <h3>{trip.title}</h3>
                  <p className="seats">{trip.seats}</p>
                </div>
                <div className="departure-price">
                  <span>From</span>
                  <strong>{formatPrice(trip.price)}</strong>
                </div>
                <a className="btn btn-navy" href="#contact">Enquire</a>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-soft" id="journeys">
          <div className="planner">
            <div className="planner-copy">
              <p className="eyebrow">Daily deals</p>
              <h2>Build your next itinerary with confidence.</h2>
              <p>
                Pick a destination, travel date and budget — our trip designers reply with a tailored itinerary and the best available price within 24 hours.
              </p>
              <ul className="planner-points">
                <li>Free consultation with a dedicated travel designer</li>
                <li>Transparent costing — no hidden surcharges</li>
                <li>Insta-confirm on selected hotels and transfers</li>
              </ul>
            </div>

            <div className="booking-form-card">
              <div className="booking-form-grid">
                <label>
                  Destination
                  <select defaultValue="Bali">
                    <option>Bali</option>
                    <option>Maldives</option>
                    <option>Amalfi Coast</option>
                    <option>Paris</option>
                    <option>Dubai</option>
                  </select>
                </label>

                <label>
                  Departure
                  <input type="date" defaultValue="2026-11-12" />
                </label>

                <label>
                  Travelers
                  <select defaultValue="2 Guests">
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>Couple</option>
                  </select>
                </label>

                <label>
                  Budget
                  <select defaultValue="Luxury">
                    <option>Luxury</option>
                    <option>Premium</option>
                    <option>Signature</option>
                  </select>
                </label>
              </div>

              <div className="booking-summary">
                <div className="summary-row">
                  <span>Estimated trip</span>
                  <strong>{formatPrice(2640)}</strong>
                </div>
                <div className="summary-row">
                  <span>Private transfers</span>
                  <strong>{formatPrice(310)}</strong>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <strong>{formatPrice(2950)}</strong>
                </div>
              </div>

              <button type="button" className="btn btn-yellow full-width">Check availability</button>
            </div>
          </div>
        </section>

        <section className="deal-banner" id="deals">
          <div>
            <p className="eyebrow light">Limited time offer</p>
            <h2>Flat 15% off on all winter departures</h2>
            <p>Use code <strong>TRAVEL15</strong> at checkout — valid on group tours booked before 31 Oct.</p>
          </div>
          <a className="btn btn-navy btn-lg" href="#packages">Claim the deal</a>
        </section>

        <section className="section" id="reviews">
          <div className="section-head center">
            <div>
              <p className="eyebrow">Our happy clients</p>
              <h2>Trusted by travellers worldwide</h2>
            </div>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <figure className="testimonial-card" key={item.name}>
                <div className="stars">★★★★★</div>
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      {selectedPlace && (
        <div className="modal show" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-describedby="modalDescription" onClick={closeModal}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button className="close-btn" type="button" onClick={closeModal} aria-label="Close modal">
              ×
            </button>
            <img src={selectedPlace.image} alt={selectedPlace.name} />

            {!bookingSubmitted ? (
              <>
                <div className="modal-topline">
                  <span>Best seller</span>
                  <span>4.9 / 5 reviews</span>
                </div>

                <h2 id="modalTitle">{selectedPlace.name}</h2>
                <p className="modal-country">{selectedPlace.country}</p>
                <p id="modalDescription">{selectedPlace.description}</p>

                <div className="modal-meta-grid">
                  <div>
                    <span>Duration</span>
                    <strong>{selectedPlace.days}</strong>
                  </div>
                  <div>
                    <span>Travelers</span>
                    <strong>2 adults</strong>
                  </div>
                  <div>
                    <span>Includes</span>
                    <strong>Hotel + transfers</strong>
                  </div>
                </div>

                <div className="price-card">
                  <div className="price-row">
                    <span>Base package</span>
                    <strong>{formatPrice(selectedPlace.price)}</strong>
                  </div>
                  <div className="price-row">
                    <span>Private transfer</span>
                    <strong>{formatPrice(Math.round(selectedPlace.price * 0.12))}</strong>
                  </div>
                  <div className="price-row">
                    <span>Premium experience</span>
                    <strong>{formatPrice(Math.round(selectedPlace.price * 0.18))}</strong>
                  </div>
                  <div className="price-row total">
                    <span>Total</span>
                    <strong>{formatPrice(Math.round(selectedPlace.price * 1.3))}</strong>
                  </div>
                </div>

                <div className="checkout-panel">
                  <div className="checkout-grid">
                    <label>
                      Full name
                      <input type="text" defaultValue="Aarav Sharma" />
                    </label>
                    <label>
                      Email
                      <input type="email" defaultValue="aarav@example.com" />
                    </label>
                    <label>
                      Phone
                      <input type="tel" defaultValue="+91 98765 43210" />
                    </label>
                    <label>
                      Travel date
                      <input type="date" defaultValue="2026-11-12" />
                    </label>
                  </div>

                  <div className="payment-box">
                    <p>Secure payment</p>
                    <div className="payment-grid">
                      <label className="payment-full">
                        Card number
                        <input type="text" defaultValue="4242 4242 4242 4242" />
                      </label>
                      <label>
                        Expiry
                        <input type="text" defaultValue="12/29" />
                      </label>
                      <label>
                        CVV
                        <input type="text" defaultValue="428" />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <button type="button" className="btn btn-yellow" onClick={() => setBookingSubmitted(true)}>Confirm booking</button>
                  <button type="button" className="btn btn-outline" onClick={closeModal}>Save for later</button>
                </div>
              </>
            ) : (
              <div className="booking-success">
                <span className="success-badge">Booking confirmed</span>
                <h3>Your trip to {selectedPlace.name} is reserved.</h3>
                <p>
                  A travel advisor will contact you shortly with the final itinerary, payment details, and travel confirmation.
                </p>
                <button type="button" className="btn btn-yellow" onClick={closeModal}>Done</button>
              </div>
            )}
          </div>
        </div>
      )}

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Let our advisors plan your next journey.</h2>
            <p className="contact-lead">
              Tell us where you want to go — a dedicated travel designer replies with a tailored itinerary
              and the best price within 24 hours.
            </p>

            <div className="contact-info-grid">
              <div className="info-card">
                <span>Call us</span>
                <strong><a href="tel:+919876543210">+91 98765 43210</a></strong>
                <small>Mon – Sun, 9:00 AM – 9:00 PM IST</small>
              </div>
              <div className="info-card">
                <span>Email</span>
                <strong><a href="mailto:hello@travelvista.com">hello@travelvista.com</a></strong>
                <small>Replies within 2 hours</small>
              </div>
              <div className="info-card">
                <span>Head office</span>
                <strong>42 Anna Salai, Chennai 600002</strong>
                <small>Tamil Nadu, India</small>
              </div>
              <div className="info-card">
                <span>WhatsApp</span>
                <strong>+91 98765 43210</strong>
                <small>24/7 support while travelling</small>
              </div>
            </div>

            <div className="contact-flags">
              <span>AITA accredited</span>
              <span>IATA agent</span>
              <span>ISO 9001 certified</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setContactSent(true); }}>
            {contactSent ? (
              <div className="contact-success" role="status">
                <span className="success-badge">Enquiry received</span>
                <h3>Thank you — we'll call you shortly.</h3>
                <p>A travel designer will reach out within 24 hours with a tailored itinerary and the best available price.</p>
                <button type="button" className="btn btn-outline" onClick={() => setContactSent(false)}>Send another enquiry</button>
              </div>
            ) : (
              <>
                <h3>Request a call back</h3>

                <div className="form-row">
                  <label>
                    Full name
                    <input type="text" placeholder="Your name" required />
                  </label>
                  <label>
                    Phone
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Email
                    <input type="email" placeholder="you@example.com" required />
                  </label>
                  <label>
                    Destination
                    <select defaultValue="">
                      <option value="" disabled>Select destination</option>
                      <option>Bali</option>
                      <option>Maldives</option>
                      <option>Amalfi Coast</option>
                      <option>Paris</option>
                      <option>Dubai</option>
                      <option>Switzerland</option>
                    </select>
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Travel month
                    <input type="month" defaultValue="2026-11" />
                  </label>
                  <label>
                    Budget
                    <select defaultValue="2-3 Lakh">
                      <option>Under 1 Lakh</option>
                      <option>1-2 Lakh</option>
                      <option>2-3 Lakh</option>
                      <option>3 Lakh+</option>
                    </select>
                  </label>
                </div>

                <label>
                  Message
                  <textarea rows="4" placeholder="Tell us about your dream trip..." />
                </label>

                <button type="submit" className="btn btn-yellow full-width">Get a free itinerary</button>
                <p className="form-note">No spam — your details are used only to plan your trip.</p>
              </>
            )}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#home">
              Travel<span>Vista</span>
            </a>
            <p>
              Luxury travel designers crafting private holidays, honeymoons and premium group departures since 2008.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#why">About us</a></li>
              <li><a href="#reviews">Testimonials</a></li>
              <li><a href="#contact">Careers</a></li>
              <li><a href="#contact">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4>Destinations</h4>
            <ul>
              <li><a href="#packages">Europe</a></li>
              <li><a href="#packages">Asia</a></li>
              <li><a href="#packages">Middle East</a></li>
              <li><a href="#packages">Americas</a></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#journeys">Plan a trip</a></li>
              <li><a href="#departures">Group tours</a></li>
              <li><a href="#deals">Daily deals</a></li>
              <li><a href="#contact">24/7 helpline</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TravelVista. All rights reserved.</p>
          <p>Privacy · Terms · Cancellation policy</p>
        </div>
      </footer>
    </>
  );
}

export default App;