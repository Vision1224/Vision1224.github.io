# Damian Valencia: Automation & Support Engineer

Personal site and resume, published with GitHub Pages at https://vision1224.github.io/

## Design

- **Direction:** a calm control room. Graphite background, one signal-amber accent, mono type for machine output, and a pipeline diagram that shows the review gate before anything is sent.
- **Type:** Bricolage Grotesque for text, JetBrains Mono for code and labels (Google Fonts).
- **Motion:** CSS-only pipeline and console animations, plus a small script for scroll reveals and the timeline. Everything is switched off under `prefers-reduced-motion`.
- **Accessibility:** semantic sections and headings, a skip link, visible focus styles, and content that is fully readable without JavaScript.

## Files

```
index.html                 the whole page
assets/css/site.css        all styles
assets/js/site.js          scroll reveal and timeline progress (optional)
```

## Edit

- Content lives in `index.html`. Each role, project and skill is a plain block.
- Colors and fonts are CSS variables at the top of `assets/css/site.css`.
- Preview locally with `python -m http.server 8000` in this folder, then open http://localhost:8000.

## License

MIT. See [LICENSE](LICENSE).
