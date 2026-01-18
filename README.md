# Hadi Tech - Modern E-commerce Platform

Hadi Tech is a premium, high-performance e-commerce platform built with **Next.js 15+** and **Tailwind CSS 4**. It features a modern, "tech-vibe" aesthetic with smooth animations, dynamic content, and a robust user authentication system.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- MongoDB instance (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hadi-tech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your MongoDB URI and Auth secrets:
   ```env
   MONGODB_URI=your_mongodb_uri
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🛤️ Route Summary

| Route | Description |
|-------|-------------|
| `/` | Home page with featured products, categories, and newsletter. |
| `/login` | User authentication page (Sign In). |
| `/register` | New user registration page. |
| `/dashboard` | User profile and account management. |
| `/category/[slug]/[id]` | Product listing by category. |
| `/items/[id]` | Individual product details page. |
| `/search` | Global product search results. |

---

## ✨ Implemented Features

### 1. **Core E-commerce Workflow**
- **Dynamic Product Display**: Interactive product cards with hover effects and quick views.
- **Category Browsing**: Featured categories with smooth transitions and filtering.
- **Search System**: Real-time product search functionality.

### 2. **User Experience & UI**
- **Modern Animations**: Powered by `framer-motion` for sections, modals, and transitions.
- **Responsive Navigation**: Multi-layered navigation (`TopNav`, `SecondNav`, `Navbar`) with mobile optimization.
- **Interactive Modals**: Polished modal system for offers, login, and product previews.
- **Interactive Map**: Store location finder using `Leaflet`.
- **Newsletter**: Integrated `TechVibeNewsletter` for user engagement.

### 3. **Authentication & Security**
- **NextAuth.js Integration**: Secure authentication with support for various providers.
- **Protected Routes**: Dashboard and user-specific actions are restricted to authenticated users.
- **Bcrypt Password Hashing**: Secure data storage in MongoDB.

### 4. **Technical Excellence**
- **Next.js App Router**: Utilizing the latest React Server Components for performance.
- **Tailwind CSS 4**: Cutting-edge styling with a custom design system.
- **Mongoose ODM**: Structured data modeling for products, users, and orders.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [MongoDB](https://www.mongodb.com/) / [Mongoose](https://mongoosejs.com/)
- **Auth**: [NextAuth.js](https://next-auth.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Maps**: [React Leaflet](https://react-leaflet.js.org/)
