# Vaibhav's Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, featuring stunning 3D animations and optimized performance.

## 🚀 Features

- **Modern UI/UX**: Clean and professional design with glassmorphism effects
- **3D Animations**: Interactive Three.js components and smooth Framer Motion animations
- **Dark/Light Mode**: Full theme support with system preference detection
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Lazy loading, code splitting, and mobile-specific optimizations
- **SEO Friendly**: Built with Next.js 15 for optimal search engine optimization
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Radix UI primitives
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React

### UI Components

- **shadcn/ui**: Modern component library
- **Custom Components**: Reusable UI elements
- **Responsive Design**: Mobile-first approach

### Performance

- **Lazy Loading**: Component-level code splitting
- **Image Optimization**: Next.js Image component
- **Bundle Optimization**: Webpack optimizations
- **Mobile Detection**: Performance tuning for mobile devices

## 📁 Project Structure

```text
project/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── about.tsx      # About section
│   │   ├── achievements.tsx
│   │   ├── contact.tsx
│   │   ├── education.tsx
│   │   ├── experience.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   └── skills.tsx
│   ├── three/             # Three.js components
│   │   ├── floating-shapes.tsx
│   │   ├── hero-background.tsx
│   │   ├── particle-field.tsx
│   │   └── ...
│   ├── ui/                # UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── optimized-home.tsx # Main home component
│   ├── theme-provider.tsx # Theme context
│   └── theme-toggle.tsx   # Theme switcher
├── hooks/                 # Custom React hooks
│   └── use-toast.ts
├── lib/                   # Utility functions
│   ├── performance.ts     # Performance optimizations
│   └── utils.ts           # General utilities
├── public/                # Static assets
│   ├── favicon.svg
│   └── site.webmanifest
├── components.json        # shadcn/ui config
├── next.config.js         # Next.js configuration
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Customization

### Themes

The project supports both light and dark themes. You can customize the theme in:

- `app/globals.css` - CSS custom properties
- `tailwind.config.js` - Tailwind theme configuration
- `components/theme-provider.tsx` - Theme context

### Components

All components are modular and can be easily customized:

- **Sections**: Modify individual sections in `components/sections/`
- **UI Components**: Customize shadcn/ui components in `components/ui/`
- **3D Elements**: Adjust Three.js components in `components/three/`

### Content

Update personal information in the respective section components:

- **About**: `components/sections/about.tsx`
- **Projects**: `components/sections/projects.tsx`
- **Experience**: `components/sections/experience.tsx`
- **Education**: `components/sections/education.tsx`

## 📱 Performance Optimizations

- **Component Lazy Loading**: Non-critical components are lazy-loaded
- **Image Optimization**: Next.js Image component with WebP support
- **Mobile Detection**: Reduced animations on mobile devices
- **Code Splitting**: Automatic code splitting for better performance
- **Bundle Analysis**: Webpack bundle analyzer for optimization

## 🎯 Key Sections

- **Hero**: Eye-catching introduction with animated background
- **About**: Personal information and key highlights
- **Education**: Academic background and achievements
- **Experience**: Professional experience and roles
- **Projects**: Portfolio of completed projects
- **Skills**: Technical skills with interactive visualizations
- **Achievements**: Certifications and accomplishments
- **Contact**: Contact form and social links

## 🛠️ Development

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add to `components/optimized-home.tsx`
3. Ensure responsive design and accessibility

### Custom Components

1. Follow the existing component structure
2. Use TypeScript for type safety
3. Implement proper error boundaries
4. Add responsive design classes

### Performance Testing

```bash
npm run build
npm run start
# Use Lighthouse or similar tools for performance auditing
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

- **Portfolio**: [Your Portfolio URL]
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
