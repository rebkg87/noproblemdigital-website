# 🚀 No Problem Digital Website

This repository contains the official website of **No Problem Digital**, built with a modular and scalable architecture.  
The project is developed with **Vite**, **React**, and **TailwindCSS v4**, following a **feature-based approach** and powered by a **custom Design System**.  



  ## 📂 Project Structure

```bash
src/
├─ app/          # Router and global layout
│  ├─ routes.jsx
│  └─ layout.jsx
│
├─ features/     # Each page/feature with its parts
│  ├─ home/
│  │  ├─ HomePage.jsx
│  │  ├─ components/   # Home subcomponents (hero, sections, etc.)
│  │  └─ translations/ # Translation files
│  ├─ services/
│  └─ about/
│  └─ tokens.css
│
├─ shared/       # Design System, hooks, providers, lib
│  ├─ ui/        # Reusable UI components (buttons, inputs, etc.)
│  ├─ hooks/     # Custom hooks
│  ├─ providers/ # Global providers (ThemeProvider, etc.)
│  └─ lib/       # Utilities, helpers
│
├─ styles/       # Globals styles and tokens
│  └─ tokens.css
│
└─ main.jsx      # Entry point

```

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) → Ultra-fast bundler ⚡  
- [React](https://react.dev/) → UI library  
- [TailwindCSS v4](https://tailwindcss.com/) → CSS-first styling framework  
- [PostCSS](https://postcss.org/) → CSS processing  
- **Athena Design System** → Semantic and primitive tokens integration


## 🚦 Available Scripts

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


---

## 🌙 Theming

- **Design tokens** are defined in `styles/tokens.css` using Tailwind’s `@theme inline` directive.  
- The **ThemeProvider** in `shared/providers` manages light/dark mode and exposes the global theme context.  
- The architecture allows easy scaling into semantic tokens per component.

## 📄 License

This project is for internal use of **No Problem Digital**.  
All rights reserved © 2025.  



