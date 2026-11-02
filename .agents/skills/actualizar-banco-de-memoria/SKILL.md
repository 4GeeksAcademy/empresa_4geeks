---
name: actualizar-banco-de-memoria
description: Actualiza memory-bank/progress.md (y techContext.md si cambia una decisión técnica) al cerrar un cambio. Úsala al terminar cualquier tarea que cambie el estado del proyecto, antes del commit.
---

# Skill: actualizar el banco de memoria

## Objetivo
Dejar `memory-bank/progress.md` reflejando el estado real del proyecto después de un cambio. No crea código ni archivos nuevos.

## Cuándo usarla
En el paso 4 del flujo de commit de `AGENTS.md`: cuando un cambio completa una tarea, toma una decisión técnica o abre o resuelve un bloqueo.

## Inputs
- `cambio` (obligatorio): qué se hizo, en una frase. Ejemplo: "Se agregó AGENTS.md".
- `tipo` (obligatorio): `hecho`, `decisión` o `bloqueo`.
- `hash` (opcional): hash corto de 7 caracteres de un commit que ya exista.

## Pasos
1. Lee `memory-bank/progress.md` y `memory-bank/techContext.md`.
2. Si el tipo es `hecho`: mueve el ítem de "Pendiente" o "En curso" a "Hecho" como `- [x]`, con título en negritas y una línea de descripción. Si hay hash, cítalo entre backticks. El ítem no debe quedar en dos secciones.
3. Si el tipo es `decisión`: añádela a la sección (c) de `techContext.md` con su fuente, y quítala de la sección (d) "Pendiente de decidir".
4. Si el tipo es `bloqueo`: añádelo a "Bloqueos o dudas abiertas", o retíralo si se resolvió.
5. No pongas fechas, no inventes stack ni datos, y toma las cifras solo de `BRIEFING.md`.

## Output esperado
`memory-bank/progress.md` modificado (y `memory-bank/techContext.md` solo si hubo una decisión). Ningún otro archivo cambia.

## Criterios de aceptación
Todos deben cumplirse. Cada uno se verifica con un comando.

C1: solo cambian archivos de `memory-bank/`.
C2: `progress.md` conserva sus 4 secciones.
C3: ningún título en negritas aparece repetido en `progress.md`.
C4: todo hash citado en `progress.md` existe en el historial de git.

```bash
git diff HEAD --name-only | grep -v '^memory-bank/' | wc -l      # C1: debe imprimir 0
grep -c '^## ' memory-bank/progress.md                            # C2: debe imprimir 4
grep -o '\*\*[^*]*\*\*' memory-bank/progress.md | sort | uniq -d | wc -l   # C3: debe imprimir 0
for h in $(grep -oE '`[0-9a-f]{7}`' memory-bank/progress.md | tr -d '`'); do git cat-file -e "$h^{commit}" 2>/dev/null || echo "NO EXISTE $h"; done   # C4: sin salida
```

## Ejemplo
Entrada: cambio = "Se agregó AGENTS.md", tipo = `hecho`, hash = `283802b`. Resultado: el ítem "Crear AGENTS.md" pasa de "Pendiente" a "Hecho" citando `283802b`, y los 4 comandos cumplen lo esperado.
