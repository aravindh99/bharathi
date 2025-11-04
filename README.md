# Bharathi Computer Center Website

A production-ready, bilingual (English/Tamil) React.js website for Bharathi Computer Center in Vijayamangalam, Tamil Nadu.

## Features

- 🌐 **Bilingual Support**: English and Tamil language switching
- 📱 **Mobile-First Design**: Responsive design optimized for all devices
- ♿ **Accessible**: WCAG AA compliant with keyboard navigation
- ⚡ **Fast Performance**: Optimized for speed with lazy loading and code splitting
- 🎨 **Modern Design**: Warm teal and saffron color scheme with smooth animations
- 🔍 **SEO Optimized**: LocalBusiness JSON-LD schema and meta tags

## Tech Stack

- **React 18** with Vite
- **React Router** for navigation
- **React Icons** for icons
- **React Helmet Async** for SEO
- **CSS3** with custom properties and animations

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
bharathi/
├── public/
│   └── images/          # Gallery images (placeholders)
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── styles/         # CSS files
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Adding Images

Place your gallery images in `public/images/`:
- `computer-image-1.jpg` through `computer-image-6.jpg`
- `image-1.jpg` through `image-6.jpg`

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically detect Vite and configure build settings

Or deploy manually:
```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## Contact Information

- **Phone**: 98949 209144
- **Email**: bharathicentre@gmail.com
- **Address**: Near Bus Stop, Vijayamangalam, Tamil Nadu 638056
- **Hours**: 10:00 AM - 7:00 PM (All days)

## License

All rights reserved © Bharathi Computer Center

