---
description: Datos de pacientes y cumplimiento (HIPAA y UK GDPR) al trabajar con datos o código de producto
globs: ["data/**", "services/**", "agents/**", "uis/**", "mcps/**", "workflows/**", "packages/**"]
alwaysApply: false
---
# Regla: datos de pacientes y cumplimiento

Alcance: por patrón de archivo. Se aplica al trabajar en `data/`, `services/`, `agents/`, `uis/`, `mcps/`, `workflows/` y `packages/`.

- HealthCore maneja datos de pacientes protegidos por HIPAA (EE. UU.) y UK GDPR (Reino Unido). Todo sistema se evalúa bajo ambos marcos. (Fuente: BRIEFING.md, "Cumplimiento y Gobierno del Dato")
- En el repositorio solo hay datos sintéticos o ficticios. Nunca datos reales de pacientes: ni en `data/raw/`, ni en ejemplos, tests, logs o prompts.
- Todo dato de ejemplo se documenta como sintético, con su origen y cómo se generó, e indica su jurisdicción (EE. UU. o Reino Unido).
- No asumas que un dato de una jurisdicción se puede almacenar, acceder o compartir igual en la otra.
- Sin credenciales, claves ni tokens en el código ni en el repositorio: se usan variables de entorno y se documentan sin valores reales.
- Si un cambio toca el acceso o el almacenamiento de datos de pacientes, indícalo en el mensaje del commit y pregunta al desarrollador antes de decidir cómo se guarda o se comparte.
