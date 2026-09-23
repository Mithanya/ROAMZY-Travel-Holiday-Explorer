<div align="center">

# ROAMZY — Travel Holiday Explorer

**A premium travel booking experience — curated tour packages, fixed-date group departures
and a complete enquiry-to-booking flow, built with React + Vite.**

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#license)

[Demo](#-demo) • [Features](#-features) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## Overview

ROAMZY is a fully responsive, production-ready travel website inspired by leading holiday
operators. It combines a luxury editorial design system with the real functionality a travel
business needs: destination discovery, live search, dual-currency pricing, wishlists, group
departure listings, a trip planner with instant price estimates, and an end-to-end booking
modal with checkout and confirmation states.

## Features

- **Premium responsive UI** — navy/gold brand system, Playfair Display + Manrope typography,
  fully adaptive layouts (desktop · tablet · mobile).
- **Destination catalogue** — 12 curated packages across 4 continents with category badges,
  ratings, durations and per-person pricing.
- **Instant search** — live filtering by destination, country or experience category.
- **Dual currency** — one-click **Indian ₹ / Dollar $** toggle re-prices every element on the
  page (packages, departures, planner, checkout).
- **Wishlist** — per-destination save/remove with persistent state during the session.
- **Group departures** — fixed-date listings with seat-availability urgency and pricing.
- **Trip planner** — destination, date, travellers and budget selector with a live cost
  breakdown.
- **Booking modal** — itinerary details, price breakdown, traveller details, secure-payment
  panel and a confirmation success state.
- **Contact & enquiry** — full call-back form with validation, plus office, phone, email and
  WhatsApp cards.
- **Daily deals banner** — promotional offer section with coupon call-to-action.
- **Testimonials & trust signals** — client reviews, accreditation pills and stat highlights.

## Demo

```bash
# Local development
npm install
npm run dev        # -> http://localhost:5173

# Production preview
npm run build
npm run preview    # -> http://localhost:4173
```

## Tech Stack

| Layer      | Technology                                    |
| ---------- | --------------------------------------------- |
| Framework  | React 18.3 (function components + hooks)      |
| Build tool | Vite 5.4                                      |
| Styling    | Modern CSS — custom properties, Grid, Flexbox |
| Typography | Playfair Display, Manrope (Google Fonts)      |
| State      | Local React state (`useState`, `useMemo`)     |
| Deployment | Any static host (Vercel, Netlify, GH Pages)   |

## Project Structure

```
Travel/
├── index.html                 # Document shell, SEO meta, font preconnect
├── package.json               # Scripts & dependencies
├── vite.config.js             # Vite + React plugin configuration
├── public/
│   └── assets/images/         # Destination & hero imagery (shipped as-is)
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # All page sections, data & interactions
│   └── index.css              # Full design system & responsive styles
└── README.md
```

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start dev server with hot reload     |
| `npm run build`   | Create optimized production bundle   |
| `npm run preview` | Serve the production build locally   |

## Design System

| Token        | Value                      | Usage                        |
| ------------ | -------------------------- | ---------------------------- |
| Navy         | `#1a2b48`                  | Headers, dark surfaces       |
| Deep navy    | `#12203a`                  | Top bar, footer              |
| Gold         | `#ffcc00`                  | Primary CTAs, accents        |
| Crimson      | `#cc0033`                  | Eyebrows, urgency cues       |
| Surface      | `#ffffff` / `#f5f7fa`      | Cards & alternating bands    |
| Text / Muted | `#1c1c1c` / `#5e6d77`      | Body copy                    |

## Roadmap

- [ ] Backend API for enquiries and bookings
- [ ] User accounts with saved wishlists
- [ ] Payment gateway integration (Razorpay / Stripe)
- [ ] Itinerary detail pages with day-by-day plans
- [ ] Blog / travel guides module
- [ ] Automated image optimization (WebP/AVIF)

## Contributing

Contributions are welcome. Fork the repository, create a feature branch and open a pull request.
Please keep the existing component structure and design tokens consistent.

## License

Distributed under the MIT License. See `LICENSE` for details.

---

<div align="center">

**Made for travellers everywhere**

[ROAMZY](https://github.com/Mithanya/ROAMZY-Travel-Holiday-Explorer)

</div>