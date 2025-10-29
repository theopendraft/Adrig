# Adrig Home Page - Component Documentation

## 🎨 Design System

### Color Palette

- **Primary**: `#2463eb` (Blue) - Main brand color
- **Navy**: `#0a1f5e` (Dark Blue) - Header/Hero background
- **Secondary**: `#1e293b` (Dark gray/black)
- **Accent**: White and various grays

### Header Design

- **Style**: Transparent/absolute positioned over hero
- **Background**: Gradient dark blue matching hero
- **Logo**: "ADRIG AI Technologies" with icon
- **Navigation**: Dropdown menus for Services & Product
- **CTA Buttons**: LOGIN and SIGN UP

### Typography

- Font: Geist Sans (body) & Geist Mono (code)
- Responsive text sizing with Tailwind utilities

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main home page (assembled components)
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # Global styles & utilities
├── components/
│   ├── Header.tsx        # Navigation bar (fixed, responsive)
│   ├── Hero.tsx          # Hero section with CTA
│   ├── Features.tsx      # Features grid (6 cards)
│   ├── About.tsx         # About/Services section
│   ├── CTA.tsx           # Call-to-action section
│   ├── Footer.tsx        # Footer with links
│   └── ui/
│       └── Button.tsx    # Reusable button component
└── public/
    └── images/           # Ready for your images
```

## 🧩 Components Overview

### 1. Header

- **Type**: Client Component (`'use client'`)
- **Features**:
  - Absolute positioned (overlays hero section)
  - Transparent background with backdrop blur
  - Logo: "ADRIG AI Technologies"
  - **Dropdown Menus**: Services and Product with hover effects
  - Regular nav items: Work, Plan, Team, Contact
  - **Auth Buttons**: LOGIN (outline) and SIGN UP (filled)
  - Responsive mobile menu with collapsible dropdowns
  - White text on dark blue gradient background

### 2. Hero

- **Features**:
  - **Dark blue gradient background** (`from-[#0a1f5e] via-[#1a3a8a] to-[#2463eb]`)
  - Full-screen height with seamless navbar integration
  - Large headline with tagline (white text)
  - Two CTA buttons (white filled & outline)
  - Stats display (500+ clients, 98% satisfaction, 15+ years)
  - Placeholder for hero image/illustration
  - Decorative floating cards
  - Background blur effects

### 3. Features

- **Features**:
  - 6 feature cards in responsive grid
  - SVG icons (replaceable with custom icons)
  - Hover effects
  - Animation delays for staggered appearance

### 4. About

- **Features**:
  - Two-column layout
  - Image placeholder with decorative background
  - Stats overlay
  - Services checklist
  - CTA button

### 5. CTA (Call-to-Action)

- **Features**:
  - Blue gradient background
  - Two action buttons
  - Contact information (email, phone, address)
  - Centered layout

### 6. Footer

- **Features**:
  - Company info & branding
  - Link columns (Company, Services, Resources)
  - Social media icons (LinkedIn, Twitter, GitHub, Facebook)
  - Bottom copyright bar

## 🎯 Customization Guide

### Replace Placeholders

1. **Logo**: Update in `Header.tsx` and `Footer.tsx`

   ```tsx
   // Replace this:
   <div className="w-10 h-10 bg-primary rounded-lg">
     <span className="text-white font-bold text-xl">A</span>
   </div>
   // With your logo image
   ```

2. **Hero Image**: Update in `Hero.tsx`

   ```tsx
   // Replace the placeholder SVG with:
   <Image src="/images/hero-image.png" alt="Hero" />
   ```

3. **Stats**: Update numbers in `Hero.tsx` and `About.tsx`

4. **Contact Info**: Update in `CTA.tsx`

   - Email: `contact@adrig.com`
   - Phone: `+1 (555) 123-4567`
   - Address: `123 Business St, City`

5. **Social Links**: Update URLs in `Footer.tsx`

### Modify Content

- **Colors**: Edit `tailwind.config.ts`
- **Typography**: Edit `globals.css` base layer
- **Animations**: Modify keyframes in `tailwind.config.ts`
- **Features**: Update array in `Features.tsx`
- **Services**: Update array in `About.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.

## 🚀 Features Implemented

✅ Modern, professional design
✅ Fully responsive layout
✅ Smooth animations & transitions
✅ SEO-friendly structure
✅ Accessibility considerations
✅ Component-based architecture
✅ Type-safe with TypeScript
✅ Tailwind CSS utility classes
✅ Reusable Button component
✅ Fixed navigation header
✅ Smooth scroll sections

## 🔧 Next Steps

1. Replace placeholder images with actual assets
2. Update contact information
3. Add real company content
4. Configure social media links
5. Add form handling for CTAs (optional)
6. Set up analytics (optional)
7. Add more animations with Framer Motion (optional)
8. Implement dark mode (optional)

## 💡 Tips

- Images should be placed in `public/images/`
- Use Next.js `<Image>` component for optimization
- Keep components modular for easy updates
- Test on multiple devices for responsive behavior
- Run `npm run build` before deployment

## 🎨 Design Philosophy

- **Clean & Modern**: Minimalist design with focus on content
- **Professional**: Business-focused aesthetic
- **User-Friendly**: Clear CTAs and navigation
- **Performance**: Optimized for fast loading
- **Scalable**: Easy to extend with new sections

---

**Built with Next.js 16, TypeScript, and Tailwind CSS** 🚀
