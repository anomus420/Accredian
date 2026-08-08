# Accredian Enterprise Landing Page Redesign

A high-performance, responsive redesign of the Accredian Enterprise landing page. Built with **Next.js 16 (App Router)**, **React 19**, **Framer Motion**, and **Tailwind CSS v4** to deliver a premium, animated, and accessible corporate experience supporting dark mode and a light B2B SaaS theme.

---

## 🛠️ Tech Stack & Architecture

*   **Framework**: Next.js 16 (App Router) with React 19.
*   **Styling**: Tailwind CSS v4 (CSS-first configuration, class-based `@custom-variant dark` support).
*   **Animations**: Framer Motion (Scroll-triggered viewport drawings, floating spring-physics orbits, and custom theme switches).
*   **Validation**: React Hook Form with Zod schema resolution.
*   **Database Simulation**: Server-side local file system (`data/leads.json`) managed via a transactional database module (`lib/db.ts`).

---

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18.x or higher recommended)
*   npm or yarn

### Installation & Local Setup

1.  **Clone the Repository** and navigate to the project directory:
    ```bash
    cd Accredian
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run the Local Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4.  **Create an Optimized Production Build**:
    ```bash
    npm run build
    ```

5.  **Start the Production Server**:
    ```bash
    npm run start
    ```

---

## 📐 Implementation Approach

The project was constructed following a modular, clean-architecture approach:

1.  **Visual Polish & Theme Adaptability**:
    *   *Dark Mode*: Preserves the signature dark-navy B2B look (`#0B0F19`) overlaid with a coordinate dot-grid pattern (`.dark-grid-pattern`) and ambient drifting glow orbs.
    *   *Light Mode*: Maps to a clean Slate B2B SaaS palette (`#F8FAFC`) with soft pastel-tinted alternating section bands (e.g. mint-teal for Stats, light-violet for Testimonials) for scanning hierarchy.
    *   *Glassmorphism*: Section cards implement backdrop-blur filters, thin slate borders (`border-slate-200/80` or `border-slate-800/50`), and responsive radial spotlights that activate on hover.
2.  **Scroll & Micro-Interactions**:
    *   *Timeline Connections*: The desktop horizontal timeline line draws its width from left to right as you scroll down. On mobile, this seamlessly collapses to an animated vertical line.
    *   *SVG Curves*: The CAT Framework uses a dynamic `<motion.path>` that draws its SVG dashed line based on scroll entrance.
    *   *Spring Physics*: Hero visuals and checklist items respond to user interactions using spring damping vectors rather than linear easing.
3.  **Lead Management Data Flow**:
    *   Lead records are validated on both the client (via Zod + React Hook Form) and the server (via Next.js API Routes).
    *   Submissions write to `/data/leads.json` on the server file system and can be evaluated dynamically at `/api/enquire`.

---

## 🤖  AI Usage 

I built this project utilizing an AI-assisted development workflow (pairing with **Google DeepMind's Antigravity** assistant) to maximize velocity and output quality. 

### How AI was integrated into the workflow:
*   **Boilerplate & Scaffolding**: I utilized AI to rapidly scaffold Next.js App Router folders, basic components, mock content databases (`lib/content.ts`), and configure Tailwind CSS v4 custom theme mappings.
*   **Visual Polish Refinement**: I leveraged AI to calculate responsive spacing ratios and set up standard spring coefficients for Framer Motion transitions.
*   **Error Analysis & Debugging**: I utilized AI for fast compilation diagnostics (e.g., verifying React 19 JSX parser types when compiling Hook Form resolvers).

### Where my engineering drove the architecture:
*   I architected the React Context state provider (`lib/store.tsx`) handling DOM overrides, localStorage caching, and custom Tailwind class-based variants.
*   I programmed the local storage read/write mechanism in `lib/db.ts` to simulate database writes safely under concurrent server hits.
*   I engineered the responsive coordinate-calculating width classes in the Domain Expertise layout to center-align trailing columns dynamically.

This hybrid approach allowed me to maintain high architectural stability, clean code structure, and custom interactive animations, while accelerating repetitive scaffolding tasks.

---

## 🔮 Future Roadmap (Improvements with More Time)

If given more time, the following upgrades would be prioritized:

1.  **Dynamic Cursor Spotlights**: Implement mouse-coordinate listeners to project dynamic radial spotlight halos that follow the user's cursor across feature grids, rather than static centered animations.
2.  **Edge-to-DB Connection**: Swap the simulated JSON file database for a production-grade database integration (e.g., Prisma + PostgreSQL or MongoDB) with automated email notifications on new leads.
3.  **End-to-End Testing**: Incorporate Playwright or Cypress tests to automate verification of the responsive modals, theme-toggles, and mock-form postings.
4.  **Internationalization (i18n)**: Scaffold key dictionary paths for multi-lingual translation support, matching B2B enterprise standards for global corporate programs.
