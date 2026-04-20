# AI_LOG.md

## Entrada #1 — Herramienta: ChatGPT

**Prompt enviado:**
"Crear estructura base de backend en NestJS con conexión a MySQL usando TypeORM"

**Problema encontrado:**
Inicialmente el proyecto fue generado con configuración de TypeScript usando `module: nodenext`, lo que causó errores en imports y resolución de módulos.

**Corrección aplicada:**
Se ajustó el `tsconfig.json` para usar `commonjs` y `moduleResolution: node`, lo cual es compatible con NestJS. Se reinició el servidor de TypeScript para aplicar los cambios.

---

## Entrada #2 — Herramienta: ChatGPT

**Prompt enviado:**
"Definir entidad Task con TypeORM y validaciones en DTO"

**Problema encontrado:**
Errores de TypeScript en propiedades de la entidad debido a `strictPropertyInitialization`.

**Corrección aplicada:**
Se configuró `strictPropertyInitialization: false` en el `tsconfig.json` para evitar errores en propiedades definidas por TypeORM.

---

## Entrada #3 — Herramienta: ChatGPT

**Prompt enviado:**
"Crear endpoints CRUD en NestJS para entidad Task"

**Problema encontrado:**
Problemas al manejar parámetros de query (`status`) como enum en el controller.

**Corrección aplicada:**
Se ajustó el controller para recibir el query param como string y luego castear a `TaskStatus`.

---

## Entrada #4 — Herramienta: ChatGPT

**Prompt enviado:**
"Crear frontend en React con formulario y consumo de API REST"

**Problema encontrado:**
Errores en requests por formato incorrecto de JSON y manejo de errores del API.

**Corrección aplicada:**
Se corrigieron headers (`Content-Type: application/json`) y se implementó manejo de errores tanto en creación como en actualización de tareas.

---

## Entrada #5 — Herramienta: ChatGPT

**Prompt enviado:**
"Crear test de integración para endpoint POST /api/tasks en NestJS"

**Problema encontrado:**
Error `request is not a function` al usar `supertest` con import estándar.

**Corrección aplicada:**
Se cambió el import a `require('supertest')` para asegurar compatibilidad con la configuración actual de TypeScript y Jest.

---

## Entrada #6 — Herramienta: ChatGPT

**Prompt enviado:**
"Configurar CORS y validación global en NestJS"

**Problema encontrado:**
El frontend no podía comunicarse con el backend correctamente.

**Corrección aplicada:**
Se habilitó CORS en `main.ts` para permitir requests desde `http://localhost:3000` y se configuró `ValidationPipe` global para validar inputs.