// ---------- Utilidades para mostrar y quitar errores ----------
function mostrarError(campo, mensaje) {
  const error = document.getElementById('error-' + campo.id);
  error.textContent = mensaje;
  error.classList.remove('hidden');
  campo.setAttribute('aria-invalid', 'true');
  campo.classList.remove('border-slate-300');
  campo.classList.add('border-red-600');
}

function limpiarError(campo) {
  const error = document.getElementById('error-' + campo.id);
  error.textContent = '';
  error.classList.add('hidden');
  campo.removeAttribute('aria-invalid');
  campo.classList.remove('border-red-600');
  campo.classList.add('border-slate-300');
}

// ---------- Fecha y hora de hoy (para comparar) ----------
function fechaHoy() {
  const d = new Date();
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const dia = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + mes + '-' + dia;
}

function horaAhora() {
  const d = new Date();
  return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}

// ---------- Reglas: cada una devuelve un mensaje de error, o '' si todo está bien ----------
function validarNombre(valor, etiqueta) {
  const texto = valor.trim();
  if (texto === '') return 'Escribe tu ' + etiqueta + '.';
  if (texto.length < 2) return 'El ' + etiqueta + ' debe tener al menos 2 letras.';
  if (!/^[\p{L}\s'-]+$/u.test(texto)) return 'El ' + etiqueta + ' solo puede contener letras.';
  return '';
}

function validarNacimiento(valor) {
  if (valor === '') return 'Indica tu fecha de nacimiento.';
  if (new Date(valor + 'T00:00:00') > new Date()) return 'La fecha de nacimiento no puede ser futura.';
  return '';
}

function validarCorreo(valor) {
  const texto = valor.trim();
  if (texto === '') return 'Escribe tu correo electrónico.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texto)) return 'Escribe un correo válido, por ejemplo nombre@correo.com.';
  return '';
}

function validarTelefono(valor, pais) {
  const limpio = valor.replace(/[\s()-]/g, '');
  if (limpio === '') return 'Escribe tu teléfono.';
  if (!/^\+?\d+$/.test(limpio)) return 'El teléfono solo puede tener números, espacios, guiones, paréntesis y un + al inicio.';
  const digitos = limpio.replace('+', '');
  if (pais === 'us') {
    const correcto = digitos.length === 10 || (digitos.length === 11 && digitos.startsWith('1'));
    if (!correcto) return 'Un teléfono de Estados Unidos tiene 10 dígitos, por ejemplo 512 555 0123.';
  } else if (pais === 'uk') {
    if (digitos.length < 10 || digitos.length > 11) return 'Un teléfono del Reino Unido tiene 10 u 11 dígitos, por ejemplo 020 7946 0123.';
  } else if (digitos.length < 10 || digitos.length > 15) {
    return 'El teléfono debe tener entre 10 y 15 dígitos.';
  }
  return '';
}

function validarPais(valor) {
  return valor === '' ? 'Selecciona un país.' : '';
}

function validarRegion(valor, pais) {
  if (valor === '') return 'Selecciona la región de la clínica.';
  const regionesUS = ['texas', 'florida', 'georgia'];
  const regionesUK = ['londres', 'manchester'];
  if (pais === 'us' && !regionesUS.includes(valor)) return 'Para Estados Unidos elige Texas, Florida o Georgia.';
  if (pais === 'uk' && !regionesUK.includes(valor)) return 'Para el Reino Unido elige Londres o Mánchester.';
  return '';
}

function validarAtencion(valor) {
  return valor === '' ? 'Selecciona el tipo de atención.' : '';
}

function validarFechaCita(valor) {
  if (valor === '') return 'Elige la fecha de tu cita.';
  if (valor < fechaHoy()) return 'La fecha de la cita no puede ser pasada.';
  return '';
}

function validarHoraCita(hora, fecha) {
  if (hora === '') return 'Elige la hora de tu cita.';
  if (fecha === fechaHoy() && hora < horaAhora()) return 'Si la cita es hoy, la hora no puede haber pasado.';
  return '';
}

function validarCanal() {
  const elegido = document.querySelector('input[name="canal"]:checked');
  return elegido ? '' : 'Elige cómo quieres recibir tu recordatorio.';
}

function validarConsentimiento(campo) {
  return campo.checked ? '' : 'Debes aceptar el consentimiento para continuar.';
}

// ---------- Qué regla usa cada campo (la clave es el id del campo) ----------
const reglas = {
  nombre: (campo) => validarNombre(campo.value, 'nombre'),
  apellido: (campo) => validarNombre(campo.value, 'apellido'),
  nacimiento: (campo) => validarNacimiento(campo.value),
  correo: (campo) => validarCorreo(campo.value),
  telefono: (campo) => validarTelefono(campo.value, document.getElementById('pais').value),
  pais: (campo) => validarPais(campo.value),
  region: (campo) => validarRegion(campo.value, document.getElementById('pais').value),
  atencion: (campo) => validarAtencion(campo.value),
  'fecha-cita': (campo) => validarFechaCita(campo.value),
  'hora-cita': (campo) => validarHoraCita(campo.value, document.getElementById('fecha-cita').value),
  canal: () => validarCanal(),
  consentimiento: (campo) => validarConsentimiento(campo)
};

// Lista de todos los campos obligatorios, en el orden en que aparecen en la página
const camposObligatorios = [
  'nombre', 'apellido', 'nacimiento', 'correo', 'telefono',
  'pais', 'region', 'atencion', 'fecha-cita', 'hora-cita',
  'canal', 'consentimiento'
];

// ---------- Valida un campo y muestra el resultado. Devuelve true si es válido ----------
function validarCampo(campo) {
  const regla = reglas[campo.id];
  if (!regla) return true;
  const mensaje = regla(campo);
  if (mensaje) {
    mostrarError(campo, mensaje);
    return false;
  }
  limpiarError(campo);
  return true;
}

// Los botones de radio comparten el error del grupo (el fieldset con id="canal")
function campoDe(elemento) {
  return elemento.name === 'canal' ? document.getElementById('canal') : elemento;
}

// Campos que dependen de otro: si cambia el de la izquierda, se revisan los de la derecha
const dependientes = {
  pais: ['region', 'telefono'],
  'fecha-cita': ['hora-cita']
};

function revalidarDependientes(campo) {
  (dependientes[campo.id] || []).forEach((id) => {
    const otro = document.getElementById(id);
    if (otro.value !== '') validarCampo(otro);
  });
}

// ---------- Validación en tiempo real ----------
const formulario = document.getElementById('formulario');
const resumenErrores = document.getElementById('resumen-errores');
const mensajeExito = document.getElementById('mensaje-exito');

// Al salir de un campo, se valida (los radios se validan al elegir, no al pasar con Tab)
formulario.addEventListener('focusout', (evento) => {
  if (evento.target.name === 'canal') return;
  validarCampo(campoDe(evento.target));
});

// Mientras escribes, solo se revisa si el campo ya tenía un error (así se quita al corregir)
formulario.addEventListener('input', (evento) => {
  const campo = campoDe(evento.target);
  if (campo.getAttribute('aria-invalid') === 'true') {
    validarCampo(campo);
  }
});

// Al cambiar una opción, se valida y se revisan los campos que dependen de ella
formulario.addEventListener('change', (evento) => {
  const campo = campoDe(evento.target);
  validarCampo(campo);
  revalidarDependientes(campo);
});

// ---------- Envío del formulario ----------
formulario.addEventListener('submit', (evento) => {
  // Evita que la página se recargue: solo simulamos el envío
  evento.preventDefault();
  mensajeExito.classList.add('hidden');

  // Se validan TODOS los campos, no solo los que el usuario tocó
  const invalidos = [];
  camposObligatorios.forEach((id) => {
    const campo = document.getElementById(id);
    if (!validarCampo(campo)) invalidos.push(campo);
  });

  // Si hay errores: se muestra el resumen y el foco va al primer campo con error
  if (invalidos.length > 0) {
    const cantidad = invalidos.length;
    resumenErrores.textContent = cantidad === 1
      ? 'Hay 1 campo con errores. Corrígelo para continuar.'
      : 'Hay ' + cantidad + ' campos con errores. Corrígelos para continuar.';
    resumenErrores.classList.remove('hidden');
    const primero = invalidos[0];
    if (primero.id === 'canal') {
      document.querySelector('input[name="canal"]').focus();
    } else {
      primero.focus();
    }
    return;
  }

  // Si todo es válido: se oculta el resumen y se muestra el mensaje de éxito
  resumenErrores.classList.add('hidden');
  const nombre = document.getElementById('nombre').value.trim();
  const partes = document.getElementById('fecha-cita').value.split('-');
  const fecha = partes[2] + '/' + partes[1] + '/' + partes[0];
  const hora = document.getElementById('hora-cita').value;
  mensajeExito.textContent = 'Gracias, ' + nombre + '. Recibimos tu solicitud de cita para el ' + fecha + ' a las ' + hora + '. Te contactaremos pronto.';
  mensajeExito.classList.remove('hidden');
  mensajeExito.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// ---------- Botón "Limpiar formulario" ----------
formulario.addEventListener('reset', () => {
  camposObligatorios.forEach((id) => limpiarError(document.getElementById(id)));
  resumenErrores.classList.add('hidden');
  mensajeExito.classList.add('hidden');
});