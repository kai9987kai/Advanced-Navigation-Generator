# NavForge Pro 3 — feature-preserving navigation design studio

**Release:** 3.0 · **Editor:** one self-contained HTML file · **Network requirements:** none · **Generated output:** HTML/CSS/JavaScript or React JSX · **Browser verification:** headless Chromium

## Start here

Open `main.html` or `NavForge_Pro_v3.html` in a modern browser. All editing and live preview capabilities run locally, without a CDN or build step. For an immediately usable exported example, open `NavForge_Generated_Example.html`. For React 18+, import `NavForgeNavigation.jsx` into a project that already has React configured.

This version is based on the supplied **Advanced Navigation Generator Pro** and is an extension of **NavForge Pro 2**. It restores compatibility for arbitrary *trusted* original inline CSS via an explicit, opt-in mode, preserves interactive preview state while editing, and adds a React JSX component export. It also restores a clearly labelled **Full Page HTML** download regardless of the selected component-only export mode.

## Changes from version 2

1. **Preview-state persistence:** The isolated preview sends its menu-open state, expanded groups and search term to the editor. When a setting causes preview regeneration, the editor restores those states. Communication uses `postMessage`; the iframe **remains sandboxed without `allow-same-origin`**. The editor retains keyboard focus when editing settings. Automatic focus restoration into the iframe was deliberately avoided to prevent stealing focus from the editor.
2. **Trusted legacy CSS:** Extra inline CSS formerly filtered in Pro 2 can now be exported under **Colours & spacing → Inline CSS compatibility → Legacy: all original declarations**. Original version-1 JSON configurations with declarations outside the safe subset automatically select the legacy option on import. Default **Safe mode** continues to filter risky declarations. Legacy mode permits external resources and unusual styling; use it only with trusted configurations.
3. **React support:** **React JSX** source tab and **Download React JSX** generate a native React component using React hooks. The exported JSX renders link labels through React (not `dangerouslySetInnerHTML`), supports disclosure groups, touch/mobile menu, search, keyboard operation, and supplies the generated CSS. The editor itself remains a standalone vanilla JavaScript program.
4. **Full document preserved:** A dedicated **Full Page HTML** action always creates the complete working HTML demo regardless of component export mode. Newly reset projects default to **Complete demo page** mode; users can still choose component-only export. `includeDemoContent` remains an independent toggle for regular full/document exports.
5. **Safe migration and state:** Configuration keys from the original file and version 2 remain supported, with precedence v3 → v2 → v1 in browser local storage. The existing 4 original presets remain unchanged in availability, plus 2 more presets.
6. **Regression coverage:** The 39 prior browser checks were retained, and 22 targeted checks were added for preview persistence, legacy CSS, full-page exports and JSX generation. The React code was syntax/transpilation tested, not exercised against a running React installation.

## Preserved features from the original source

| Original feature | Pro 3 implementation |
|---|---|
| Glass SaaS, Rounded Pill, Clean Minimal, Neo Brutal presets | All four available; Aurora Gradient and Outline Studio additionally available |
| Horizontal / vertical navigation | Both retained |
| Normal / sticky / fixed position selection | All retained, with real CSS fixed positioning plus spacer |
| Brand name, mark and visibility | All retained, plus brand URL and accessible nav label |
| Colour pickers (background, text and accent), hover colour | All retained |
| Spacing: radius, gap, padding and font size | All retained; additional controls made explicit |
| Show icons, show search, responsive mode, animated, compact and transparent | All retained; search now actually filters links |
| Multiple navigation pages | Name, URL, icon, group, current-page flag, new-tab target all retained |
| Create/duplicate/delete and reorder pages | All retained, plus undo/redo |
| Filter builder pages; flatten groups | Both retained |
| Dropdown group generation | Retained, with functional click/touch, Escape and arrow-key handling |
| Desktop/tablet/mobile preview | Retained, with adjustable viewport width and state restoration |
| Live generated HTML, CSS, JSON and full-page output | All retained, plus JS and React JSX output tabs |
| Copy current code, copy full page, export HTML/JSON, import JSON | All retained, with full-page action, CSS, JS and JSX download options |
| Local autosave | Retained with v1/v2 configuration migration and local status |
| Light/dark editor mode | Retained |
| Additional custom CSS and extra inline declarations | Both retained; legacy toggle for arbitrary trusted original declarations |
| `exportMode` and `includeDemoContent` configuration | Both retained and now exposed as controls |
| Toast notices and status | Retained |

The generator still validates page links and escapes HTML markup. `javascript:` links are blocked instead of being emitted; this is an intentional security restriction compared with permissive original inputs. There are data size/validation limits. Its UI design and framework differ from the original. The original 72 KB file and Pro 2 are included in the ZIP for comparison.

## Exporting and integrating

**Standalone HTML:** Click **Full Page HTML** for a complete sample website. **Download HTML** follows the **Download HTML mode** setting; selecting **Component only** generates a standalone document containing navigation but no sample content. The Full Page source tab displays full HTML using the `includeDemoContent` setting. Use the HTML tab for just the navigation markup and combine it with the CSS and JavaScript tabs when embedding into an existing website.

**React:** Select **React JSX**, copy its source, or click **Download React JSX**. Add that file to a React 18+ project and use `import NavForgeNavigation from './NavForgeNavigation';` then `<NavForgeNavigation />`. The exported component includes CSS directly and has its own React state. Configuration is captured at export time. React module resolution and bundling are performed by your application, not the offline generator.

**JSON backup:** Export JSON before significant edits, especially if browser storage is unavailable. JSON imports are normalized and are limited in size for stability. Version-1 configurations are accepted. Imported trusted original CSS may automatically switch to legacy mode and generate a quality warning.

**Legacy inline styles:** In Safe mode, extra inline declarations are validated against a limited property set. Legacy mode restores arbitrary original declarations; it is not a CSS sandbox. Use only for configurations you author or trust. Extra CSS may load external images/fonts. If you need a strict Content Security Policy, move generated CSS and JavaScript to appropriate standalone assets and review inline styles.

## Checks and evidence

- Version 3 was previously tested with 39 baseline and 22 targeted passing Chromium checks. These are historical test results, not CI results for this GitHub commit.
- Full Python/Playwright test scripts and detailed JSON reports are retained in the downloadable version-3 project package.
- `NavForge_Pro_v3_AUDIT.md` — bug resolution, feature matrix and known limitations.

**Important:** 61 passing checks do not establish equivalence across all browsers, all websites, or all assistive technologies. Tests have not established production WCAG conformance or full runtime compatibility for the React JSX export. Screen readers, Safari, Firefox, external CSS conflicts, large configs and unusual Content Security Policies remain to be validated.

## Design guidance

- W3C WAI APG, [Disclosure Navigation Menu](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)
- W3C, [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- OWASP, [DOM-based XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html)
- MDN, [Window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
- React, [Hooks reference](https://react.dev/reference/react/hooks)

## GitHub repository structure

- `index.html` redirects GitHub Pages visitors to the self-contained editor.
- `main.html` is the maintained main application.
- `NavForge_Pro_v3.html` is an identical version-stamped copy for standalone use.
- `NavForgeNavigation.jsx` is the optional React 18+ component export.
- `examples/NavForge_Generated_Example.html` demonstrates a standalone exported navigation.
- `docs/FEATURE_AUDIT.md` contains the original feature-compatibility audit.
- `legacy/Advanced_Navigation_Generator_Original.html` preserves the former `main.html` implementation.

For GitHub Pages, publish the repository root of the `main` branch. `index.html` opens the editor at `main.html`.
