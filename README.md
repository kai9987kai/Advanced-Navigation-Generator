# Advanced Navigation Generator Pro

Advanced Navigation Generator Pro is a single-file React-powered web app for building, previewing, customizing, exporting, and reusing modern website navigation bars. It keeps the original idea of generating custom navigation from page names and links, then upgrades it with responsive layouts, presets, dropdown groups, branding controls, icons, live device previews, code export, JSON import/export, accessibility improvements, and local autosave.

---

## ✨ Overview

The original project allowed users to:

- Choose horizontal or vertical navigation.
- Add page names and links.
- Generate a navigation preview.
- Copy generated navigation code.

This upgraded version keeps those core features and expands the project into a much more complete navigation builder for real websites, dashboards, landing pages, prototypes, and UI experiments.

Advanced Navigation Generator Pro is designed to run fully in the browser with no backend required.

---

## 🚀 Features

### Core Navigation Builder

- Create custom navigation bars visually.
- Add unlimited navigation items.
- Edit page name and page link.
- Choose between horizontal and vertical navigation.
- Live preview updates as settings change.
- Generate reusable HTML and CSS.
- Copy generated code to the clipboard.

### Modern Layout Controls

- Horizontal navigation.
- Vertical sidebar-style navigation.
- Sticky navigation option.
- Fixed-style preview option.
- Compact mode for dashboards and dense interfaces.
- Responsive hamburger navigation for mobile layouts.
- Desktop, tablet, and mobile preview modes.

### Navigation Item Controls

Each page/link supports:

- Page name.
- Page URL or anchor link.
- Optional icon or emoji.
- Group name.
- Active page state.
- Open in new tab option.
- Reordering.
- Duplication.
- Removal.

### Dropdown Group System

Navigation links can be grouped automatically.

Items assigned to `Main` appear directly in the main navigation bar.

Items assigned to another group, such as:

- `Resources`
- `Company`
- `Tools`
- `Docs`
- `Account`

are automatically placed inside dropdown menus.

### Branding Controls

- Show or hide brand area.
- Custom brand name.
- Custom brand mark / initial.
- Gradient brand badge.
- Accessible home link label.

### Style Presets

Includes several built-in navigation style presets:

- **Glass SaaS** — translucent blurred modern nav.
- **Rounded Pill** — soft rounded app-style navigation.
- **Clean Minimal** — simple white professional navigation.
- **Neo Brutal** — bold high-contrast playful style.

### Visual Customization

Customize:

- Background color.
- Text color.
- Accent color.
- Hover background.
- Border radius.
- Link gap.
- Padding.
- Font size.
- Transparent glass effect.
- Animated hover underline.
- Custom CSS.

### Search Bar Toggle

Optionally add a search field inside the generated navigation.

Useful for:

- Documentation sites.
- Dashboards.
- Tool hubs.
- Large content websites.
- Admin interfaces.

### Live Preview

The app includes a live preview area with:

- Desktop preview.
- Tablet preview.
- Mobile preview.
- Mobile menu toggle simulation.
- Mock page content.
- Real dropdown behavior.
- Same styling used by exported code.

### Code Export

Generate and copy:

- Full standalone HTML page.
- Navigation-only HTML.
- CSS-only output.
- JSON configuration.

### Import / Export

- Download a full `.html` file.
- Export navigation settings as `.json`.
- Import a saved `.json` configuration.
- Continue editing previous navigation setups.

### Local Autosave

The app automatically saves your current navigation builder state in `localStorage`.

Saved data includes:

- Navigation items.
- Style settings.
- Brand settings.
- Feature toggles.
- Theme mode.

### Accessibility Improvements

The generated navigation includes:

- `aria-label` for main navigation.
- `aria-current="page"` for active links.
- Accessible mobile menu button labels.
- Dropdown menu structure.
- Safer external link handling with `rel="noopener noreferrer"`.
- Keyboard-focus-friendly link styles.

### Safer Code Generation

The upgraded version avoids the main issues in the original version:

- Does not call `outerHTML` on React elements.
- Does not pass invalid string styles into React’s `style` prop.
- Escapes generated HTML safely.
- Blocks dangerous `javascript:` links.
- Uses structured navigation data to generate output reliably.

---

## 🧠 Why This Version Is Better

The original version was a basic navigation generator. This version turns it into a full navigation design studio.

| Area | Original Version | Advanced Version |
|---|---|---|
| Navigation types | Horizontal / vertical | Horizontal / vertical / responsive / sticky |
| Styling | Raw style text input | Visual controls, presets, custom CSS |
| Page items | Name and link | Name, link, icon, group, active state, new tab |
| Preview | Basic nav preview | Desktop, tablet, mobile live preview |
| Code generation | Bug-prone React element output | Safe structured HTML/CSS generation |
| Export | Copy generated code | Copy, download HTML, export/import JSON |
| Persistence | None | Local autosave |
| Accessibility | Minimal | ARIA labels, active states, safer links |
| Mobile support | None | Responsive hamburger mode |
| Dropdowns | None | Automatic grouped dropdowns |

---

## 📁 Project Structure

This is a single-file app.

```text
advanced-navigation-generator-pro.html
