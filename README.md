# 🗂️ Categoria (TypeScript)

Este proyecto implementa una función en TypeScript que busca la **ruta completa hacia una categoría** dentro de una estructura jerárquica. Ideal como ejercicio técnico para entrevistas o como utilitario en proyectos con categorías anidadas (e-commerce, navegación de menús, etc).

---

## 📌 Enunciado del problema

Dada una estructura de categorías anidadas como esta:

```ts
const categories = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: []
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    name: 'category5',
    subcategories: []
  }
];



npm install -g typescript


tsc exercise.ts


node exercise.js
