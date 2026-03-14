# Angular Rick and Morty API

## Descripción del proyecto

Este proyecto consiste en una aplicación desarrollada con **Angular** que consume la **API pública de Rick and Morty** mediante el uso de **HttpClient**.  
La aplicación obtiene información de personajes y la muestra dinámicamente en la interfaz mediante componentes y directivas de Angular.

El objetivo del ejercicio es aplicar conceptos fundamentales del desarrollo frontend moderno, como el consumo de APIs REST, la organización modular del código y el renderizado dinámico de datos.

---

## Objetivo

Implementar el consumo de una API REST en Angular, organizando el proyecto mediante **componentes, servicios y modelos**, y mostrando la información obtenida de forma dinámica en la interfaz.

---

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML
- CSS
- HttpClient
- Rick and Morty Public API

---

## Funcionalidades implementadas

- Consumo de API REST usando **HttpClient**
- Servicio dedicado para la gestión de datos
- Listado de personajes
- Visualización de:
  - Imagen del personaje
  - Nombre
  - Estado
  - Especie
- Renderizado dinámico utilizando `*ngFor`
- Organización del proyecto por **componentes y servicios**

---

## Estructura del proyecto

```bash
src/app/
│
├── core
│   └── services
│       └── character.service.ts
│
├── feature
│   └── page
│       ├── character-list
│       └── character-detail
│
├── models
│   ├── character.ts
│   └── api.response.ts
│
├── app.component.ts
├── app.config.ts
└── app.routes.ts
```

## API utilizada
Rick and Morty API

## Ejecución del proyecto

1. Clonar el repositorio

2. Instalar dependencias con:
```bash
npm install
```
3. Ejecutar el proyecto con:
```bash
ng serve
```

## Autor
Carlos Andrés Arias Henao
