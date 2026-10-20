# Progress — HealthCore

## Hecho (realizado)

- [x] **Inicialización del repositorio** — Commit inicial del template de 4Geeks Academy (commit `43187ad`). Se creó la estructura base del monorepo con todas las carpetas: `uis/`, `services/`, `data/`, `agents/`, `skills/`, `mcps/`, `workflows/`, `packages/`, `shared/`, `docs/`, `infra/`, `scripts/`, `internal/`. También se incluyó `.devcontainer/devcontainer.json` con Python 3.12, Node 22, Docker-outside-of-docker y GitHub CLI. (Fuente: README.md raíz, .devcontainer/devcontainer.json, git log)

- [x] **Selección de empresa** — Creación de `company-choice.md` con la elección de HealthCore como empresa para el proyecto transversal (commit `7236e74`). (Fuente: git log)

- [x] **Actualización de CONTEXT.md** — Actualización del placeholder del template con contenido inicial (commit `1059ea6`). NOTA: CONTEXT.md es considerado copia heredada; BRIEFING.md es la fuente única de negocio. (Fuente: README.md raíz, sección "Current status of the template")

- [x] **Ampliación de company-choice.md** — Detalle de la idea del estudiante: CRM integral + asistente IA con RAG para HealthCore (commit `5f3da1a` en `main`). La idea propone un agente central que conecta ambas APIs (EHR US + UK, facturación, reservas, personal) y permite consultas en lenguaje natural. (Fuente: company-choice.md, secciones "Empresa elegida: HealthCore" y "M1 idea de Agente de IA")

- [x] **Briefing completo de HealthCore** — Creación de `BRIEFING.md` con el briefing de HealthCore extraído del syllabus, incluyendo las 7 áreas (Operaciones Clínicas, Experiencia del Paciente, Facturación, Cumplimiento, Personas, Tecnología, Dirección Ejecutiva), sus responsables con nombre y cargo, problemas específicos y datos cuantitativos (commit `69b021a` en rama `feature/agent-memory-bank`). Este commit es el HEAD actual. (Fuente: BRIEFING.md, git log)


## En curso

- [ ] **Banco de memoria del monorepo** — Creación de `memory-bank/projectbrief.md`, `memory-bank/techContext.md` y `memory-bank/progress.md` (este archivo) con la documentación estructurada del proyecto en español. Pendiente de commit.

## Pendiente

- [ ] **Crear AGENTS.md** — Archivo raíz que define cómo opera cualquier agente de código en este repo: (1) qué archivos del banco de memoria debe leer al inicio de cada sesión; (2) un flujo obligatorio de al menos 4 pasos ordenados y explícitos antes de cada commit; (3) qué carpetas y archivos no puede modificar sin confirmación explícita del desarrollador. (Fuente: enunciado del hito)

- [ ] **Configurar .agents/rules** — Reglas de la herramienta de desarrollo (Cursor o GitHub Copilot) para definir el comportamiento del agente de IA dentro del monorepo. Debe incluir instrucciones sobre qué carpetas usar, cómo documentar, qué convenciones seguir y al menos una regla con alcance de aplicación explícito (siempre activa, por patrón de archivo o solicitada). No existe aún el directorio `.agents/`. (Fuente: tarea pendiente identificada)

- [ ] **Crear skill en .agents/skills** — Habilidad reutilizable para el agente de desarrollo, ubicada dentro de la configuración de la herramienta (`.agents/skills/`). Debe tener un objetivo único, inputs documentados y criterios de aceptación explícitos y verificables. Complementa a `skills/` (código de producto). (Fuente: tarea pendiente identificada)

- [ ] **Pull Request a main** — Fusionar la rama `feature/agent-memory-bank` (commit actual `69b021a`) en `main` de este mismo repositorio, desde `feature/agent-memory-bank`, con un enlace directo a AGENTS.md en la descripción. Actualmente `feature/agent-memory-bank` tiene 1 commit adicional respecto a `main` (`5f3da1a`). (Fuente: git log)

## Bloqueos o dudas abiertas

- **Sin definir tecnológicamente**: frameworks de las UIs (website y backoffice), motor de base de datos, sistema de autenticación, pipeline CI/CD, proveedor de despliegue (cloud), stack de servidores MCP en `mcps/`, workflows de automatización en `workflows/`. Todo está marcado como "No definido" en techContext.md.

- **Doble fuente sobre services/**: el README raíz recomienda un solo FastAPI central para toda la compañía, mientras que `services/README.md` describe que cada subcarpeta de `services/` corresponde a un servicio específico. Ambas posturas coexisten actualmente en la documentación; habrá que resolver la convención final cuando se empiece a implementar. (Fuente: README.md y services/README.md)

- **CONTEXT.md heredado**: se conserva sin cambios (lo actualizó el estudiante en `1059ea6`, hito anterior); BRIEFING.md es la fuente única de negocio. (Fuente: README.md raíz)

- **docker-compose.yml**: no existe en la raíz del repositorio. El README raíz indica que debería ir ahí para orquestación local de toda la pila. Su creación queda pendiente de cuando se definan los servicios. (Fuente: verificación directa)

- **Sin milestones concretos**: aunque el README raíz menciona hitos del curso (Web, Programming, Backend, Telemetry, RAG, Agents, Workflows, Real-time), no hay una planificación concreta de qué hito corresponde a cada entregable del proyecto HealthCore.

- **Packages compartidos vacíos**: existe `packages/shared/` con `@repo/shared-types` (versión 0.0.1, privado) que contiene solo tipos placeholder (`Id`, `BaseEntity`). Habrá que extenderlo con tipos de dominio de HealthCore (Patient, Appointment, Claim, Clinic, etc.) a medida que se definan los servicios. (Fuente: packages/shared/package.json, packages/shared/types/index.ts)

- **Sin datos sintéticos ni de evaluación**: no existen datos en `data/raw/`, `data/pipelines/` ni `data/eval/`. (Fuente: list_dir de data/)
