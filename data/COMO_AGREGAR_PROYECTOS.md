# Guía para Agregar Proyectos

Este documento explica cómo agregar y gestionar proyectos en tu portfolio.

## 📁 Estructura de Datos

Los proyectos se gestionan de forma centralizada en `/data/projects.json`. Los cambios en este archivo se reflejan automáticamente en:
- Página principal (proyectos destacados)
- Página de proyectos (todos los proyectos con filtros)
- Páginas de detalle de cada proyecto

## ✅ Campos Requeridos

Cada proyecto debe tener todos estos campos:

```json
{
  "id": "1",                    // ID único (string)
  "slug": "nombre-proyecto",    // URL-friendly (sin espacios, lowercase)
  "title": "Nombre del Proyecto",
  "tagline": "Breve descripción en una línea",
  
  // Categorización
  "type": "software",           // "software" | "3d" | "hybrid"
  "visibility": "showcase",     // "public" | "showcase" | "confidential"
  "status": "completed",        // "completed" | "in-progress" | "archived"
  "featured": true,             // true = aparece en página principal
  "date": "2024-01-15",        // Formato: YYYY-MM-DD
  
  // Tecnologías y habilidades
  "technologies": ["Tech1", "Tech2"],
  "skills": ["Skill1", "Skill2"],
  
  // Imágenes
  "thumbnail": "/projects/slug/thumbnail.svg",  // 600x400px
  "coverImage": "/projects/slug/cover.svg",     // 1920x820px
  
  // Contenido del caso de estudio
  "context": "Contexto del proyecto...",
  "problem": "Problema que resuelve...",
  "role": "Tu rol en el proyecto...",
  
  "approach": {
    "technical": "Enfoque técnico...",
    "creative": "Enfoque creativo..."
  },
  
  "stack": {
    "frontend": ["Next.js", "React"],      // Opcional
    "backend": ["Node.js"],                 // Opcional
    "tools3D": ["Blender"],                 // Opcional
    "infrastructure": ["Docker"]            // Opcional
  },
  
  "process": {
    "description": "Descripción del proceso...",
    "images": [],                           // URLs de imágenes del proceso
    "videos": []                            // Opcional
  },
  
  "results": "Resultados obtenidos...",
  "learnings": ["Aprendizaje 1", "Aprendizaje 2"],
  
  "links": {
    "demo": "https://...",                  // Opcional
    "repository": "https://...",            // Opcional
    "article": "https://...",               // Opcional
    "gallery": "https://..."                // Opcional
  }
}
```

## 🎨 Tipos de Proyectos

- **software**: Proyectos de desarrollo de software
- **3d**: Proyectos de diseño 3D, modelado, rendering
- **hybrid**: Proyectos que combinan código y 3D

## 🔒 Niveles de Visibilidad

- **public**: Muestra repositorio y código fuente
- **showcase**: Muestra demo pero oculta el código
- **confidential**: Solo muestra caso de estudio y decisiones

## 📸 Imágenes

### Estructura de carpetas
```
public/
└── projects/
    └── [slug-del-proyecto]/
        ├── thumbnail.svg/jpg    # 600x400px
        ├── cover.svg/jpg        # 1920x820px
        └── gallery/             # Imágenes adicionales
            ├── image-1.jpg
            └── image-2.jpg
```

### Recomendaciones
- **Thumbnails**: 600x400px (ratio 3:2), <100KB
- **Cover**: 1920x820px (ratio 21:9), <300KB
- **Gallery**: 1200x800px mínimo, <200KB cada una
- Formatos: JPG, PNG, SVG o WebP

## 🚀 Pasos para Agregar un Proyecto

### 1. Preparar las imágenes
```bash
# Crear carpeta del proyecto
mkdir public/projects/mi-proyecto

# Agregar imágenes
# - thumbnail.jpg (600x400px)
# - cover.jpg (1920x820px)
```

### 2. Editar projects.json
Abre `/data/projects.json` y agrega tu proyecto al array:

```json
[
  {
    "id": "2",
    "slug": "mi-proyecto",
    "title": "Mi Nuevo Proyecto",
    // ... resto de campos
  }
]
```

### 3. Verificar
- Los cambios se reflejan automáticamente en desarrollo (hot reload)
- No necesitas reiniciar el servidor
- Verifica en:
  - http://localhost:3000 (si featured: true)
  - http://localhost:3000/projects (todos los proyectos)
  - http://localhost:3000/projects/mi-proyecto (detalle)

## 🔍 Filtros Disponibles

En la página de proyectos, los usuarios pueden filtrar por:
- **Tipo**: software, 3d, hybrid
- **Visibilidad**: public, showcase, confidential  
- **Tecnologías**: Extraídas automáticamente del array `technologies`
- **Habilidades**: Extraídas automáticamente del array `skills`

## 💡 Tips

### Featured Projects
- Marca `"featured": true` solo en tus mejores 3-4 proyectos
- Aparecerán en la página principal

### Orden de Proyectos
- Los proyectos se muestran en el orden del array
- El primer proyecto del JSON aparece primero
- Ordena por fecha o importancia según prefieras

### Actualización en Tiempo Real
- En modo desarrollo (`npm run dev`): Los cambios en JSON se reflejan automáticamente
- En producción: Necesitas rebuild (`npm run build`)

## ✏️ Ejemplo Completo

Ver el proyecto TerraStock en `projects.json` como referencia completa.

## 🐛 Solución de Problemas

### El proyecto no aparece
- ✅ Verifica que el JSON sea válido (sin comas extras)
- ✅ Comprueba que todos los campos requeridos estén presentes
- ✅ Asegúrate de que el `type` sea: "software", "3d" o "hybrid"

### Imágenes no se muestran
- ✅ Verifica que las rutas sean correctas
- ✅ Las rutas deben empezar con `/projects/`
- ✅ Los archivos deben estar en `public/projects/[slug]/`

### Errores de compilación  
- ✅ Ejecuta `npm run build` para ver errores específicos
- ✅ Verifica la sintaxis JSON en un validador online
- ✅ Comprueba que no falten comillas o comas

## 📚 Recursos

- [JSON Validator](https://jsonlint.com/)
- [TinyPNG](https://tinypng.com/) - Comprimir imágenes
- [Unsplash](https://unsplash.com/) - Imágenes placeholder

---

**Nota**: Los cambios en `projects.json` se aplican inmediatamente en desarrollo. No necesitas reiniciar el servidor.
