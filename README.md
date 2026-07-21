# E-Commerce Product Listing Page

A responsive Product Listing Page for an e-commerce system, built with **React**, **TypeScript**, and **Tailwind CSS v4**. Built as a recruitment task for Cairo University's Technical Center for Career Development (TCCD).

## Features

- 🛍️ Product grid displaying name, price, description, category, and image
- 🛒 Add-to-cart with a live cart count indicator
- 🔍 Filtering by product name, price range, and category
- 📄 Pagination on the listing
- ➕ Add-new-product form with input validation
- 💀 Skeleton loading states for a smooth fetch experience
- 📱 Fully responsive — phone, tablet, and desktop
- ⚡ Data fetched from [DummyJSON Products API](https://dummyjson.com/docs/products)

## Tech Stack

- **React** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS v4** — styling
- **React Hook Form** — form handling and validation
- **React Router** — navigation / stub product details route
- **Axios** — API requests

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

## Project Structure

```
src/
├── api/          # DummyJSON API calls
├── components/   # ProductCard, FilterBar, Pagination, Skeleton, ProductForm
├── context/      # CartContext for cart count state
├── hooks/        # useProducts, useCart
├── pages/        # ProductListingPage
├── types/        # Product, Filters, etc.
└── App.tsx
```

## API Reference

This project uses the public [DummyJSON](https://dummyjson.com/docs/products) API:

| Purpose | Endpoint |
|---|---|
| List products (paginated) | `GET /products?limit=&skip=` |
| Search by name | `GET /products/search?q=` |
| Filter by category | `GET /products/category/{category}` |
| List categories | `GET /products/categories` |

## Notes

- Cart and newly added products are held in local React state — no backend persistence, per task requirements.
- A product details page is not implemented; the "View Details" action is stubbed, per task requirements.

## Author

Built by Nour Abosaif for the TCCD Frontend Level 3 recruitment task.
