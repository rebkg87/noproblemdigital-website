# No Problem Digital Website

Official website of **No Problem Digital**, a creative studio specializing in branding, graphic design, web development, and digital strategy.

Built with **Vite**, **React 19**, and **Tailwind CSS v4**, featuring a custom design system, bilingual support (ES/EN), and fully responsive design.

## Tech Stack

- [Vite](https://vitejs.dev/) - Bundler
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- [React Router v7](https://reactrouter.com/) - Client-side routing
- [React Hook Form](https://react-hook-form.com/) - Form validation
- [EmailJS](https://www.emailjs.com/) - Email sending from client
- [react-i18next](https://react.i18next.com/) - Internationalization (ES/EN)
- [Motion](https://motion.dev/) - Animations
- [yet-another-react-lightbox](https://yet-another-react-lightbox.com/) - Image gallery lightbox

## Project Structure

```
src/
├── assets/            # Images, icons, and static assets
├── componets/         # Reusable UI components
│   ├── common/        # Header, Footer
│   ├── icons/         # Custom SVG icon components
│   └── ui/            # Button, Card, Input, Dropdown, Form, TextSection, etc.
├── hooks/             # Custom hooks (useSectionContent)
├── i18n/              # i18n config and translation files
│   └── locales/       # en.json, es.json
├── layout/            # Layout component (Header + Outlet + Footer)
├── lib/               # Utilities, validation schemas
├── pages/             # Page components
│   ├── about/         # About Us page
│   ├── contact/       # Contact page with form
│   ├── homepage/      # Homepage with sections
│   │   └── sections/  # Hero, Services, Benefits, About, Projects, CTA
│   └── portfolio/     # Portfolio page with project filter
├── providers/         # ThemeProvider
├── router/            # Route definitions
├── styles/            # Global styles and design tokens
└── main.jsx           # Entry point
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, services, benefits, about preview, projects, CTA |
| Portfolio | `/proyectos` | Filterable project gallery with lightbox |
| Contact | `/contacto` | Contact form with validation and EmailJS |
| About Us | `/nosotros` | Studio intro, work process, and team |

## Features

- **Bilingual**: Full ES/EN support with language toggle
- **Responsive**: Mobile-first design with hamburger menu navigation
- **Contact Form**: React Hook Form + EmailJS with i18n validation messages
- **Portfolio**: Filterable by service category with image lightbox gallery
- **Design System**: Custom tokens (colors, typography, shadows) from Figma
- **Scroll to Top**: Automatic scroll reset on route navigation

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

This project is for internal use of No Problem Digital.
All rights reserved &copy; 2025.
