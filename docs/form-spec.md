# Especificación del formulario de registro (application.html)

El BRIEFING.md no define los campos del formulario. Esta especificación es una propuesta propia, basada en lo que describe el briefing: reservas online, no-shows, recordatorios y cumplimiento HIPAA / UK GDPR.

Tipo de formulario: registro de paciente para solicitar cita.

| Campo | Tipo | Obligatorio | Regla de validación |
|---|---|---|---|
| Nombre y apellido | text | Sí | Mínimo 2 letras cada uno |
| Fecha de nacimiento | date | Sí | No puede ser futura |
| Correo | email | Sí | Formato válido |
| Teléfono | tel | Sí | Formato según el país elegido |
| País | select | Sí | Estados Unidos o Reino Unido |
| Región de la clínica | select | Sí | Texas, Florida, Georgia, Londres o Mánchester |
| Tipo de atención | select | Sí | Primaria, especialista, enfermedad crónica o preventiva |
| Fecha preferida de cita | date | Sí | No puede ser pasada |
| Canal de recordatorio | radio | Sí | SMS, correo o app |
| Idioma preferido | select | No | Inglés o español |
| Consentimiento de privacidad | checkbox | Sí | Debe estar marcado |