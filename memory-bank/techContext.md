# Tech Context — HealthCore

## (a) Sistemas heredados de HealthCore (según el briefing)

HealthCore opera sobre un mosaico de sistemas construidos o adquiridos a lo largo de una década que nunca se integraron:

| Sistema                                      | Propósito                                                                                                  |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Plataforma EHR (EE.UU.)                      | Historia clínica electrónica para las 9 clínicas en Texas, Florida y Georgia                               |
| Plataforma EHR (Reino Unido)                 | Historia clínica electrónica para las 3 clínicas en Londres y Mánchester — no se comunica con la de EE.UU. |
| Sistema de facturación (EE.UU.)              | Gestión de reclamaciones a seguros, Medicare y Medicaid                                                    |
| Hoja de cálculo de facturación (Reino Unido) | Facturación para pago privado y contrato con el NHS                                              |
| Sistema de programación telefónica (EE.UU.)  | Reserva de citas por teléfono                                                                              |
| Agendas manuales (Reino Unido)               | Programación de citas                                                                             |
| Sin capa de datos compartida                 | Ninguna integración entre sistemas                                                                         |
| Sin telemetría ni registro centralizado      | Cuando un sistema falla, se enteran porque la clínica llama                                                |

(Fuente: BRIEFING.md, secciones "Tecnología" y "Dónde está la empresa hoy")

## (b) Mapa de carpetas del monorepo

| Carpeta        | Propósito (según README)                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `uis/`         | Interfaces de usuario — frontends. `website/` (pública) y `backoffice/` (admin interna) irán aquí                                                                  |
| `services/`    | Backend centralizado (FastAPI). Un servicio por subcarpeta. README raíz recomienda un solo FastAPI central; services/README.md describe un servicio por subcarpeta |
| `data/`        | Datos, pipelines y evaluación: `raw/`, `pipelines/`, `process/`, `eval/`                                                                                           |
| `agents/`      | Agentes IA autónomos o semi-autónomos. Un agente por subcarpeta. Template en `agents/_template/`                                                                   |
| `skills/`      | Capacidades reutilizables para agentes. Incluye `data-analysis/`, `code-review/`, `research/`                                                                      |
| `mcps/`        | Servidores MCP (Model Context Protocol) para conectar modelos con sistemas externos                                                                                |
| `workflows/`   | Automatización y orquestación (n8n, etc.)                                                                                                                          |
| `packages/`    | Librerías compartidas versionables. `packages/shared/` contiene `@repo/shared-types`                                                                               |
| `shared/`      | Recursos que no son un paquete completo (schemas, plantillas, assets)                                                                                                 |
| `docs/`        | Documentación transversal (arquitectura, decisiones técnicas, convenciones)                                                                                        |
| `infra/`       | Infraestructura (Docker, configuraciones de deploy)                                                                                                                |
| `scripts/`     | Scripts auxiliares                                                                                                                                                 |
| `internal/`    | CLI internos y herramientas de desarrollo                                                                                                                          |
| `memory-bank/` | Banco de memoria del proyecto (este archivo)                                                                                                                       |

No existe `docker-compose.yml` en la raíz. `.devcontainer/` contiene solo `devcontainer.json` con Python 3.12, Node 22, Docker-outside-of-docker, GitHub CLI, y extensiones VS Code preconfiguradas.

(Fuente: README.md raíz secciones "How to think about this monorepo", "Folder guide"; list_dir y ls verificados)

## (c) Decisiones tomadas y su fuente

| Decisión                                                                    | Fuente                          |
| --------------------------------------------------------------------------- | ------------------------------- |
| El monorepo usa estructura de template de 4Geeks Academy                    | README.md raíz                  |
| Los frontends van en `uis/` organizados por dominio (website, backoffice)   | uis/README.md                   |
| El backend se centraliza en un solo FastAPI en `services/`                  | README.md raíz (recomendación)  |
| Cada subcarpeta de `services/` = un servicio específico                     | services/README.md              |
| Los agentes IA van en `agents/`, uno por subcarpeta                         | agents/README.md                |
| Las capacidades reutilizables de agentes van en `skills/`                   | skills/README.md                |
| Los tipos compartidos están en `packages/shared/` como `@repo/shared-types` | packages/shared/package.json    |
| El devcontainer usa Ubuntu 24.04 con Python 3.12 y Node 22                  | .devcontainer/devcontainer.json |
| Se forwardean los puertos 3000, 8000 y 5678                                 | .devcontainer/devcontainer.json |
| BRIEFING.md es la fuente única de negocio (no CONTEXT.md)                   | Instrucciones del proyecto      |

## (d) Pendiente de decidir

| Aspecto                                           | Estado      |
| ------------------------------------------------- | ----------- |
| Framework de `uis/website`                        | No definido |
| Framework de `uis/backoffice`                     | No definido |
| Framework/BBDD del backend FastAPI en `services/` | No definido |
| Base de datos (motor, esquema)                    | No definido |
| Sistema de autenticación                          | No definido |
| Estrategia de tests                               | No definido |
| Pipeline CI/CD                                    | No definido |
| Despliegue (cloud provider)                       | No definido |
| Stack de MCP servers en `mcps/`                   | No definido |
| Workflows de automatización en `workflows/`       | No definido |

## (e) Distinción .agents/ vs agents/ vs skills/

- **`.agents/`** — No existe actualmente. Es un directorio de **configuración de la herramienta de desarrollo** (Cursor, Windsurf, Claude Code, etc.), no código de producto. Se creará como parte de las tareas pendientes.
- **`agents/`** — Directorio de **código de producto** que contiene agentes IA autónomos o semi-autónomos (soporte, onboarding, etc.). Tiene un `_template/` para crear nuevos agentes.
- **`skills/`** — Directorio de **código de producto** con capacidades reutilizables para agentes (data-analysis, code-review, research). Cada skill tiene su propia carpeta con SKILL.md, scripts y ejemplos.

(Fuente: agents/README.md y skills/README.md; .agents/ no existe en el repositorio — verificado con ls)

## (f) Nota sobre fuentes

**BRIEFING.md** es la fuente única de negocio para HealthCore. **CONTEXT.md** y **CONTEXT.es.md** se conservan sin cambios y no se usan como fuente de información del dominio.
