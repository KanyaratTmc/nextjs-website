# Next.js website

A modern, responsive website template built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components. This project provides a complete business website layout with dark/light theme support and mobile-responsive design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Component Library**: Uses shadcn/ui for consistent, accessible UI components
- **Theme Support**: Dark/light mode toggle with system preference detection
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Performance Optimized**: Server-side rendering and optimized images
- **Accessibility**: ARIA labels and semantic HTML structure
- **TypeScript**: Full type safety throughout the application
- **Modern Icons**: Lucide React icons for consistent iconography

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Demo

The website includes the following sections:
- **Header**: Navigation with logo, menu items, and user actions
- **Hero Section**: Eye-catching banner with call-to-action
- **Feature Cards**: Service/product highlights in grid layout
- **Content Sections**: About us and services information
- **Statistics**: Business metrics and achievements display
- **Content Grid**: Events and news with calendar navigation
- **Call-to-Action**: Business growth invitation
- **Services**: Detailed service offerings
- **Footer**: Company information and links

## 🛠 Installation

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-community-starter.git
   cd nextjs-community-starter
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
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Manual Setup (Alternative)

If you want to set up the project from scratch:

1. **Create a new Next.js project**
   ```bash
   npx create-next-app@latest my-website --typescript --tailwind --eslint
   cd my-website
   ```

2. **Install additional dependencies**
   ```bash
   npm install next-themes lucide-react
   ```

3. **Initialize shadcn/ui**
   ```bash
   npx shadcn@latest init
   ```

4. **Add required components**
   ```bash
   npx shadcn@latest add button card dropdown-menu
   ```

## 📁 Project Structure

```
nextjs-community-starter/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles and CSS variables
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── dropdown-menu.tsx
│   ├── header.tsx               # Navigation header
│   ├── hero-section.tsx         # Hero banner
│   ├── feature-cards.tsx        # Service cards grid
│   ├── content-section.tsx      # About us section
│   ├── image-content-section.tsx # Services with image
│   ├── sidebar-content.tsx      # Sidebar component
│   ├── stats-section.tsx        # Statistics display
│   ├── metrics-section.tsx      # Business metrics
│   ├── content-grid.tsx         # Events/news grid
│   ├── cta-section.tsx          # Call-to-action banner
│   ├── services-section.tsx     # Services showcase
│   ├── footer.tsx               # Footer with links
│   ├── theme-provider.tsx       # Theme context provider
│   ├── theme-switcher.tsx       # Theme dropdown selector
│   └── theme-toggle.tsx         # Simple theme toggle
├── lib/                         # Utility functions
│   └── utils.ts                 # Tailwind class utilities
├── public/                      # Static assets
│   └── layout-reference.jpg     # Design reference
├── hooks/                       # Custom React hooks
│   └── use-mobile.tsx          # Mobile detection hook
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
└── README.md                   # Project documentation
```

## 🧩 Components Overview

### Core Components

- **Header**: Responsive navigation with logo, menu items, search, user actions, and login button
- **HeroSection**: Large banner with headline, description, and navigation dots
- **FeatureCards**: Grid of service/feature cards with icons and descriptions
- **ContentSection**: Centered content with Thai language support
- **ImageContentSection**: Two-column layout with text and image placeholder
- **StatsSection**: Business statistics with circular icons and metrics
- **MetricsSection**: Comprehensive metrics display with multiple data points
- **ContentGrid**: Calendar-style layout for events and news
- **CtaSection**: Call-to-action banner for business growth
- **ServicesSection**: Service offerings in card format
- **Footer**: Multi-column footer with company information and social links

### Theme Components

- **ThemeProvider**: Context provider for theme management
- **ThemeSwitcher**: Dropdown menu for theme selection (light/dark/system)
- **ThemeToggle**: Simple toggle button for light/dark mode

### UI Components (shadcn/ui)

- **Button**: Customizable button component with variants
- **Card**: Container component for content sections
- **DropdownMenu**: Accessible dropdown menu component

## 🎨 Customization

### Colors and Theming

The project uses CSS variables for theming. Customize colors in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  /* Add your custom colors */
}
```

### Typography

The project uses Inter font. Change it in `app/layout.tsx`:

```typescript
import { Cute_Font as YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ["latin"] })
```

### Content

Update content in individual component files:
- Hero text in `components/hero-section.tsx`
- Service information in `components/feature-cards.tsx`
- Company information in `components/footer.tsx`

### Styling

The project uses Tailwind CSS. Customize styles by:
- Modifying `tailwind.config.ts` for global changes
- Updating component classes for specific styling
- Adding custom CSS in `app/globals.css`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- **Netlify**: Use the Next.js build command
- **AWS Amplify**: Configure for Next.js SSR
- **Railway**: Connect GitHub repository
- **DigitalOcean App Platform**: Use Next.js preset

### Build Commands

```bash
# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Dependencies

### Core Dependencies
- **next**: ^15.0.0 - React framework for production
- **react**: ^18.0.0 - JavaScript library for user interfaces
- **typescript**: ^5.0.0 - TypeScript language support

### UI and Styling
- **tailwindcss**: ^3.4.0 - Utility-first CSS framework
- **next-themes**: ^0.3.0 - Theme management for Next.js
- **lucide-react**: ^0.400.0 - Beautiful & consistent icons
- **@radix-ui/react-***: Various - Accessible UI primitives

### Development Dependencies
- **eslint**: ^8.0.0 - JavaScript linting
- **@types/node**: ^20.0.0 - TypeScript definitions for Node.js
- **@types/react**: ^18.0.0 - TypeScript definitions for React

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure components are accessible
- Add proper TypeScript types
- Test on multiple screen sizes
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible components
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons
- [Vercel](https://vercel.com/) - Platform for frontend frameworks

## 📞 Support

If you have any questions or need help with the project:

- Create an [issue](https://github.com/KanyaratTmc/nextjs-website)
- Check the [documentation](https://nextjs.org/docs)
- Join the [Next.js community](https://nextjs.org/community)

---

**Happy coding!** 🚀

Made with ❤️ using Next.js and TypeScript
```

This comprehensive README.md includes:

1. **Project Overview**: Clear description of what the project is
2. **Features List**: All the key features and technologies used
3. **Installation Instructions**: Both quick start and manual setup
4. **Project Structure**: Detailed file organization
5. **Component Documentation**: Description of each component
6. **Customization Guide**: How to modify colors, fonts, and content
7. **Deployment Instructions**: Multiple deployment options
8. **Dependencies**: Complete list of packages used
9. **Contributing Guidelines**: How others can contribute
10. **License and Support**: Legal and help information

The README is structured to be professional and informative for GitHub, making it easy for other developers to understand, use, and contribute to your project.

