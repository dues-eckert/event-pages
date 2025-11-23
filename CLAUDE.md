# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

William Eckert's personal website built with Astro v5, featuring a blog and wallpaper downloads. The site is statically generated and deployed to Cloudflare Pages.

## Development Commands

```bash
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm check        # Type-check project (astro check)
pnpm format       # Format all files with Prettier
```

**Note**: The dev server is already running. DON'T start it automatically. Use `pnpm check` and `pnpm build` to verify your work.

## Available MCP Tools

### Astro.js

You have access to the Astro Docs MCP server for retrieving up-to-date Astro documentation.

#### search_astro_docs

Searches the official Astro framework documentation.
You MUST use this tool before implementing or modifying any advanced Astro-specific features, including: Actions, Middleware, integrations, Content Collections, server endpoints, configuration options, or any advanced Astro APIs. When in doubt about any Astro functionality, consult the docs first.

### Chrome Dev Tools

You have access to a powerful Chrome Dev Tools MCP server for browser automation, testing, and debugging. Here's how to use the available tools effectively:

#### When You MUST Use These Tools

**1. Console Error Checking**

You MUST check for console errors after ANY frontend code changes (components, scripts, styles).

Tools: `list_console_messages()`

How to use:

- After making any code changes, run `list_console_messages()` to view all console logs and errors
- Keep fixing and rechecking until all errors are resolved
- Pay special attention to JavaScript errors and warnings that could break functionality

**2. Responsive Design Testing**

You MUST test responsive layouts when implementing or modifying mobile/tablet designs.

Tools: `resize_page(width, height)`, `take_snapshot()`, `take_screenshot()`

ALWAYS test at these breakpoints:

- Mobile: `resize_page(375, 667)` - iPhone SE size
- Tablet: `resize_page(768, 1024)` - iPad size
- Desktop: `resize_page(1440, 900)` - Standard desktop

How to use:

- After implementing responsive features, resize to each breakpoint
- Use `take_snapshot()` to verify element structure (faster)
- Use `take_screenshot()` to verify visual appearance
- Keep testing until layout works correctly at all sizes

**3. Performance Auditing**

You MUST run a performance audit before considering frontend work complete.

Tools: `performance_start_trace(reload, autoStop)`, `performance_analyze_insight(insightName)`

How to use:

- Before marking work complete, run `performance_start_trace(reload: true, autoStop: true)`
- Review Core Web Vitals: LCP (Largest Contentful Paint) should be < 2.5s, CLS (Cumulative Layout Shift) should be < 0.1
- If metrics are poor, use `performance_analyze_insight()` to get specific optimization recommendations
- Common insights: "LCPBreakdown", "DocumentLatency", "NetworkDependencyTree"

#### Additional Tools Available

**4. Visual Verification**

Tools: `take_snapshot()`, `take_screenshot(format?, uid?, fullPage?, quality?)`

- `take_snapshot()` returns accessibility tree with UIDs for all elements - faster and preferred for element inspection
- `take_screenshot()` captures visual output - use for visual verification or when you need actual pixels
- Can screenshot specific elements by passing `uid` parameter
- Supports full-page screenshots with `fullPage: true`

**Screenshot Best Practices:**

- **Always use WebP format** with quality 80 to minimize file sizes: `take_screenshot({ format: 'webp', quality: 80 })`
- WebP provides excellent compression with minimal visual quality loss
- Only use PNG format if you need lossless quality or transparency
- Adjust quality parameter (0-100) if needed: higher = better quality but larger files

**5. Form Interaction Testing** (Optional - useful for quick verification)

Tools: `fill(uid, value)`, `fill_form(elements)`, `click(uid)`, `hover(uid)`

- Forms on this site send emails, which can't be verified via browser automation
- These tools are available if you want to quickly test form UX and client-side validation
- Use `take_snapshot()` first to get element UIDs, then interact with them

**6. Network Analysis**

Tools: `list_network_requests(pageSize?, resourceTypes?)`, `get_network_request(url)`

Use when debugging API calls, asset loading, or performance issues:

- `list_network_requests()` shows all requests with status codes and timing
- Filter by resource type: "document", "stylesheet", "image", "script", "fetch", etc.
- `get_network_request(url)` provides full request/response headers and body

**7. Network & CPU Emulation**

Tools: `emulate_network(throttlingOption)`, `emulate_cpu(throttlingRate)`

Test performance under realistic conditions:

- Network: "Slow 3G", "Fast 3G", "Slow 4G", "Fast 4G", "Offline"
- CPU: 1-20x slowdown (use 4x for typical mobile device)
- Reset with: `emulate_network("No emulation")` and `emulate_cpu(1)`

**8. JavaScript Execution**

Tools: `evaluate_script(function, args?)`

Execute JavaScript in the page context and return JSON-serializable results. Useful for checking page state, DOM manipulation, or extracting data.

**9. Page Management**

Tools: `new_page(url)`, `list_pages()`, `select_page(pageIdx)`, `close_page(pageIdx)`, `navigate_page(url)`, `navigate_page_history(navigate)`

Basic browser automation for opening, switching between, and navigating pages.

**10. Other Interaction Tools**

Tools: `drag(from_uid, to_uid)`, `upload_file(uid, filePath)`, `wait_for(text, timeout?)`, `handle_dialog(action, promptText?)`

Available for advanced interactions like drag-and-drop, file uploads, waiting for dynamic content, and handling browser dialogs.

## Technical Stack & Architecture

### Core Technologies

- **Astro v5.9.3** - Static site generation with TypeScript strict mode
- **Custom CSS Design System** - CSS custom properties and scoped component styles
- **Content Collections** - MDX blog posts defined in `src/content.config.ts`
- **Cloudflare Pages** - Deployment target

### View Transitions

**Astro view transitions** are enabled globally and automatically handle page navigation animations.

**Critical pattern for client-side scripts:**

```astro
<script>
  function init() {
    // Your initialization code
  }

  // ONLY use astro:page-load (fires on initial load AND after navigation)
  document.addEventListener('astro:page-load', init);
</script>
```

**Never use** `DOMContentLoaded` or `is:inline` scripts with view transitions.

### Content Collections

**Blog posts** (`src/content/blog/`):

- Loaded using glob loader: `glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" })`
- Files starting with `_` are ignored
- Schema enforces: `title` (max 60 chars), `description` (max 160 chars), `date`, `status` (Draft/Hidden/Public), `author`
- Dynamic routes at `/blog/[slug].astro`

### Custom MDX Processing

**Remark plugins** in `utils/`:

- `remark-reading-time.mjs` - Adds `minutesToRead` and `wordsInTotal` to frontmatter using `reading-time` package

Register new plugins in `astro.config.mjs` under `markdown.remarkPlugins` or `markdown.rehypePlugins`.

### Project Structure

- `src/pages/` - File-based routing (index, blog, experiments, wallpapers, now.mdx)
- `src/content/blog/` - MDX blog posts
- `src/components/` - Reusable Astro components
- `src/layouts/` - Page layout wrappers
- `src/assets/` - Images including gradient wallpapers
- `utils/` - Custom remark plugins
- `src/styles/` - Global CSS files (main.css, reset.css)

## Code Style & Patterns

### Astro Component Comments

In `.astro` files:
- **HTML/template section**: Use JSX-style comments (`{/* comment */}`) - stripped from production builds
- **`<style>` blocks**: Use CSS comments (`/* comment */`) - JSX comments will break Prettier
- **Avoid HTML comments** (`<!-- -->`) - these are shipped to production

### Import Aliases

**Always use path aliases** instead of relative imports:

- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`

### TypeScript Standards

- **Prefer string literal types** for simple unions: `type Status = 'Draft' | 'Hidden' | 'Public'`
- **Use `as const` only when you need runtime iteration** of the values
- Define explicit interfaces for all component props with JSDoc comments

## Important Constraints

1. **Static-First**: Always default to static generation (output: "static" in config)
2. **Scoped-First**: Default to component-scoped `<style>` blocks with semantic class names. Use global styles sparingly for truly shared patterns.
3. **Dependency Minimalism**: Ask before adding any new dependencies
4. **Type Safety**: Maintain strict TypeScript configuration throughout

## Styling & CSS

### Styling Architecture

**Global Design System** (`src/styles/main.css`):

- **CSS Custom Properties**: Comprehensive design tokens for colors, spacing, and layout
- **Color System**: Five color families (gray, mint, orange, pink, purple) with 11 shades each (100-1100)
- **Layout Tokens**: `--container-max-width`, `--site-bg-color`
- **Global Utilities**: Minimal utility classes (e.g., `.text-large`) - only add when pattern is used site-wide
- **Imports**: Reset styles via `@import "reset.css" layer(base);`

**CSS Reset** (`src/styles/reset.css`):

- Modern CSS reset using `:where()` for low specificity
- Progressive enhancement with modern features
- Sensible defaults for all HTML elements

**Component Styles**:

- Primary pattern: Component-scoped `<style>` blocks
- Use semantic class names (`.hero-section`, `.page-container`, `.content-wrapper`)
- Access design tokens via `var(--color-purple-700)`, `var(--container-max-width)`, etc.

### Astro CSS Best Practices

#### Scoped Styles (Primary Pattern)

Astro `<style>` blocks are **automatically scoped** to the component:

```astro
<style>
  .hero-section {
    background: var(--color-gray-1100);
    border-radius: 48px;
  }

  h1 {
    color: var(--color-white);
    font-size: 48px;
  }
</style>
```

- Scoped styles only affect elements in the same component
- Safe to use low-specificity selectors like `h1 {}` or `p {}`
- Access global CSS custom properties with `var(--variable-name)`

#### Global Styles

Import global styles in Layout components:

```astro
---
import '../styles/main.css';
---
```

For truly global styles within a component, use `is:global`:

```astro
<style is:global>
  body {
    font-family: system-ui;
  }
</style>
```

Mix scoped and global in one block:

```astro
<style>
  /* Scoped to this component */
  .container {
    padding: 1rem;
  }

  /* Global: affects child components */
  .container :global(h1) {
    color: var(--color-purple-700);
  }
</style>
```

#### CSS Variables with `define:vars`

Pass dynamic values from component script to styles:

```astro
---
const accentColor = 'purple';
---

<style define:vars={{ accentColor }}>
  .button {
    background: var(--accentColor);
  }
</style>
```

#### Conditional Classes with `class:list`

Combine classes dynamically:

```astro
---
const { isActive } = Astro.props;
---

<div class:list={['button', { active: isActive }]}>
  <slot />
</div>
```

#### Cascading Order

Understand CSS evaluation order in Astro:

1. `<link>` tags in head (lowest precedence)
2. Imported stylesheets
3. Scoped `<style>` blocks (highest precedence)

**Import order matters**: When specificity is equal, last import wins.

### Modern CSS Patterns

Use modern CSS features supported in current browsers:

#### CSS Nesting

Native CSS nesting for better organization:

```css
.card {
  padding: 1rem;
  background: var(--color-gray-100);

  & .title {
    font-size: 1.5rem;
    font-weight: 600;
  }

  &:hover {
    background: var(--color-gray-200);
  }

  & a {
    color: var(--color-purple-700);

    &:hover {
      color: var(--color-purple-600);
    }
  }
}
```

#### CSS Custom Properties

Follow the design system naming convention:

- **Colors**: `var(--color-{family}-{shade})` - e.g., `var(--color-purple-700)`
- **Layout**: `var(--container-max-width)`, `var(--site-bg-color)`
- Available families: `gray`, `mint`, `orange`, `pink`, `purple` (shades: 100-1100)

#### Modern CSS Features

Use these features from the reset and modern CSS:

```css
/* Logical properties (direction-aware) */
.element {
  inset: 0;
  block-size: 100%;
  inline-size: 100%;
  padding-block: 1rem;
  margin-inline: auto;
}

/* Low-specificity selectors */
:where(.reset-styles) {
  margin: 0;
  padding: 0;
}

/* Modern text properties */
p {
  text-wrap: pretty;
  overflow-wrap: break-word;
}
```

### CSS Preprocessors

Astro supports Sass, Less, and Stylus via Vite. Install the preprocessor package and use:

```astro
<style lang="scss">
  $primary: var(--color-purple-700);

  .button {
    color: $primary;
  }
</style>
```

## Dependency Management

- **Ask before adding dependencies** - prefer native APIs, Astro features, or small utilities
- Check `package.json` for current package versions
- Package manager: pnpm (specified in package.json)

## Quality Assurance

### Required Checks Before Committing

1. **Type-check**: `pnpm check` - Must pass with 0 errors. If errors occur, report them and get user confirmation (Y/n) before fixing.

2. **Build verification**: `pnpm build` - Verify all routes are static:
   ```
   Expected output:
   ✓ Built in Xms
   Output: "static"
   Routes: XX pages (all should show "static", NOT "server")
   ```
   If any routes show "server" mode, investigate unless explicitly intended.

## Key Configuration Files

- `astro.config.mjs` - Astro configuration with MDX, remark plugins, and TailwindCSS via Vite
- `src/content.config.ts` - Content collection schemas
- `src/styles/main.css` - Tailwind v4 theme configuration using `@theme` syntax
- `tsconfig.json` - TypeScript strict mode with path aliases
- `wrangler.jsonc` - Cloudflare Pages deployment config
