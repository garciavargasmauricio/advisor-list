# Advisor Availability Dashboard

A modern, highly performant, and accessible dashboard (for this challenge) built with **Next.js (App Router)** to monitor and interact with real-time advisor availability status.

---

## 🚀 Features & Architecture

### 1. Advanced Data Fetching Strategies

To show proficiency in managing different data synchronization models, this application implements two distinct fetching mechanisms connecting to customized **Beeceptor** mock environments:

- **Initial Page Load (`fetch`):** The baseline catalog of advisor profiles is requested server-side using standard fetch structures. If the production environment variables are not set, it features an elegant automated fallback to a local mock file (`/mocks/advisors.json`).
- **Real-Time Polling (`TanStack Query`):** Availability flags (`callAvailable` and `chatAvailable`) change dynamically. To capture this without forcing manual page refreshes, the app implements a custom React Hook (`useAvailabilityPolling`) that triggers background synchronization using **TanStack Query** every 30 seconds.

Note: Due to a lack of the Apis, I created my own in https://app.beeceptor.com/ simulating the contracts based on the design.

### 2. Design System: Why Shadcn/ui over Material UI (MUI)?

For this project, **shadcn/ui** (backed by Tailwind CSS and Radix Primitives) was chosen instead of Material UI for several strategic architectural reasons:

- **Zero Runtime Overhead:** Material UI ships with heavily opinionated runtime CSS-in-JS wrappers (`@emotion/react`). Shadcn injects utility classes directly during compile time, leading to smaller bundle sizes and superior Core Web Vitals.
- **Full Ownership of Code:** Shadcn doesn't hide components inside `node_modules`. The primitives (like Buttons, Dialogs, or Avatars) are copied straight into the codebase, allowing total customization over styles, variants, and behavior.
- **Tailwind Consistency:** It matches perfectly with the Tailwind utility workflow utilized across the application wrappers (`min-w-xl`, typography layouts, grid alignment).

### 3. ♿ Accessibility (a11y)

Accessibility was integrated as a core requirement, not an afterthought:

- **Semantic HTML:** Replaced generic layout `div` trees with meaningful landmark tags like `<main>` and `<article>`.
- **Screen Reader Optimization:** Added expressive labeling tags (`aria-label`, `aria-hidden`) on action controls. For instance, dynamic strings clearly announce price tiers (e.g., `"Price 3 dollars per minute"`) and distinct connection flags (`"chat advisor (unavailable)"`).
- **Keyboard Navigation:** Focus rings and keyboard tab indexing operate out-of-the-box thanks to Radix UI underneath Shadcn.

### 4. 🧪 Automated Testing Suite

The repository includes comprehensive layers of testing architectures to ensure long-term codebase stability:

- **Unit & Integration Testing (Vitest + Happy DOM):** Validates atomic component behaviors, property rendering states, and custom hooks isolation. Swapped JSDOM for **Happy DOM** to completely eliminate native sub-process ESM/CJS loader conflicts inside Node v22.
- **End-to-End Testing (Playwright):** Simulates real user behavior directly inside headless web engines. Tests isolate integration sequences, verify layout structure visibility, and assert that dynamic button states flip between enabled/disabled rules accurately based on network state.

---

## 🔮 Future Scalability Proposals: Internationalization (i18n)

To scale this application globally, the logical next step is implementing **Internationalization (i18n)**.

- **The Stack:** I propose integrating **`next-intl`** or **`next-i18next`** utilizing Next.js Middleware routing.
- **Implementation Plan:**
  1. Extract hardcoded button copy (`"Call Now"`, `"Chat Later"`) and server error text (`"Something went wrong"`) into locale dictionaries (`/messages/en.json`, `/messages/es.json`).
  2. Implement sub-path routing patterns (e.g., `/es/advisors` vs `/en/advisors`) to ensure localized SEO indexing and correct content serving out-of-the-box.
- **Performance improvements:**
  1. Using img form next in order to improve images.
  2. Using nextjs perfomance improvements in the case this challege gets bigger.

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js:** v22.6.0 or higher
- **Package Manager:** npm

### Environment Setup

Create a `.env.local` file in the root folder and configure your Beeceptor endpoints:

```bash
NEXT_PUBLIC_ADVISOR_API=https://beeceptor.com
NEXT_PUBLIC_AVAILABILITY_API=https://beeceptor.com/advisor-availability
```

### Installation & Scripts

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run Vitest unit tests
npm run test

# Run Playwright End-to-End tests
npx playwright test
```
