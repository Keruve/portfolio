# Portfolio - Hybrid Software Engineer & 3D Designer

A professional portfolio website built with Next.js 14, showcasing projects at the intersection of software engineering and 3D design.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX for project case studies
- **Animations:** Framer Motion
- **Icons:** React Icons

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── projects/            # Projects pages
│   ├── skills/              # Skills page
│   ├── about/               # About page
│   └── contact/             # Contact page
├── components/              # React components
│   ├── layout/              # Layout components (Header, Footer)
│   ├── projects/            # Project-related components
│   ├── skills/              # Skills components
│   └── ui/                  # Reusable UI components
├── content/                 # MDX content files
│   └── projects/            # Project case studies
├── data/                    # JSON data files
│   ├── projects.json        # Projects metadata
│   └── skills.json          # Skills data
├── types/                   # TypeScript type definitions
│   └── index.ts             # Main types file
└── public/                  # Static assets
    └── projects/            # Project images and assets
```

## 🎨 Design System

### Colors
- **Primary:** Blue (technical/engineering)
- **Accent:** Orange (creative/3D)
- **Dark Mode:** Default with toggle capability

### Typography
- **Sans:** Inter
- **Mono:** JetBrains Mono

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

### Adding a New Project

1. Create a new MDX file in `content/projects/`:
```mdx
# Project Title

Project content here...
```

2. Add project metadata to `data/projects.json`:
```json
{
  "id": "unique-id",
  "slug": "project-slug",
  "title": "Project Title",
  ...
}
```

3. Add project images to `public/projects/project-slug/`

### Project Visibility Levels

- **Public:** Show repository link and code examples
- **Showcase:** Show demo and architecture, no source code
- **Confidential:** Only show case study and technical decisions

## 🎯 Key Features

- **Responsive Design:** Mobile-first approach
- **Dark Mode:** Built-in dark theme support
- **Filterable Projects:** Filter by type, technology, skill, visibility
- **Case Studies:** Detailed project breakdowns with MDX
- **Performance Optimized:** Image optimization, lazy loading
- **SEO Friendly:** Metadata and structured data

## 📦 Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## 🔧 Customization

### Update Personal Info

1. Edit contact links in `components/layout/Footer.tsx`
2. Update social links in `app/contact/page.tsx`
3. Modify hero text in `app/page.tsx`

### Change Colors

Edit `tailwind.config.ts` to customize the color palette.

### Add New Pages

Create new folders in `app/` following the Next.js App Router conventions.

## 📄 License

This is a personal portfolio template. Feel free to use it as inspiration for your own portfolio.

## 🤝 Contributing

This is a personal portfolio project. If you find bugs or have suggestions, feel free to open an issue.

---

Built with ❤️ using Next.js
