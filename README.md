# Presentacion: Clasificacion por similitud de embedding

App React interactiva con slides navegables, grid procedural y visualizaciones de embeddings.

## Instalar

```bash
npm install
```

## Correr en desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Navegacion

- Flecha derecha o espacio: siguiente slide.
- Flecha izquierda: slide anterior.
- Botones inferiores: anterior/siguiente.
- Boton `Dark` / `Light`: cambia el tema visual.

## Agregar una nueva slide

1. Crear un componente en `src/slides/Slide15Nombre.tsx`.
2. Importarlo en `src/presentation/slides.ts`.
3. Agregarlo al arreglo `slides` con un `id` unico.

Cada slide debe ocupar pantalla completa y usar `slide-content` como contenedor principal.

## Cambiar colores

Los tokens estan centralizados en `src/styles/tokens.css`.

Editar variables como:

```css
--bg: #fafafa;
--grid-line: #e5e7eb;
--text-primary: #111111;
--blue: #0ea5e9;
```

## Cambiar modo claro/oscuro

El modo oscuro se define en `src/styles/tokens.css` dentro de:

```css
[data-theme="dark"] {
  ...
}
```

El toggle esta en `src/presentation/PresentationShell.tsx`.

## Reemplazar placeholders

La app no depende de imagenes externas. Si se necesitan assets reales, colocarlos en `src/assets/placeholders/` y seguir las notas de `src/assets/placeholders/README.md`.

## Editar clusters de ejemplo

Los clusters estan en `src/data/toyClusters.ts`.

Cada cluster define:

```ts
{
  id: "animals",
  label: "Animales",
  color: "var(--blue)",
  x: 31,
  y: 45,
  items: ["🐶", "🐱", "🐦", "🦊"],
  description: "Objetos parecidos quedan cerca."
}
```

Cambiar `x` e `y` mueve el cluster dentro del plano.
