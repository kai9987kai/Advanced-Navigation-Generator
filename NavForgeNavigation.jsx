/**
 * NavForge Pro 3 — React 18+ navigation component.
 * Generated directly from the current builder configuration.
 * Import and render <NavForgeNavigation />. CSS is included in this component.
 * No unsafe HTML injection is used: React renders page names and URLs directly.
 * Custom CSS and legacy CSS must be trusted because the generator preserves author-authored CSS.
 */
import React, { useEffect, useId, useMemo, useRef, useState } from 'react';

const initialConfig = {"settings":{"navType":"horizontal","navVariant":"glass","brandName":"NavForge","brandInitial":"N","brandUrl":"#home","showBrand":true,"showIcons":true,"showSearch":false,"responsive":true,"animated":true,"compact":false,"transparent":true,"position":"normal","navBg":"#111827","navText":"#ffffff","navAccent":"#7c3aed","hoverBg":"rgba(255,255,255,0.14)","radius":18,"gap":10,"padding":12,"fontSize":15,"customCss":"","extraInlineStyle":"","exportMode":"component","includeDemoContent":true,"breakpoint":720,"hoverDropdowns":true,"showSkipLink":true,"navAlign":"end","navLabel":"Main navigation","searchPlaceholder":"Search pages","inlineStyleMode":"safe"},"pages":[{"id":"p-mvbrsb3ulm287z3yqr","name":"Home","link":"#home","icon":"🏠","active":true,"newTab":false,"group":"Main"},{"id":"p-mvbrsb3ubncaph2qfd7","name":"Projects","link":"#projects","icon":"🚀","active":false,"newTab":false,"group":"Main"},{"id":"p-mvbrsb3ueswut79xaph","name":"Docs","link":"#docs","icon":"📚","active":false,"newTab":false,"group":"Resources"},{"id":"p-mvbrsb3u9tiyaoia9no","name":"Contact","link":"#contact","icon":"✉️","active":false,"newTab":false,"group":"Main"}]};
const generatedCss = "/* NavForge Pro 3 - isolated navigation component CSS */\n.generated-nav{--nav-bg:#111827;--nav-text:#fff;--nav-accent:#7c3aed;--nav-hover:rgba(255,255,255,.14);--nav-radius:18px;--nav-gap:10px;--nav-padding:12px;--nav-font-size:15px;--nav-align:flex-end;--nav-shadow:0 18px 48px rgba(15,23,42,.18);position:relative;z-index:15;width:100%;background:var(--nav-bg);color:var(--nav-text);border:1px solid color-mix(in srgb,var(--nav-text),transparent 82%);border-radius:var(--nav-radius);box-shadow:var(--nav-shadow);font:400 var(--nav-font-size)/1.4 system-ui,-apple-system,Segoe UI,sans-serif;box-sizing:border-box}\n.generated-nav *, .generated-nav *::before,.generated-nav *::after{box-sizing:border-box}\n.generated-nav a,.generated-nav button,.generated-nav input{font:inherit}\n.generated-nav a{color:inherit}.generated-nav button{color:inherit;cursor:pointer}.generated-nav :is(a,button,input):focus-visible{outline:3px solid #ffdc6c;outline-offset:3px;z-index:2}\n.generated-nav.sticky{position:sticky;top:0;z-index:900}.generated-nav.fixed{position:fixed;top:0;left:0;right:0;width:100%;z-index:900;border-radius:0}.generated-nav-placeholder{height:0}\n.generated-nav.transparent,.generated-nav.glass{background:color-mix(in srgb,var(--nav-bg),transparent 22%);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px)}\n.generated-nav.gradient{background:linear-gradient(115deg,var(--nav-bg),color-mix(in srgb,var(--nav-bg),var(--nav-accent) 40%))}\n.generated-nav.pill{border-radius:999px}.generated-nav.minimal{box-shadow:none}.generated-nav.neo{box-shadow:7px 7px 0 rgba(0,0,0,.24);border:2px solid currentColor}.generated-nav.outline{box-shadow:none;border:2px solid var(--nav-accent)}\n.generated-nav-inner{display:flex;align-items:center;gap:var(--nav-gap);padding:var(--nav-padding);min-width:0}\n.generated-nav.vertical .generated-nav-inner{flex-direction:column;align-items:stretch}.generated-nav.vertical .generated-brand{margin-inline-end:0}\n.generated-brand{display:inline-flex;align-items:center;gap:10px;white-space:nowrap;text-decoration:none;font-weight:800;letter-spacing:-.025em;flex:none}\n.generated-brand-mark{display:grid;place-items:center;width:36px;height:36px;border-radius:12px;background:var(--nav-accent);color:#fff;font-size:1.05em}\n.generated-menu{display:flex;align-items:center;justify-content:var(--nav-align);gap:var(--nav-gap);flex-wrap:wrap;margin-inline-start:0;min-width:0;flex:1}\n.generated-nav.vertical .generated-menu{display:grid;margin:0;width:100%;justify-content:stretch;align-items:stretch;flex:none}\n.generated-menu .nav-link,.generated-drop-toggle{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:44px;padding:9px 13px;border-radius:max(6px,calc(var(--nav-radius) - 7px));border:1px solid transparent;color:var(--nav-text);font-weight:680;text-decoration:none;background:transparent;white-space:nowrap;transition:background .18s,transform .18s}\n.generated-nav.pill .nav-link,.generated-nav.pill .generated-drop-toggle,.generated-nav.pill .generated-search{border-radius:999px}\n.generated-nav .nav-link:hover,.generated-nav .nav-link:focus-visible,.generated-nav .generated-drop-toggle:hover,.generated-nav .generated-drop-toggle[aria-expanded=\"true\"]{background:var(--nav-hover)}\n.generated-nav .nav-link.active{background:var(--nav-accent);color:#fff}.generated-nav .nav-link[hidden],.generated-nav .generated-drop[hidden],.generated-nav .generated-drop-menu[hidden]{display:none!important}\n.generated-drop{position:relative}.generated-drop-toggle{width:100%}.generated-drop .caret{display:inline-block;width:7px;height:7px;transform:rotate(45deg);border-bottom:2px solid currentColor;border-right:2px solid currentColor;margin-left:4px;margin-bottom:4px}.generated-drop-toggle[aria-expanded=\"true\"] .caret{transform:rotate(225deg);margin-bottom:0;margin-top:4px}\n.generated-drop-menu:not([hidden]){display:grid;gap:3px;position:absolute;left:0;top:calc(100% + 5px);min-width:max(205px,100%);z-index:40;padding:7px;background:var(--nav-bg);border:1px solid color-mix(in srgb,var(--nav-text),transparent 80%);border-radius:13px;box-shadow:var(--nav-shadow)}\n.generated-drop-menu .nav-link{justify-content:flex-start;white-space:normal;text-align:start}\n.generated-search{display:flex;gap:6px;align-items:center;min-width:125px;max-width:230px;border:1px solid color-mix(in srgb,var(--nav-text),transparent 75%);background:color-mix(in srgb,var(--nav-text),transparent 91%);border-radius:11px;padding:8px 9px;flex:1}\n.generated-search input{min-width:0;width:100%;border:0;outline:0!important;background:transparent;color:var(--nav-text);padding:2px}.generated-search input::placeholder{color:var(--nav-text);opacity:.75}.generated-search:focus-within{outline:3px solid #ffdc6c;outline-offset:2px}\n.generated-nav .sr-only,.navforge-skip{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.navforge-skip:focus{clip:auto;width:auto;height:auto;z-index:10000;left:10px;top:10px;background:#fff;color:#111;padding:12px;border:3px solid #111}\n.generated-mobile-toggle{display:none;flex:none;margin-inline-start:auto;width:44px;height:44px;border:1px solid color-mix(in srgb,var(--nav-text),transparent 72%);border-radius:11px;background:transparent}.generated-mobile-toggle span{display:block;background:currentColor;width:19px;height:2px;margin:4px auto;border-radius:2px}\n.generated-nav.compact .nav-link,.generated-nav.compact .generated-drop-toggle{padding:6px 10px;min-height:36px}\n.generated-nav.animated .nav-link:not(.active):hover,.generated-nav.animated .generated-drop-toggle:hover{transform:translateY(-1px)}\n@media(max-width:720px){.generated-nav.responsive .generated-mobile-toggle{display:block}.generated-nav.responsive .generated-nav-inner{flex-wrap:wrap}.generated-nav.responsive .generated-menu,.generated-nav.responsive .generated-search{display:none;width:100%}.generated-nav.responsive.is-open .generated-menu{display:grid;justify-content:stretch;align-items:stretch;order:5;margin:0}.generated-nav.responsive.is-open .generated-search{display:flex;order:6;max-width:none}.generated-nav.responsive .generated-drop-menu:not([hidden]){position:static;min-width:0;box-shadow:none;margin-top:5px}.generated-nav.responsive .generated-drop{width:100%}.generated-nav.responsive .nav-link,.generated-nav.responsive .generated-drop-toggle{justify-content:flex-start;white-space:normal}.generated-nav.responsive.pill{border-radius:20px}}\n@media(prefers-reduced-motion:reduce){.generated-nav *{transition:none!important;animation:none!important;scroll-behavior:auto!important}}\n@media(forced-colors:active){.generated-nav .nav-link.active,.generated-nav .nav-link:focus-visible,.generated-drop-toggle:focus-visible{outline:2px solid Highlight;outline-offset:2px}}\n/* User custom CSS follows. Any '<' is CSS-escaped to prevent ending the style element. */\n\n";
const generatedInlineStyle = "";

function safeHref(raw) {
  const href = String(raw ?? '').trim();
  if (!href || /[\u0000-\u001f\u007f\\<>"'`]/.test(href)) return '#';
  if (href.startsWith('//')) return /^\/\/[\w.-]+(?:[:/?#]|$)/.test(href) ? href : '#';
  if (/^[a-z][a-z\d+.-]*:/i.test(href)) {
    try { return ['https:', 'http:', 'mailto:', 'tel:'].includes(new URL(href).protocol) ? href : '#'; }
    catch { return '#'; }
  }
  if ((href.split(/[/?#]/)[0] || '').includes(':')) return '#';
  return href;
}

export default function NavForgeNavigation() {
  const { settings: s, pages } = initialConfig;
  const id = useId().replace(/:/g, '');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openedGroup, setOpenedGroup] = useState(null);
  const [query, setQuery] = useState('');
  const [fixedHeight, setFixedHeight] = useState(0);
  const navRef = useRef(null);
  useEffect(() => {
    // Preserve trusted legacy inline declarations, including properties outside the safe allowlist.
    if (navRef.current && generatedInlineStyle) navRef.current.style.cssText += ';' + generatedInlineStyle;
  }, []);
  const groupRefs = useRef(new Map());
  const mobileRef = useRef(null);
  const groups = useMemo(() => {
    const out = new Map();
    for (const p of pages) {
      const group = String(p.group || 'Main').trim() || 'Main';
      if (group.toLowerCase() === 'main') continue;
      if (!out.has(group)) out.set(group, []);
      out.get(group).push(p);
    }
    return [...out.entries()];
  }, [pages]);
  const mainPages = useMemo(() => pages.filter(p => !String(p.group || 'Main').trim() || String(p.group).trim().toLowerCase() === 'main'), [pages]);
  const matches = p => !query || (p.name + ' ' + p.icon).toLocaleLowerCase().includes(query.trim().toLocaleLowerCase());
  const visibleTotal = pages.filter(matches).length;

  useEffect(() => {
    function outside(e) { if (!navRef.current?.contains(e.target)) setOpenedGroup(null); }
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, []);

  useEffect(() => {
    if (s.position !== 'fixed' || !navRef.current) return;
    const node = navRef.current;
    const update = () => setFixedHeight(node.getBoundingClientRect().height);
    update();
    const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(update) : null;
    observer?.observe(node);
    window.addEventListener('resize', update);
    return () => { observer?.disconnect(); window.removeEventListener('resize', update); };
  }, [s.position, mobileOpen, query, openedGroup]);

  const style = {
    '--nav-bg': s.navBg, '--nav-text': s.navText, '--nav-accent': s.navAccent,
    '--nav-hover': s.hoverBg, '--nav-radius': `${s.radius}px`,
    '--nav-gap': `${s.gap}px`, '--nav-padding': `${s.padding}px`,
    '--nav-font-size': `${s.fontSize}px`,
    '--nav-align': s.navAlign === 'center' ? 'center' : s.navAlign === 'start' ? 'flex-start' : 'flex-end'
  };
  const classes = [
    'generated-nav', s.navType === 'vertical' && 'vertical', s.navVariant,
    s.transparent && 'transparent', s.responsive && 'responsive', s.animated && 'animated',
    s.compact && 'compact', s.position === 'sticky' && 'sticky',
    s.position === 'fixed' && 'fixed', s.hoverDropdowns && 'hover-dropdowns',
    mobileOpen && 'is-open'
  ].filter(Boolean).join(' ');

  const closeMenu = () => { setOpenedGroup(null); setMobileOpen(false); };
  const renderLink = p => (
    <a key={p.id} href={safeHref(p.link)}
       className={'nav-link' + (p.active ? ' active' : '')}
       aria-current={p.active ? 'page' : undefined}
       target={p.newTab ? '_blank' : undefined}
       rel={p.newTab ? 'noopener noreferrer' : undefined}
       onClick={closeMenu}>
      {s.showIcons && p.icon && <span className="nav-icon" aria-hidden="true">{p.icon}</span>}
      <span>{p.name || 'Untitled'}</span>
    </a>
  );
  function onGroupKeys(e, name, filtered) {
    if (e.key === 'Escape') {
      e.preventDefault();setOpenedGroup(null);
      groupRefs.current.get(name)?.querySelector('.generated-drop-toggle')?.focus();return;
    }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) return;
    const buttons = [...(groupRefs.current.get(name)?.querySelectorAll('.generated-drop-menu .nav-link') || [])];
    const index = buttons.indexOf(document.activeElement);
    if (index < 0 && !e.target.classList.contains('generated-drop-toggle')) return;
    e.preventDefault();setOpenedGroup(name);
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? filtered.length - 1
      : index < 0 ? (e.key === 'ArrowUp' ? filtered.length - 1 : 0)
      : Math.max(0, Math.min(filtered.length - 1, index + (e.key === 'ArrowDown' ? 1 : -1)));
    requestAnimationFrame(() => buttons[next]?.focus());
  }

  return <>
    <style>{generatedCss}</style>
    {s.showSkipLink && <a className="navforge-skip" href="#home">Skip to main content</a>}
    <nav ref={navRef} className={classes} style={style} aria-label={s.navLabel || 'Main navigation'}
      onKeyDown={e => {
        if (e.key !== 'Escape') return;
        if (openedGroup !== null) { e.preventDefault();setOpenedGroup(null); }
        else if (mobileOpen) {e.preventDefault();setMobileOpen(false);mobileRef.current?.focus();}
      }}>
      <div className="generated-nav-inner">
        {s.showBrand && <a className="generated-brand" href={safeHref(s.brandUrl || '#home')} aria-label={`${s.brandName || 'Navigation'} home`}>
          <span className="generated-brand-mark" aria-hidden="true">{s.brandInitial || s.brandName?.[0] || 'N'}</span>
          <span>{s.brandName || 'Navigation'}</span>
        </a>}
        {s.responsive && <button ref={mobileRef} className="generated-mobile-toggle" type="button"
          aria-label="Toggle navigation" aria-controls={`${id}-links`} aria-expanded={mobileOpen}
          onClick={() => {setMobileOpen(v=>!v);setOpenedGroup(null);}}>
          <span/><span/><span/>
        </button>}
        <div className="generated-menu" id={`${id}-links`}>
          {mainPages.filter(matches).map(renderLink)}
          {groups.map(([name, links], i) => {
            const filtered = links.filter(matches);
            if (query && !filtered.length) return null;
            const open = openedGroup === name || (query.trim() !== '' && openedGroup === null);
            return <div key={name} className="generated-drop"
              ref={node => {if(node)groupRefs.current.set(name,node);else groupRefs.current.delete(name);}}
              onPointerEnter={e => {if(s.hoverDropdowns && e.pointerType === 'mouse' && matchMedia('(hover:hover)').matches) setOpenedGroup(name);}}
              onPointerLeave={e => {if(s.hoverDropdowns && e.pointerType === 'mouse' && !e.currentTarget.contains(document.activeElement))setOpenedGroup(null);}}
              onBlur={e => {if(!e.currentTarget.contains(e.relatedTarget))setOpenedGroup(null);}}
              onKeyDown={e => onGroupKeys(e,name,filtered)}>
              <button type="button" className="generated-drop-toggle" aria-expanded={open}
                aria-controls={`${id}-group-${i}`} onClick={() => setOpenedGroup(open ? 'closed' : name)}>
                {name} <span className="caret" aria-hidden="true"/>
              </button>
              <div className="generated-drop-menu" id={`${id}-group-${i}`} hidden={!open}>
                {filtered.map(renderLink)}
              </div>
            </div>;
          })}
        </div>
        {s.showSearch && <label className="generated-search">
          <span aria-hidden="true">⌕</span>
          <input type="search" value={query} onChange={e => {setQuery(e.target.value);if(e.target.value)setMobileOpen(true);setOpenedGroup(null);}}
            placeholder={s.searchPlaceholder || 'Search'} aria-label="Search navigation links"
            onKeyDown={e => {if(e.key === 'Escape' && query){e.stopPropagation();setQuery('');}}}/>
          <span className="sr-only" aria-live="polite">{visibleTotal} navigation links found</span>
        </label>}
      </div>
    </nav>
    {s.position === 'fixed' && <div className="generated-nav-placeholder" style={{height:fixedHeight}} aria-hidden="true"/>}
  </>;
}
