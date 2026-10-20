# AGENTS.md — Cómo operan los agentes en este repositorio

Aplica a cualquier agente de código (Claude Code, Cursor, Copilot, etc.) que trabaje en este monorepo. El proyecto es el sistema de HealthCore, la empresa del programa AI Engineering de 4Geeks Academy.

## 1. Al inicio de cada sesión: leer, en este orden

1. `memory-bank/projectbrief.md`: qué es HealthCore, el problema y las 7 áreas.
2. `memory-bank/techContext.md`: estado técnico, mapa de carpetas, decisiones y lo "No definido".
3. `memory-bank/progress.md`: qué está hecho, qué sigue y los bloqueos abiertos.
4. Todo lo que haya en `.agents/rules/`: cada regla aplica según su alcance.
5. El `README.md` de la carpeta donde vas a trabajar, antes de poner algo ahí.

`BRIEFING.md` es la fuente única de negocio: consúltalo para cualquier cifra, nombre o cargo. No uses `CONTEXT.md` como fuente. Si el banco de memoria contradice al código o al briefing, detente y pregunta.

## 2. Flujo obligatorio antes de cada commit

Ejecuta los pasos en orden. Si alguno falla, no hagas commit: corrige o pregunta.

**Paso 1. Verificar el repo y la rama.** Ejecuta `pwd`, `git remote -v`, `git branch --show-current` y `git status --short`. La rama debe ser `feature/...`, nunca `main`.

**Paso 2. Revisar el alcance.** Ejecuta `git diff --stat` y `git status --short`. Solo deben aparecer los archivos que pedía la tarea. Si aparece un archivo de la sección 3 o uno no previsto, detente y pregunta.

**Paso 3. Verificar la estructura de carpetas.** Ejecuta `ls -d */ | tr -d '/' | grep -vxE 'agents|data|docs|infra|internal|mcps|memory-bank|packages|scripts|services|shared|skills|uis|workflows'`. No debe imprimir nada: no se crean carpetas nuevas en la raíz.

**Paso 4. Actualizar el banco de memoria.** Si el cambio modifica el estado del proyecto (algo hecho, una decisión, un bloqueo), actualiza `memory-bank/progress.md` (y `techContext.md` si cambia una decisión técnica) y añádelo al mismo commit.

**Paso 5. Preparar y revisar lo que se commitea.** Usa `git add` con rutas concretas, nunca `git add .` ni `git add -A`. Revisa `git diff --cached --stat` y ejecuta `git diff --cached | grep -niE 'password|secret|api[_-]?key|token|private key'`: no debe mostrar credenciales. Tampoco debe haber datos reales de pacientes, solo datos sintéticos.

**Paso 6. Hacer el commit y reportar.** Formato del mensaje: `tipo(alcance): descripción breve en español`, con tipo `feat`, `fix`, `docs`, `chore`, `refactor` o `test`. Al terminar, informa el hash del commit y un resumen de lo que cambió.

## 3. No modificar sin confirmación explícita del desarrollador

- `BRIEFING.md` (copia del briefing oficial de HealthCore).
- `company-choice.md`, `CONTEXT.md` y `CONTEXT.es.md` (entregables de hitos anteriores).
- `README.md` y `README.es.md` de la raíz.
- `.devcontainer/` y `.gitignore`.
- `agents/_template/`: es una plantilla; se copia, no se edita.
- `AGENTS.md` y `.agents/` (la configuración de los agentes).
- La rama `main`: nunca commit directo, ni `git push --force`, ni borrar ramas.
- Borrar archivos o carpetas existentes.

Los README de las subcarpetas sí pueden ampliarse con documentación de lo que se añade, sin borrar lo que ya dicen.

## 4. Cuándo detenerse y preguntar

- Algo marcado "No definido" en `techContext.md` (frameworks de las UIs, base de datos, autenticación, CI/CD, nube): hay que decidirlo con el desarrollador, no elegirlo por tu cuenta.
- Dos fuentes se contradicen (por ejemplo, el README raíz y `services/README.md`).
- La tarea toca datos de pacientes: solo sintéticos, y siempre con HIPAA (EE. UU.) y UK GDPR en mente.
- La tarea pide crear carpetas fuera de las permitidas.

## 5. Dónde va el código de producto

- `uis/website`: sitio público de la empresa.
- `uis/backoffice`: aplicación interna.
- `services/`: APIs y servicios backend. La recomendación del README raíz es un solo FastAPI central; ver `techContext.md`.
- `agents/`, `skills/` y `mcps/` son código de producto (agentes, capacidades y servidores MCP de la empresa). No los confundas con `.agents/`, que es la configuración del agente de desarrollo.
- Antes de poner algo en una carpeta, lee su `README.md`.
