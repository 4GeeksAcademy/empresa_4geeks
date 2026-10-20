# Project Brief — HealthCore

## Qué es HealthCore

HealthCore es una empresa sanitaria de atención ambulatoria fundada en **2011** en **Austin, Texas**. Opera una red de **12 clínicas** — **9 en Estados Unidos** (Texas, Florida y Georgia) y **3 en el Reino Unido** (Londres y Mánchester) — que ofrecen atención primaria, consultas con especialistas, gestión de enfermedades crónicas y programas de salud preventiva. Emplea a unas **200 personas** entre personal clínico, operaciones, administración y una unidad tecnológica en crecimiento. La facturación anual ronda los **28 millones de dólares**.

Su modelo de negocio se basa en citas en el mismo día, horarios ampliados y personal bilingüe en mercados estadounidenses como señas de identidad. Sin embargo, la infraestructura tecnológica no ha crecido al mismo ritmo que la empresa. (Fuente: BRIEFING.md, sección "Bienvenido a HealthCore" y párrafos iniciales de "Dónde está la empresa hoy")

La empresa está liderada por la **Dra. Sandra Okonkwo**, médica que fundó HealthCore frustrada por el tiempo que los clínicos dedicaban a tareas administrativas. Es precisa, orientada a la evidencia y escéptica con la tecnología que no resuelve un problema real, pero ha llegado a entender que sin sistemas modernos HealthCore no puede gestionar lo que ya ha construido ni seguir creciendo. (Fuente: BRIEFING.md, sección "Cómo está organizada la empresa")

## El problema que resuelve el proyecto

HealthCore creció sobre sistemas que no escalaron. La infraestructura tecnológica actual es un mosaico de herramientas inconexas, con consecuencias que van de lo inconveniente a lo serio:

- **2 sistemas EHR distintos** (EE.UU. y Reino Unido) que no se comunican entre sí. Cada una de las 12 clínicas opera con sus propios procesos. Cuando un paciente se mueve entre sedes o cruza la frontera EE.UU.-Reino Unido, su historia no le sigue. (Fuente: BRIEFING.md, secciones "Operaciones Clínicas" y "Dónde está la empresa hoy")
- **Tasa de no-shows del 22%** en la red, que representa aproximadamente **1,8 millones de dólares al año** en huecos de cita perdidos. No existe ningún sistema proactivo de contacto para recordar a los pacientes o reprogramar citas de riesgo. Tampoco hay sistema de reservas online compartido: los pacientes en EE.UU. reservan por teléfono y los del Reino Unido llaman a recepción. (Fuente: BRIEFING.md, secciones "Experiencia del Paciente y Acceso" y "Dónde está la empresa hoy")
- **Tasa de rechazo de reclamaciones del 14%** en facturación EE.UU. (más del doble de la media del sector, 5-8%). Las reclamaciones se envían manualmente con prácticas de codificación inconsistentes entre sedes. En el Reino Unido, la facturación combina pago privado y un contrato NHS gestionados por separado. (Fuente: BRIEFING.md, secciones "Ciclo de Ingresos y Facturación" y "Dónde está la empresa hoy")
- El personal clínico dedica **35 minutos al día** a tareas de documentación que la IA podría asistir. (Fuente: BRIEFING.md, sección "Operaciones Clínicas")
- Los perfiles clínicos tardan una media de **47 días** en cerrarse (casi 20 días más que los estándares del sector). El onboarding es manual y las horas de formación médica continua (CME) se registran en una hoja de cálculo. (Fuente: BRIEFING.md, sección "Personas y Fuerza Laboral")
- La Dra. Okonkwo gestiona una red de **28 millones de dólares** sin poder responder preguntas operacionales básicas como "¿cuál es nuestra tasa de no-shows esta semana?" sin hacer llamadas. Recibe informes semanales de cada responsable con formatos distintos, a veces contradictorios y siempre con varios días de retraso. (Fuente: BRIEFING.md, secciones "Dirección Ejecutiva" y "Dónde está la empresa hoy")

## Las 7 áreas, su responsable y su problema principal

| Área                                  | Responsable                                                         | Problema principal                                                                                                                                                                                                                                                                                      |
| ------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Operaciones Clínicas**              | Dr. Marcus Reid (~120 integrantes del personal clínico en 12 sedes) | Dos plataformas EHR (EE.UU. y UK) que no se comunican; documentación manual; el historial del paciente no le sigue entre sedes. Necesitan API unificada de historia clínica, documentación asistida por IA y dashboard de operaciones clínicas.                                                         |
| **Experiencia del Paciente y Acceso** | Priya Nair (Londres)                                                | No-shows del 22% (~1,8M$/año); sin sistema de reservas online compartido; sin recordatorios proactivos. Necesitan plataforma de reservas unificada, sistema de recordatorios inteligentes y modelo de predicción de no-shows.                                                                           |
| **Ciclo de Ingresos y Facturación**   | Tom Callahan                                                        | Rechazo de reclamaciones del 14% en EE.UU. (media del sector 5-8%); facturación UK dividida en pago privado + contrato NHS sin visión unificada. Necesitan revisión de reclamaciones asistida por IA, sugerencias de codificación automáticas y dashboard de facturación unificado.                     |
| **Cumplimiento y Gobierno del Dato**  | Claire Whitfield                                                    | Dos marcos legales (HIPAA en EE.UU., UK GDPR en Reino Unido); pistas de auditoría incompletas; compilar datos de pacientes bajo solicitud requiere trabajo manual en múltiples sistemas. Necesitan dashboard de monitorización de cumplimiento y herramienta de automatización de solicitudes de datos. |
| **Personas y Fuerza Laboral**         | Diane Foster                                                        | 200 personas en 12 sedes de dos países; 47 días de contratación media; onboarding manual; CME en hoja de cálculo. Necesitan portal interno de RR.HH., flujo de onboarding automatizado y sistema de seguimiento de CME.                                                                                 |
| **Tecnología**                        | James Osei (equipo de 6 personas en Austin)                         | Mosaico de sistemas (2 EHR, facturación EE.UU., hoja de cálculo UK, programación telefónica, agendas manuales) sin capa de datos compartida, sin telemetría ni registro centralizado. Necesitan API central de HealthCore, telemetría en tiempo real y pipeline de datos.                               |
| **Dirección Ejecutiva**               | Dra. Sandra Okonkwo (CEO)                                           | Sin dashboard unificado; informes semanales con formatos distintos, contradictorios y con retraso. Necesitan dashboard ejecutivo con KPIs en tiempo real, informes semanales automatizados, alertas de umbral y asistente IA en lenguaje natural.                                                       |

(Fuente: BRIEFING.md, sección "Los Departamentos y sus Problemas")

## El papel del estudiante dentro de HealthCore Digital

La Dra. Okonkwo ha creado una unidad interna llamada **HealthCore Digital** para construir los sistemas, flujos de trabajo y herramientas inteligentes. El estudiante es **parte de esa unidad**. (Fuente: BRIEFING.md, sección "Dónde está la empresa hoy", párrafo final)

## Objetivo del proyecto según company-choice.md

> **Idea del estudiante** (no forma parte del briefing original de HealthCore). La propuesta del estudiante es crear un **CRM integral que unifique toda la operación de HealthCore** en un único sistema, conectando ambas APIs (EHR US + UK, facturación, reservas, personal) con un **asistente IA basado en RAG** que permita consultar en lenguaje natural cualquier dato operacional sin buscar carpeta por carpeta. Esto incluye dashboards dinámicos por rol, predicción de no-shows, análisis de rechazos y alertas de anomalías. (Fuente: company-choice.md, secciones "Empresa elegida: HealthCore" y "M1 idea de Agente de IA")

## Restricciones legales

HealthCore opera bajo **HIPAA** en Estados Unidos y **UK GDPR** en el Reino Unido — dos marcos regulatorios distintos con reglas diferentes sobre almacenamiento, acceso y compartición de datos de pacientes. Cualquier sistema que se construya debe evaluarse bajo ambos prismas. El equipo de Cumplimiento de Claire Whitfield es pequeño pero con autoridad considerable para evaluar cualquier sistema nuevo. (Fuente: BRIEFING.md, secciones "Cumplimiento y Gobierno del Dato" y "¿Por qué elegir HealthCore?")

## Contexto adicional relevante

- El CTO James Osei lidera un equipo de 6 personas en Austin, responsables del mosaico de sistemas heredados. No hay telemetría ni registro centralizado: cuando un sistema falla, el equipo se entera cuando una clínica llama. El equipo necesita una API central que unifique datos de pacientes, citas, facturación y personal de ambos EHR, telemetría en tiempo real desde las 12 sedes, un pipeline de datos que alimente dashboards y documentación técnica indexada para búsqueda semántica. (Fuente: BRIEFING.md, sección "Tecnología")
- Los errores no son solo ineficiencias; en el ámbito sanitario, pueden tener consecuencias para pacientes reales. (Fuente: BRIEFING.md, sección "Dónde está la empresa hoy")
- Los desafíos de IA del proyecto incluyen: procesamiento de lenguaje natural de notas clínicas para sugerencias de códigos de facturación; modelos predictivos de no-shows entrenados con datos multi-sede; sistemas RAG sobre documentación de cumplimiento en dos jurisdicciones; y programación inteligente que equilibre las preferencias del paciente con la capacidad de la clínica. (Fuente: BRIEFING.md, sección "¿Por qué elegir HealthCore?")
- El estudiante construye los sistemas como parte de HealthCore Digital, la unidad interna creada por la Dra. Okonkwo. Los entregables se mapean a los hitos del programa AI Engineering de 4Geeks Academy (Web, Programming, Backend, Telemetry, RAG, Agents, Workflows, Real-time). (Fuente: README.md raíz)
