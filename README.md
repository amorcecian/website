# Aram Morcecian - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring a resume, contact form, and dark mode toggle.

## Features

- 📱 **Responsive Design** - Works on all devices
- 🌓 **Dark Mode Toggle** - Light/dark theme with persistent preference
- 📧 **Contact Form** - Integrated contact form with email functionality
- ⚡ **Fast Loading** - Optimized static site generation
- 🎨 **Modern UI** - Built with Tailwind CSS and Lucide React icons
- ♿ **Accessible** - WCAG compliant with proper focus management

## Tech Stack

- **Framework**: Next.js 15.3.2
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Language**: JavaScript (React)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aram-website.git
cd aram-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3100](http://localhost:3100) in your browser.

## Available Scripts

- `npm run dev` - Start development server on port 3100
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files to `out/` directory

## Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Push to GitHub**: Push your code to a GitHub repository.

2. **Enable GitHub Pages**: 
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Automatic Deployment**: 
   - Every push to the `main` branch will trigger an automatic deployment
   - The site will be available at `https://yourusername.github.io/repository-name`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build and export the site
npm run build

# The static files will be in the 'out' directory
# Upload the contents of 'out' to your hosting provider
```

## Alternative Deployment Options

### Vercel (Recommended for Next.js)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on every push

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`

### AWS S3 + CloudFront
1. Build the site: `npm run build`
2. Upload the `out` directory contents to S3
3. Configure CloudFront for CDN

## Customization

### Contact Information
Update your contact details in `pages/index.js` and `pages/contact.js`:

```javascript
const resumeData = {
  name: "Your Name",
  contact: {
    phone: "+1234567890",
    email: "your@email.com",
    location: "Your Location",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  // ... rest of your data
};
```

### Resume Content
Modify the `resumeData` object in `pages/index.js` to update:
- Work experience
- Education
- Skills
- Certifications

### Styling
- Colors: Update `tailwind.config.js`
- Fonts: Modify `styles/globals.css`
- Layout: Edit components in the `components/` directory

## Project Structure

```
├── components/          # React components
│   ├── Layout.js       # Main layout wrapper
│   ├── DarkModeToggle.js # Dark mode toggle button
│   └── ThemeContext.js # Theme state management
├── pages/              # Next.js pages
│   ├── index.js        # Resume/homepage
│   ├── contact.js      # Contact page
│   └── _app.js         # App wrapper
├── styles/             # CSS files
│   └── globals.css     # Global styles
├── public/             # Static assets
├── .github/workflows/  # GitHub Actions
└── next.config.mjs     # Next.js configuration
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with deployment, please create an issue in the GitHub repository.

---

Built with ❤️ using Next.js and Tailwind CSS 