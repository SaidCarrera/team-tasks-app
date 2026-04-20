# Team Tasks App

Aplicación Full Stack para gestión de tareas de equipo, desarrollada como parte de una evaluación práctica de AI-Augmented Development.

---

## 🧠 Stack utilizado

- **Backend:** NestJS
- **Frontend:** React + Vite
- **Base de datos:** MySQL
- **ORM:** TypeORM
- **Validaciones:** class-validator
- **Testing:** Jest + Supertest
- **AI Tools:** ChatGPT

---

## 📁 Estructura del proyecto
team-tasks-app/
backend/
frontend/
AI_LOG.md
README.md

---

## ⚙️ Configuración del backend

### 1. Crear base de datos

```sql
CREATE DATABASE team_tasks_db;

2. backend/.env

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=tu_password
DB_NAME=team_tasks_db
PORT=3001
FRONTEND_URL=http://localhost:3000


3. Instalar dependencias y ejecutar

cd backend
npm install
npm run start:dev

El backend correrá en:
http://localhost:3001



Frontend

cd frontend
npm install
npm run dev

El frontend correrá en:
http://localhost:3000


Endpoints principales

* GET /api/tasks
* POST /api/tasks
* PATCH /api/tasks/:id/status
* DELETE /api/tasks/:id

Tests

cd backend
npm run test:e2e

Se incluye un test de integración para:

* POST /api/tasks

Funcionalidades implementadas

* Crear tareas
* Listar tareas
* Filtrar por estado
* Cambiar estado de tareas
* Eliminar tareas
* Manejo de errores del backend
* Validación de datos
* Test de integración
* Integración completa frontend-backend


Uso de AI

El uso de herramientas de AI fue documentado en detalle en el archivo AI_LOG.md, incluyendo prompts, problemas encontrados y correcciones aplicadas.

![alt text](<Captura de pantalla 2026-04-18 a la(s) 1.08.19 p. m..png>)

![alt text](<Captura de pantalla 2026-04-18 a la(s) 11.57.03 a. m..png>)
