# Hadi Tech - Modern E-commerce Platform

Hadi Tech is a premium, high-performance e-commerce platform built with **Next.js 16+** and **Tailwind CSS 4**. It features a modern, "tech-vibe" aesthetic with smooth animations, dynamic content, and a robust user authentication system powered by **NextAuth.js**.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- MongoDB instance (local or Atlas)
- Google OAuth credentials (optional, for Google Sign-In)

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
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # Database
   MONGODB_URI=your_mongodb_uri
   
   # NextAuth Configuration
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   
   # Google OAuth (Optional)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. **Test Login Credentials** (Mock Authentication):
   - Email: `admin@admin.com`
   - Password: `Admin123@g`

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
- **Search System**: Real-time product search functionality with dedicated search page.
- **Product Details**: Individual product pages with comprehensive information.

### 2. **User Experience & UI**
- **Modern Animations**: Powered by `framer-motion` for sections, modals, and transitions.
- **Responsive Navigation**: Multi-layered navigation (`TopNav`, `SecondNav`, `Navbar`) with mobile optimization.
- **Interactive Modals**: Polished modal system for "Offers" and "Happy Hour" sections triggered from navbar.
- **Interactive Map**: Store location finder using `Leaflet`.
- **Newsletter**: Integrated `TechVibeNewsletter` for user engagement.
- **Carousel Components**: Product showcases using `Swiper` with smooth transitions.
- **Marquee Effects**: Dynamic scrolling text using `react-fast-marquee`.

### 3. **Authentication & Security**
- **NextAuth.js v4 Integration**: Complete authentication system with multiple provider support.
- **Credentials Provider**: Email/password authentication with mock login functionality.
- **Google OAuth**: Social login integration (configurable via environment variables).
- **Middleware Protection**: Route-level protection using Next.js middleware and JWT tokens.
- **Protected Dashboard**: `/dashboard` route secured with automatic redirect to login for unauthenticated users.
- **Session Management**: JWT-based session strategy for optimal performance.
- **Bcrypt Password Hashing**: Secure password storage in MongoDB.
- **Secure Image Configuration**: `remotePatterns` implementation to protect against malicious image sources.

### 4. **Technical Excellence**
- **Next.js 16 App Router**: Utilizing the latest React Server Components for performance.
- **Tailwind CSS 4**: Cutting-edge styling with PostCSS integration and custom design system.
- **Mongoose ODM**: Structured data modeling for products, users, and orders.
- **API Routes**: RESTful API endpoints for products and authentication.
- **SweetAlert2**: Enhanced user notifications and confirmations.
- **Environment-Based Configuration**: Secure credential management with `.env.local`.

---

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router and Server Components
- **[React 19](https://react.dev/)** - Latest React version with enhanced features

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework with PostCSS
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[Swiper](https://swiperjs.com/)** - Modern mobile touch slider
- **[React Fast Marquee](https://www.react-fast-marquee.com/)** - Performant marquee component

### Backend & Database
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)** - MongoDB object modeling for Node.js

### Authentication
- **[NextAuth.js v4](https://next-auth.js.org/)** - Complete authentication solution
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)** - Password hashing library

### Additional Libraries
- **[React Leaflet](https://react-leaflet.js.org/)** - Interactive maps integration
- **[Leaflet](https://leafletjs.com/)** - Mobile-friendly interactive maps
- **[SweetAlert2](https://sweetalert2.github.io/)** - Beautiful, responsive alerts

---

## 📝 Additional Notes

### Security Best Practices
- All sensitive credentials are stored in `.env.local` (never commit this file)
- Middleware-based route protection prevents unauthorized access
- JWT tokens are used for session management
- Image sources are restricted using `remotePatterns` configuration

### Development Tips
- The mock authentication allows quick testing without database setup
- Google OAuth can be enabled by adding credentials to `.env.local`
- All routes are protected by default except public pages (home, login, register)
- The dashboard redirects to `/login` if the user is not authenticated

### Future Enhancements
- Real database integration for user registration
- Shopping cart functionality
- Order management system
- Payment gateway integration
- Admin dashboard for product management
