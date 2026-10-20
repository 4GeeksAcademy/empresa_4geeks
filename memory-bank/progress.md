# Progress — HealthCore

## Hecho (realizado)

- [x] **Inicialización del repositorio** — Commit inicial del template de 4Geeks Academy (commit `43187ad`). Se creó la estructura base del monorepo con todas las carpetas: `uis/`, `services/`, `data/`, `agents/`, `skills/`, `mcps/`, `workflows/`, `packages/`, `shared/`, `docs/`, `infra/`, `scripts/`, `internal/`. También se incluyó `.devcontainer/devcontainer.json` con Python 3.12, Node 22, Docker-outside-of-docker y GitHub CLI. (Fuente: README.md raíz, .devcontainer/devcontainer.json, git log)

- [x] **Selección de empresa** — Creación de `company-choice.md` con la elección de HealthCore como empresa para el proyecto transversal (commit `7236e74`). (Fuente: git log)

- [x] **Actualización de CONTEXT.md** — Actualización del placeholder del template con contenido inicial (commit `1059ea6`). NOTA: CONTEXT.md es considerado copia heredada; BRIEFING.md es la fuente única de negocio. (Fuente: README.md raíz, sección "Current status of the template")

- [x] **Ampliación de company-choice.md** — Detalle de la idea del estudiante: CRM integral + asistente IA con RAG para HealthCore (commit `5f3da1a` en `main`). La idea propone un agente central que conecta ambas APIs (EHR US + UK, facturación, reservas, personal) y permite consultas en lenguaje natural. (Fuente: company-choice.md, secciones "Empresa elegida: HealthCore" y "M1 idea de Agente de IA")

- [x] **Briefing completo de HealthCore** — Creación de `BRIEFING.md` con el briefing de HealthCore extraído del syllabus, incluyendo las 7 áreas (Operaciones Clínicas, Experiencia del Paciente, Facturación, Cumplimiento, Personas, Tecnología, Dirección Ejecutiva), sus responsables con nombre y cargo, problemas específicos y datos cuantitativos (commit `69b021a` en rama `feature/agent-memory-bank`). (Fuente: BRIEFING.md, git log)

- [x] **Banco de memoria** — `memory-bank/projectbrief.md`, `techContext.md` y `progress.md` con el contexto de negocio (HealthCore, las 7 áreas, restricciones HIPAA y UK GDPR) y el técnico (sistemas heredados, mapa de carpetas, decisiones y lo "No definido") (commit `35b74eb`). (Fuente: git log)

- [x] **AGENTS.md** — Archivo raíz con lo que el agente lee al inicio, un flujo de 6 pasos antes de cada commit y lo que no se modifica sin confirmación (commit `283802b`). (Fuente: git log)

- [x] **Reglas en .agents/rules** — `estructura-monorepo.md` (siempre activa) y `datos-de-pacientes.md` (por patrón de archivo) (commit `0e0b6fc`). (Fuente: git log)

- [x] **Skill en .agents/skills** — `actualizar-banco-de-memoria`, con objetivo único, inputs documentados y 4 criterios de aceptación verificables (commit `eb1b82a`). (Fuente: git log)

## En curso

- Sin tareas en curso; solo queda el pull request a `main`.

## Pendiente

- [ ] **Pull Request a main** — Abrir un PR de `feature/agent-memory-bank` a `main` de este mismo repositorio, con un enlace directo a `AGENTS.md` en la descripción, después de ejecutar el flujo de commit de `AGENTS.md`. (Fuente: enunciado del hito)

## Bloqueos o dudas abiertas

- **Sin definir tecnológicamente**: frameworks de las UIs (website y backoffice), motor de base de datos, sistema de autenticación, pipeline CI/CD, proveedor de despliegue (cloud), stack de servidores MCP en `mcps/`, workflows de automatización en `workflows/`. Todo está marcado como "No definido" en techContext.md.

- **Doble fuente sobre services/**: el README raíz recomienda un solo FastAPI central para toda la compañía, mientras que `services/README.md` describe que cada subcarpeta de `services/` corresponde a un servicio específico. Ambas posturas coexisten actualmente en la documentación; habrá que resolver la convención final cuando se empiece a implementar. (Fuente: README.md y services/README.md)

- **CONTEXT.md heredado**: se conserva sin cambios (lo actualizó el estudiante en `1059ea6`, hito anterior); BRIEFING.md es la fuente única de negocio. (Fuente: README.md raíz)

- **docker-compose.yml**: no existe en la raíz del repositorio. El README raíz indica que debería ir ahí para orquestación local de toda la pila. Su creación queda pendiente de cuando se definan los servicios. (Fuente: verificación directa)

- **Sin milestones concretos**: aunque el README raíz menciona hitos del curso (Web, Programming, Backend, Telemetry, RAG, Agents, Workflows, Real-time), no hay una planificación concreta de qué hito corresponde a cada entregable del proyecto HealthCore.

- **Packages compartidos vacíos**: existe `packages/shared/` con `@repo/shared-types` (versión 0.0.1, privado) que contiene solo tipos placeholder (`Id`, `BaseEntity`). Habrá que extenderlo con tipos de dominio de HealthCore (Patient, Appointment, Claim, Clinic, etc.) a medida que se definan los servicios. (Fuente: packages/shared/package.json, packages/shared/types/index.ts)

- **Sin datos sintéticos ni de evaluación**: no existen datos en `data/raw/`, `data/pipelines/` ni `data/eval/`. (Fuente: list_dir de data/)
