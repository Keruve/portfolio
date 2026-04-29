# Project Images Placeholder

This directory should contain your project images.

## Structure

```
public/
└── projects/
    └── [project-slug]/
        ├── thumbnail.jpg    # 600x400px - Used in project cards
        ├── cover.jpg        # 1920x820px - Used in project hero
        └── gallery/
            ├── image-1.jpg  # Process images
            ├── image-2.jpg
            └── ...
```

## Image Guidelines

### Thumbnails
- **Size:** 600x400px (3:2 aspect ratio)
- **Format:** JPG or WebP
- **Optimization:** Compress to <100KB

### Cover Images
- **Size:** 1920x820px (21:9 aspect ratio)
- **Format:** JPG or WebP
- **Optimization:** Compress to <300KB

### Gallery Images
- **Size:** 1200x800px minimum
- **Format:** JPG or WebP
- **Optimization:** Compress to <200KB each

## Optimization Tools

- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- ImageMagick command line

## Placeholder Images

For development, you can use:
- [Unsplash](https://unsplash.com/) for free high-quality photos
- [Placeholder.com](https://placeholder.com/) for quick placeholders
- Create solid color images with your favorite image editor

Replace these with your actual project images before deployment.
