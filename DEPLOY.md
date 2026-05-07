# Deploy en GitHub Pages

URL publicada:

```txt
https://maxdesigna7x.github.io/Embedding_Explained/
```

## Actualizar codigo y pagina publicada

Despues de hacer cambios locales:

```bash
npm run build
git add .
git commit -m "Update presentation"
git push
npx gh-pages -d dist -m "Deploy presentation"
```

Esto hace dos cosas:

1. Sube el codigo fuente actualizado a la rama `main`.
2. Publica la version web nueva en la rama `gh-pages`.

## Solo actualizar la pagina publicada

Si solo quieres actualizar GitHub Pages y no subir cambios de codigo todavia:

```bash
npm run build
npx gh-pages -d dist -m "Deploy presentation"
```

Recomendacion: normalmente usar el flujo completo de commit/push + deploy.
