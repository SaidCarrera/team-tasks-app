# AI_LOG.md

Registro del uso de herramientas de inteligencia artificial durante el desarrollo del proyecto.

## Entrada 1

Herramienta: ChatGPT

Prompt:
"Crear backend en NestJS con conexión a MySQL usando TypeORM para gestión de tareas"

Problema:
El proyecto inicial presentaba errores de configuración en TypeScript debido al uso de module: nodenext, lo que causaba problemas en imports y resolución de módulos.

Corrección:
Se modificó el tsconfig.json para usar module: commonjs y moduleResolution: node, lo cual es compatible con NestJS. Se reinició el servidor de TypeScript para aplicar los cambios.

---

## Entrada 2

Herramienta: ChatGPT

Prompt:
"Definir entidad Task con TypeORM y validaciones usando class-validator"

Problema:
Se presentaron errores en las propiedades de la entidad debido a strictPropertyInitialization en TypeScript.

Corrección:
Se configuró strictPropertyInitialization: false en el tsconfig.json para evitar errores en propiedades manejadas por TypeORM.

---

## Entrada 3

Herramienta: ChatGPT

Prompt:
"Crear endpoints CRUD en NestJS para entidad Task"

Problema:
El parámetro status en el endpoint GET generaba conflictos al intentar usar directamente el enum en el controller.

Corrección:
Se ajustó el controller para recibir el parámetro como string y luego convertirlo a TaskStatus.

---

## Entrada 4

Herramienta: ChatGPT

Prompt:
"Crear frontend en React que consuma API REST para gestión de tareas"

Problema:
Errores en las peticiones HTTP debido a formato incorrecto del JSON y falta de headers.

Corrección:
Se corrigió el formato del body y se añadieron headers Content-Type: application/json. Se implementó manejo de errores en el frontend.

---

## Entrada 5

Herramienta: ChatGPT

Prompt:
"Crear test de integración para endpoint POST /api/tasks en NestJS"

Problema:
Error 'request is not a function' al utilizar supertest.

Corrección:
Se cambió la forma de importación de supertest utilizando require para asegurar compatibilidad con la configuración del proyecto.

---

## Entrada 6

Herramienta: ChatGPT

Prompt:
"Configurar CORS y validación global en NestJS"

Problema:
El frontend no podía comunicarse correctamente con el backend.

Corrección:
Se habilitó CORS en main.ts y se configuró ValidationPipe global para validar los datos de entrada.