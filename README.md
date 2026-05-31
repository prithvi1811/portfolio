# Prithvi Chauhan — Product Manager Portfolio

A modern, performant portfolio showcasing product strategy, marketplace expertise, and AI/LLM product thinking. Built with Next.js, Framer Motion, and Tailwind CSS.

**Live:** [prithvichauhan.vercel.app](https://prithvichauhan.vercel.app)

## About

I'm a marketplace-focused Product Manager with 4+ years driving platform growth, $2M+ revenue impact, and hands-on AI/LLM prototyping experience. This portfolio highlights case studies, methodologies, and learnings from launching features at Copart and building analytics systems at Cipla.

## Features

- **Interactive Scrolly Hero** — Animated hero section with parallax effects and dynamic overlays
- **Deep Case Studies** — 3 detailed PM projects with discovery process, cross-functional collaboration, and quantified impact
- **Marketplace Strategy** — Philosophy on network effects, unit economics, and regional expansion
- **Product Methodology** — Clear thinking on discovery, experimentation, and cross-functional collaboration
- **Learnings Section** — Real failures and lessons learned that shaped my approach
- **Responsive Design** — Optimized for desktop and mobile with smooth animations
- **Dark Theme** — Modern dark interface with AI-inspired gradient backgrounds

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org) with TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com) + [Tailwind Merge](https://www.npmjs.com/package/tailwind-merge)
- **Animations:** [Framer Motion](https://www.framer.com/motion)
- **Icons:** [Lucide React](https://lucide.dev)
- **Font:** [Geist](https://vercel.com/font) (Vercel's typeface)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/prithvi1811/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with globals
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── ScrollyCanvas.tsx    # Hero section with scrolly effects
│   ├── Overlay.tsx          # Text overlays and animations
│   ├── Resume.tsx           # Main portfolio content
│   └── Projects.tsx         # Project showcase cards
└── public/
    ├── bg/              # Background images
    ├── sequence/        # Animation sequence frames
    └── resume/          # Resume PDF
```

## Customization

### Updating Case Studies

Edit the `selectedWork` array in `src/components/Resume.tsx`:

```typescript
const selectedWork = [
  {
    title: "Your Project",
    period: "Company · 2024",
    metric: "Key metric",
    metricColor: "text-emerald-400",
    summary: "One-line description",
    details: ["Discovery...", "Solution...", "Impact..."],
    tags: ["Tag1", "Tag2"],
  },
  // ... more projects
];
```

### Updating Experience

Edit the `experience` array in `src/components/Resume.tsx` to update your work history and achievements.

### Colors & Theme

Tailwind classes are used throughout. Modify `tailwind.config.ts` to customize the color scheme.

## Deployment

### Vercel (Recommended)

The portfolio is optimized for Vercel deployment:

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deploys on push.

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Render
- Digital Ocean

## Performance

- **Optimized Images:** Next.js Image component for background assets
- **Code Splitting:** Automatic route-based code splitting
- **CSS-in-JS:** Tailwind for minimal bundle size
- **Animations:** GPU-accelerated with Framer Motion
- **Fonts:** Preloaded via next/font for performance

## License

This project is open source and available under the MIT License.

## Contact

- **Email:** prithvi.shaktichauhan@gmail.com
- **GitHub:** [@prithvi1811](https://github.com/prithvi1811)
- **LinkedIn:** [@prithvishaktichauhan](https://www.linkedin.com/in/prithvishaktichauhan/)
