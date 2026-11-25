# Auto Glance Block Theme

WordPress block (FSE) theme built from the **Auto Glance** Figma design
(Home, Services, 3M Tinting, Booking & Contact).

## Structure
- `theme.json` – colours, fonts, layout (Figma variables → WP presets)
- `templates/` – `front-page`, `page-services`, `page-3m-tinting`, `page-booking`, `page`, `single`, `index`, `404`
- `parts/` – `header`, `footer`
- `patterns/` – one pattern per Figma section (Hero, Services, Packages, ...)
- `assets/css/main.css` – design styles, `assets/css/block-fixes.css` – block-theme adjustments
- `functions.php` – assets, pattern category, `[autoglance_booking]` shortcode (opens WhatsApp)

## Pages required in WordPress (Pages → Add New)
| Title | Slug | Template used |
|---|---|---|
| Home (any title) | any | `front-page` (always used for the site front page) |
| Services | `services` | `page-services` |
| 3M Tinting | `3m-tinting` | `page-3m-tinting` |
| Contact | `contact` | `page-booking` (choose template "Booking & Contact") |

Create the pages with these slugs (content can be empty), then Settings → Permalinks → "Post name".

## Figma ↔ code workflow
1. Change the design in Figma.
2. Ask Claude: "Update the theme from this Figma frame: <link>". Claude edits `patterns/` / `theme.json`.
3. Review in Local → `git commit` → `git push`.
4. Changed something in WordPress/code? Ask Claude to push it back to Figma.

## Git
```
git init
git add .
git commit -m "Initial Auto Glance block theme"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```
