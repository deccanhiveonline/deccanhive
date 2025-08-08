# Deccan Hive Digital Agency Website

A modern, responsive digital agency website built with React, TypeScript, and Tailwind CSS, featuring stunning animations, dark theme design, and comprehensive business pages.

## Project Info

**URL**: https://lovable.dev/projects/b06d658e-00fe-47cd-950c-0ffac110cc6f

## 🎨 Design System

### Colors
The website uses a sophisticated dark theme with HSL color values:
- **Primary Background**: Pure black (`--background: 0 0% 0%`)
- **Secondary Backgrounds**: Dark variants (`--dark-bg: 0 0% 4%`, `--darker-bg: 0 0% 2%`, `--deepest-bg: 0 0% 1%`)
- **Brand Yellow**: Vibrant accent color (`--brand-yellow: 45 100% 51%`, `--brand-yellow-dark: 45 100% 45%`)
- **Text Colors**: High contrast white (`--foreground: 210 40% 98%`) and muted gray (`--muted-foreground: 215.4 16.3% 46.9%`)
- **Interactive Elements**: Consistent hover states with yellow accents

### Typography
- **Primary Font**: Montserrat (Google Fonts)
- **Font Weights**: 400 (regular), 700 (bold for headings)
- **Responsive Text Sizes**: 
  - Mobile: `text-xl` to `text-3xl` for headings
  - Tablet: `text-2xl` to `text-4xl` for headings  
  - Desktop: `text-3xl` to `text-6xl` for headings

### Responsive Design
- **Mobile-First Approach**: Optimized for screens 320px and up
- **Breakpoints**: 
  - Mobile: `max-width: 767px`
  - Tablet: `768px to 1023px`
  - Desktop: `1024px and above`
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive content

## ✨ Animations & Visual Effects

### 3D Animated Background
- **6 Floating Shapes**: Geometric forms with gradient backgrounds
- **Continuous Animation**: 18-38 second duration cycles with rotation, translation, and scaling
- **Device-Specific Optimization**:
  - Desktop: Large shapes (150px-320px) with full opacity
  - Tablet: Medium shapes (140px-260px) with reduced opacity
  - Mobile: Small shapes (90px-160px) with minimal opacity for performance

### Custom Animations
- **Fade In**: Smooth entrance effects (`animate-fade-in`)
- **Slide Up**: Content reveal animations (`animate-slide-up`)
- **Scale In**: Emphasis animations (`animate-scale-in`)
- **Accordion**: Expandable content transitions
- **WhatsApp Wave**: Playful waving animation for contact button

### Interactive Elements
- **Hover Effects**: Scale transforms, color transitions, and glow effects
- **Button Animations**: Smooth state changes with yellow accent highlights
- **Card Interactions**: Subtle lift effects on portfolio and service cards

## 🚀 Features & Pages

### Core Pages
1. **Home Page** (`/`)
   - Hero section with animated call-to-action
   - Interactive services overview with navigation to detailed services
   - Portfolio showcase
   - Client testimonials carousel
   - Contact form integration
   - **Service Navigation**: Clickable service cards that redirect to specific categories on Services page

2. **About Page** (`/about`)
   - Company story and mission
   - Team member profiles
   - Core values presentation

3. **Services Page** (`/services`)
   - **15+ Service Categories** with comprehensive offerings:
     - Paid Advertising (Meta, Google, LinkedIn, Pinterest Ads)
     - Email & Messaging (WhatsApp Store, Automation, Bulk Mailing)
     - Social Media Management
     - Video & Audio Production (Podcast Editing, Video Marketing)
     - Photography (E-commerce, AI Product Photography)
     - Website Development (Structure, Navigation, UI/UX Design)
     - E-commerce Solutions (Product Pages, Shopping Cart, Checkout)
     - Payment Gateway Integration (Razorpay, Stripe, PayU, Paytm)
     - Catalogue & E-books (Digital Catalogues, Flipbooks)
     - Graphic Design Services (Logo, Brand Identity, Marketing Collaterals)
   - **Smart Navigation**: URL parameters for category-specific navigation from homepage
   - **Visual Enhancement**: Square icon containers with responsive design
   - **Auto-scroll & Highlight**: Smooth scrolling to specific categories with visual emphasis

4. **Portfolio Page** (`/portfolio`)
   - Project showcases with filtering
   - Case study presentations
   - Client success stories

5. **Blog Page** (`/blog`)
   - Article listings with modern cards
   - Category filtering
   - Search functionality
   - Individual blog post routing

6. **Contact Page** (`/contact`)
   - Multi-field contact form
   - Company contact information
   - Google Maps integration
   - Social media links

### Blog System
7. **Individual Blog Posts**
   - **BlogPost1** (`/blog-post-1`): "How to Optimize Your Google Ads for Maximum ROI"
   - **BlogPost2** (`/blog-post-2`): "Local SEO Strategies That Actually Work in 2024"
   - Dedicated routing for each blog post
   - Consistent layout with navigation and CTAs
   - Social sharing functionality

### Legal Pages
8. **Privacy Policy** (`/privacy-policy`)
   - Comprehensive privacy guidelines
   - Data collection and usage policies
   - User rights and contact information

9. **Terms & Conditions** (`/terms-conditions`)
   - Service terms and conditions
   - Payment and refund policies
   - Intellectual property guidelines

### Special Features
- **Loading Screen**: Branded loading experience with progress bar (2.5 seconds)
- **WhatsApp Float Button**: Persistent contact option with wave animation
- **404 Page**: Custom not-found page with navigation
- **Blog Post System**: Individual blog post pages with proper routing
- **Service Navigation System**: Homepage-to-Services page navigation with URL parameters
- **Category Highlighting**: Visual feedback when navigating to specific service categories

## 🛠 Technical Stack

### Core Technologies
- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript**: Full type safety and enhanced developer experience
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing with seamless navigation

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Tailwind Animate**: Enhanced animation utilities
- **Shadcn/UI Components**: Pre-built accessible UI components
- **Lucide React**: Beautiful icon library

### Form Handling
- **React Hook Form**: Efficient form management
- **Zod**: Schema validation for form inputs
- **Input OTP**: One-time password input components

### Data & State Management
- **TanStack React Query**: Server state management and caching
- **React Hooks**: Local state management

### Additional Libraries
- **Recharts**: Data visualization and charts
- **Embla Carousel**: Touch-friendly carousel components
- **Date-fns**: Date manipulation utilities
- **Class Variance Authority**: Conditional className utilities

## 📱 Mobile Optimization

### Performance Optimizations
- **Reduced Animation Complexity**: Simpler animations on mobile devices
- **Optimized Image Loading**: Responsive images with proper sizing
- **Efficient CSS**: Minimal custom CSS with Tailwind utilities
- **Fast Loading**: Optimized bundle size and lazy loading

### Touch Interactions
- **Touch-Friendly Buttons**: Minimum 44px touch targets
- **Swipe Gestures**: Carousel and gallery interactions
- **Responsive Navigation**: Mobile-optimized menu system

### Progressive Enhancement
- **Core Functionality First**: Essential features work without JavaScript
- **Enhanced Interactions**: Additional animations and effects for capable devices
- **Graceful Degradation**: Fallbacks for older browsers

## 🎯 Business Features

### Contact System
- **Multi-Channel Contact**: Phone, email, WhatsApp integration
- **Contact Form**: Lead capture with validation
- **Social Media Links**: Instagram, Facebook, LinkedIn, YouTube
- **Consistent CTAs**: All call-to-action buttons redirect to contact form

### SEO Optimization
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Meta Tags**: Comprehensive metadata for search engines
- **Fast Loading**: Optimized Core Web Vitals
- **Mobile-First**: Google's mobile-first indexing ready

### Analytics Ready
- **Clean URLs**: SEO-friendly routing structure
- **Event Tracking**: Ready for Google Analytics integration
- **Performance Monitoring**: Built-in performance optimization

## 🚀 Getting Started

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation Steps

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm i

# Step 4: Start the development server
npm run dev
```

### Development Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment

### Lovable Platform
1. Open [Lovable Project](https://lovable.dev/projects/b06d658e-00fe-47cd-950c-0ffac110cc6f)
2. Click Share → Publish
3. Your site will be automatically deployed

### Custom Domain
1. Navigate to Project > Settings > Domains
2. Click Connect Domain
3. Follow the setup instructions
4. [Complete guide](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 📝 Content Management

### Service Navigation System
- **Homepage Service Cards**: Each service card includes category mapping for navigation
- **URL Parameters**: Services page accepts `?category=` parameter for direct navigation
- **Auto-scroll**: Smooth scrolling to target category with visual highlighting
- **Visual Feedback**: Ring highlight effect lasting 3 seconds for category emphasis

### Service Categories Structure
The website features 10 comprehensive service categories:
1. **Paid Advertising**: Meta, Google, LinkedIn, Pinterest Ads
2. **Email & Messaging**: WhatsApp Store, Automation, Bulk Mailing
3. **Social Media Management**: Complete strategy and execution
4. **Video & Audio Production**: Podcast editing, video marketing
5. **Photography**: E-commerce and AI product photography
6. **Website Development**: Structure, navigation, UI/UX design
7. **E-commerce Solutions**: Product pages, shopping cart, checkout
8. **Payment Gateway Integration**: Multiple gateway options
9. **Catalogue & E-books**: Digital catalogues and flipbooks
10. **Graphic Design Services**: Logo, branding, marketing materials

### Adding New Blog Posts
1. Create new blog post component in `src/pages/BlogPosts/`
2. Add route to `src/App.tsx`
3. Update blog data in `src/pages/Blog.tsx` (blogPosts array)
4. Ensure proper import statements (React Router DOM components)

### Blog Post Template Structure
```typescript
// Required imports for blog posts
import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import AnimatedBackground from '@/components/AnimatedBackground';
```

### Updating Contact Information
- Edit contact details in `src/components/Footer.tsx`
- Update contact page information in `src/pages/Contact.tsx`
- Modify WhatsApp number in `src/components/WhatsAppFloat.tsx`

### Customizing Colors
- Primary colors defined in `src/index.css` using HSL values
- Brand colors: `--brand-yellow` and `--brand-yellow-dark`
- All colors follow the dark theme design system

## 🔧 Development Guidelines

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation menus if needed
4. Test all internal links and CTAs

### Component Structure
- **Keep components focused and small** (preferably under 200 lines)
- **Create dedicated components** for reusable functionality
- **Use TypeScript interfaces** for all props and data structures
- **Follow the established naming conventions**

### Styling Guidelines
- Use Tailwind utility classes for all styling
- Follow the established color system with HSL values
- Maintain responsive design patterns
- Test across all device sizes

### Import Best Practices
- Always import required components from `react-router-dom`
- Use absolute imports with `@/` prefix for internal components
- Import UI components from `@/components/ui/`
- Import icons from `lucide-react`

## 🔍 Troubleshooting

### Common Issues and Solutions

#### Missing Import Errors
```typescript
// Error: Cannot find name 'Link'
// Solution: Add Link to react-router-dom import
import { useNavigate, Link } from 'react-router-dom';
```

#### CTA Button Routing
- All CTA buttons should link to `/contact#contact-form`
- Use `Link` component with `to="/contact#contact-form"`
- Ensure proper import of `Link` from `react-router-dom`

#### Build Errors
1. Check for missing imports
2. Verify TypeScript type definitions
3. Ensure all components are properly exported
4. Check for syntax errors and typos

#### Navigation Issues
1. Verify route definitions in `src/App.tsx`
2. Check component file paths
3. Ensure proper Link component usage
4. Test internal navigation after changes

### Development Testing Checklist
- [ ] All pages load without errors
- [ ] Navigation links work correctly
- [ ] CTA buttons redirect to contact form
- [ ] Service navigation from homepage to Services page works
- [ ] URL parameters for service categories function properly
- [ ] Auto-scroll to target categories works smoothly
- [ ] Category highlighting appears and disappears correctly
- [ ] Mobile responsiveness maintained across all service cards
- [ ] WhatsApp float button functions
- [ ] Loading screen appears on first visit
- [ ] Blog post routing works
- [ ] Contact form validation functions

## 📊 Performance Features

### Loading Optimization
- **Smart Loading Screens**: Only on first page load
- **Progressive Loading**: 2.5-second branded loading experience
- **Session Storage**: Prevents repeated loading screens

### Code Splitting
- **Route-Based Splitting**: Each page loads independently
- **Component Lazy Loading**: Non-critical components load on demand
- **Optimized Bundle Size**: Tree-shaking removes unused code

## 🎨 Design Philosophy

### Modern Aesthetics
- **Dark Theme**: Professional and modern appearance
- **Minimal Design**: Clean layouts with purposeful whitespace
- **Bold Typography**: Strong hierarchy with Montserrat font
- **Consistent Branding**: Yellow accent color throughout

### User Experience
- **Intuitive Navigation**: Clear menu structure and routing
- **Fast Interactions**: Smooth animations and transitions
- **Accessible Design**: High contrast and readable text
- **Mobile-First**: Optimized for touch devices

## 🔧 Maintenance Guidelines

### Regular Maintenance Tasks
1. **Test all navigation links** after making changes
2. **Verify CTA functionality** across all pages
3. **Check mobile responsiveness** on various devices
4. **Update blog content** through the centralized data structure
5. **Monitor console for errors** during development

### Code Quality Standards
- Maintain TypeScript strict mode compliance
- Follow established component structure patterns
- Keep components focused and reusable
- Use semantic HTML elements
- Maintain accessibility standards

### Before Deployment Checklist
- [ ] All routes tested and working
- [ ] No console errors or warnings
- [ ] Mobile responsiveness verified
- [ ] Contact form integration tested
- [ ] Social media links updated
- [ ] Loading screens function properly
- [ ] SEO meta tags current

---

**Deccan Hive Digital Agency** - Empowering businesses with comprehensive digital solutions.

For questions or support, contact: [deccanhive@gmail.com](mailto:deccanhive@gmail.com) | +91 9063117093