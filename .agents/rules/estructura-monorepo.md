---
description: Dónde va cada cosa en el monorepo y qué no crear
alwaysApply: true
---
# Regla: estructura del monorepo

Alcance: siempre activa, en cualquier tarea.

- Antes de crear algo, decide su carpeta con la guía "Where should I put this?" del `README.md` raíz y lee el `README.md` de esa carpeta.
- Sitio público: `uis/website`. Aplicación interna: `uis/backoffice`. APIs y workers: `services/` (la recomendación del README raíz es un solo FastAPI central; no crear microservicios sin aprobación).
- Agentes del producto: `agents/<nombre>`. Capacidades reutilizables del producto: `skills/`. Servidores MCP: `mcps/`. Automatizaciones: `workflows/`.
- Datos: `data/raw`, `data/pipelines`, `data/process`, `data/eval`. Código compartido: `packages/`. Recursos sueltos: `shared/`. Documentación transversal: `docs/`. Infraestructura: `infra/`. Scripts: `scripts/`. Herramientas internas: `internal/`.
- Prohibido crear un árbol paralelo en la raíz (por ejemplo `frontend/`, `backend/`, `api/` o `app/`).
- Cada app, servicio o agente nuevo lleva su subcarpeta con un README: objetivo, tecnología y cómo ejecutarlo.
- `.agents/` es la configuración del agente de desarrollo. `agents/` y `skills/` son código de producto: no se mezclan.
- Lo marcado "No definido" en `memory-bank/techContext.md` se decide con el desarrollador, no por cuenta del agente.
