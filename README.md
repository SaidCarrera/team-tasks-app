# Team Tasks App

Aplicación Full Stack para la gestión de tareas de equipo, desarrollada como parte de una evaluación práctica de AI-Augmented Development.

## 🧠 Stack utilizado

- Backend: NestJS
- Frontend: React + Vite
- Base de datos: MySQL
- ORM: TypeORM
- Validaciones: class-validator
- Testing: Jest + Supertest
- AI Tools: ChatGPT

## 📁 Estructura del proyecto

team-tasks-app/
├── backend/
├── frontend/
├── AI_LOG.md
├── README.md

## ⚙️ Configuración del backend

1. Crear base de datos

CREATE DATABASE team_tasks_db;

2. Variables de entorno (backend/.env)

DB_HOST=localhost  
DB_PORT=3306  
DB_USERNAME=root  
DB_PASSWORD=tu_password  
DB_NAME=team_tasks_db  
PORT=3001  
FRONTEND_URL=http://localhost:3000  

3. Instalar dependencias y ejecutar backend

cd backend  
npm install  
npm run start:dev  

El backend estará disponible en:  
http://localhost:3001  

## 🎨 Frontend

Instalar dependencias y ejecutar frontend

cd frontend  
npm install  
npm run dev  

El frontend estará disponible en:  
http://localhost:3000  

## 🔌 Endpoints principales

GET /api/tasks  
POST /api/tasks  
PATCH /api/tasks/:id/status  
DELETE /api/tasks/:id  

## 🧪 Tests

cd backend  
npm run test:e2e  

Incluye test para creación de tareas (POST /api/tasks)
Resultado Postman
![alt text](<Resultado Postman.png>)

Resultado del test ejecutado
![alt text](<Resultado del test ejecutado.png>)

## 🚀 Funcionalidades implementadas

- Crear tareas  
- Listar tareas  
- Filtrar tareas por estado  
- Cambiar estado de tareas  
- Eliminar tareas  
- Validación de datos en backend  
- Manejo de errores  
- Integración completa frontend-backend  
- Test de integración  

## 🤖 Uso de AI

El uso de herramientas de AI está documentado en AI_LOG.md incluyendo prompts, problemas encontrados y correcciones aplicadas.

## 📝 Notas

- El proyecto fue desarrollado priorizando claridad en el uso de AI y corrección del código generado.  
- Se aplicaron validaciones en backend para asegurar integridad de datos.  
- El frontend consume directamente la API REST.  

## 👤 Autor

Said Carrera