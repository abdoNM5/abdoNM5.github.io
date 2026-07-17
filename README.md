# Abdelkader Anmira – Data Portfolio
testiw hdchy wech t changa
Modern React + TypeScript portfolio built with Vite, bespoke CSS, and EmailJS-powered contact automation. This repository is intended to replace the legacy site currently hosted at **https://abdonm5.github.io**.

## ✨ Highlights

- Component-based layout with dedicated routes for Home, Projects, Education, About, and Contact
- Rich project storytelling (detail modal, media carousels, GitHub links)
- EmailJS integration capturing name, subject, message, and reply-to for direct follow-ups
- Responsive grid/flex design, AOS scroll animations, and React Icons

## 🧱 Tech Stack

| Frontend | Tooling | Content |
| --- | --- | --- |
| React 18 · TypeScript | Vite · ESLint · tsconfig paths | EmailJS · AOS · React Icons |

## 🚀 Getting Started

```bash
git clone <repo-url>
cd portofolio
npm install
npm run dev
```

Visit `http://localhost:5173` while the dev server runs.

## ⚙️ Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check + bundle into `dist/` |
| `npm run preview` | Serve production build locally |

## 🔐 Environment Variables

Create a `.env` (ignored) with:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

`Contact.tsx` sends `from_name`, `from_email`, `subject`, and `message` template variables.

## 📦 Structure

```
src/
├─ components/      # Feature + section components
├─ styles/          # Component-scoped CSS
├─ App.tsx          # Route shell + layout
└─ main.tsx         # Entry point
```

Docs such as `ROUTING_GUIDE.md`, `QUICK_START.md`, and `DOCUMENTATION.md` provide additional context for content editing.

## 🌐 Deploying to abdonm5.github.io

This project should replace the current GitHub Pages portfolio. Recommended flow inside VS Code:

1. **Build locally**
   ```bash
   npm run build
   ```
2. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: refresh portfolio"
   ```
3. **Point to existing repo** (only once)
   ```bash
   git remote add origin git@github.com:abdoNM5/abdoNM5.github.io.git
   ```
4. **Push main branch**
   ```bash
   git push origin main
   ```
5. Ensure GitHub Pages serves from the default branch (Settings ▸ Pages ▸ Source ▸ `main`). If you prefer a static `dist/` deploy, run `npm run build` and push the contents of `dist/` to the `gh-pages` branch (e.g., via `gh-pages -d dist`).

## 🧭 Customization Checklist

- Replace placeholder text marked with `(eg)` across `Home.tsx`, `About.tsx`, `Education.tsx`, `Projects.tsx`, and `Contact.tsx`
- Swap media assets under `media/images` and `media/videos`
- Adjust theme tokens (colors, fonts) inside `src/styles/global.css`

## 🛟 Troubleshooting

- **Env vars missing** → populate `.env`, restart Vite
- **Port conflict** → `npm run dev -- --port 4000`
- **EmailJS errors** → confirm template expects `from_email`, `subject`, `message`

---
Maintained by Abdelkader Anmira · React + TypeScript + Vite