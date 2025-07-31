# Houston Dental Boost 🦷

A modern, professional dental practice website built with React and TypeScript, designed to help Houston dental practices establish a strong online presence and attract new patients.

## 🚀 Project Overview

Houston Dental Boost is a comprehensive dental practice website template that showcases dental services, patient testimonials, before/after case studies, and provides easy contact methods. The site features a modern, responsive design optimized for conversion and user experience.

### Key Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact Integration**: WhatsApp button for instant communication
- **Audio Player**: Background audio for enhanced user engagement
- **Portfolio Showcase**: Before/after case studies and service highlights
- **Testimonials Section**: Patient reviews and trust-building content
- **SEO Optimized**: Built with search engine optimization in mind

## 🛠️ Technologies Used

### Core Technologies
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.1** - Fast build tool and development server
- **React Router DOM 6.26.2** - Client-side routing

### UI Framework & Styling
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React 0.462.0** - Beautiful, customizable icons
- **Tailwind CSS Animate 1.0.7** - Smooth animations and transitions

### State Management & Data Fetching
- **TanStack Query 5.56.2** - Powerful data fetching and caching
- **React Hook Form 7.53.0** - Performant forms with easy validation
- **Zod 3.23.8** - TypeScript-first schema validation

### Additional Libraries
- **Embla Carousel React 8.3.0** - Touch-friendly carousel component
- **Recharts 2.12.7** - Composable charting library
- **Sonner 1.5.0** - Toast notifications
- **Date-fns 3.6.0** - Modern JavaScript date utility library
- **CMDK 1.0.0** - Command menu component

### Development Tools
- **ESLint 9.9.0** - Code linting and formatting
- **PostCSS 8.4.47** - CSS processing
- **Autoprefixer 10.4.20** - CSS vendor prefixing

## 📁 Project Structure

```
houston-dental-boost/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── About.tsx      # About section
│   │   ├── AudioPlayer.tsx # Background audio
│   │   ├── CaseStudy.tsx  # Before/after cases
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Navigation.tsx # Navigation bar
│   │   ├── Portfolio.tsx  # Portfolio showcase
│   │   ├── Services.tsx   # Services section
│   │   ├── Testimonials.tsx # Patient reviews
│   │   └── WhatsAppButton.tsx # WhatsApp integration
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Main page
│   │   └── NotFound.tsx   # 404 page
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── assets/            # Images and media
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd houston-dental-boost
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Styling
The project uses Tailwind CSS with a custom design system. Key customization points:

- **Colors**: Defined in `tailwind.config.ts` under the `theme.extend.colors` section
- **Animations**: Custom keyframes and animations in the Tailwind config
- **Components**: shadcn/ui components can be customized in `src/components/ui/`

### Content
Update the following components to customize content:
- `src/components/Hero.tsx` - Main hero section
- `src/components/About.tsx` - About section content
- `src/components/Services.tsx` - Services offered
- `src/components/Portfolio.tsx` - Case studies and portfolio
- `src/components/Testimonials.tsx` - Patient testimonials
- `src/components/Contact.tsx` - Contact information

### Images
Replace images in `src/assets/` with your own:
- `hero-dental.jpg` - Hero section background
- `about-developer.jpg` - About section image
- `before-after.jpg` - Case study images
- `portfolio-grid.jpg` - Portfolio images

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
VITE_WHATSAPP_NUMBER=your_whatsapp_number
```

### Build Configuration
The project is configured for production builds with:
- **Vite** for fast builds
- **TypeScript** compilation
- **PostCSS** processing
- **Tailwind CSS** purging

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. Follow these steps:

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Push Your Code
The GitHub Actions workflow will automatically:
- Build your project when you push to the `main` branch
- Deploy the built files to GitHub Pages
- Make your site available at `https://yourusername.github.io/houston-dental-boost/`

### 3. Custom Domain (Optional)
If you want to use a custom domain:
1. In **Settings** → **Pages**, enter your custom domain
2. Add a `CNAME` file to the `public/` folder with your domain name
3. Configure your DNS settings accordingly

### Deployment Options

1. **Netlify**
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Vercel**
   - Import your repository
   - Framework preset: Vite
   - Build command: `npm run build`

3. **GitHub Pages** (Recommended)
   - Enable GitHub Pages in repository settings
   - Set source to "GitHub Actions"
   - The project includes an automated workflow (`.github/workflows/deploy.yml`)
   - Your site will be available at: `https://yourusername.github.io/houston-dental-boost/`

4. **Traditional Hosting**
   - Upload the contents of the `dist` folder to your web server

## 🔮 Future Directions

### Planned Features

1. **Content Management System (CMS)**
   - Integrate with Strapi or Sanity for easy content updates
   - Admin panel for non-technical users

2. **Advanced SEO Features**
   - Dynamic meta tags
   - Structured data (JSON-LD)
   - Sitemap generation
   - Blog functionality

3. **Performance Optimizations**
   - Image optimization and lazy loading
   - Code splitting and lazy loading
   - Service worker for offline functionality
   - CDN integration

4. **Enhanced User Experience**
   - Online appointment booking system
   - Patient portal integration
   - Live chat functionality
   - Multi-language support

5. **Analytics and Tracking**
   - Google Analytics 4 integration
   - Conversion tracking
   - Heat mapping tools
   - A/B testing capabilities

6. **Mobile App**
   - React Native companion app
   - Push notifications
   - Offline functionality

### Technical Improvements

1. **Testing**
   - Unit tests with Jest and React Testing Library
   - Integration tests with Cypress
   - E2E testing with Playwright

2. **Performance**
   - Bundle analysis and optimization
   - Core Web Vitals optimization
   - Progressive Web App (PWA) features

3. **Security**
   - Content Security Policy (CSP)
   - HTTPS enforcement
   - Form validation and sanitization

4. **Accessibility**
   - WCAG 2.1 AA compliance
   - Screen reader optimization
   - Keyboard navigation improvements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for Houston dental practices**
