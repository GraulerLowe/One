const totalSteps = 5;
const mensajes = [
  "El alien te han regalado resiliencia épica.",
  "¡Felicidades! Has desbloqueado el nivel de paz interior."
];

// Muestra/oculta pasos
function showStep(n) {
  const prevStep = document.querySelector('.step:not(.hidden)');
  const nextStep = document.getElementById(`step-${n}`);

  if (prevStep && prevStep !== nextStep) {
    prevStep.classList.add('fade-out');
    setTimeout(() => {
      prevStep.classList.add('hidden');
      prevStep.classList.remove('fade-out');

      // Ahora mostrar el siguiente paso
      nextStep.classList.remove('hidden');
      nextStep.classList.add('fade-in');
      setTimeout(() => {
        nextStep.classList.remove('fade-in');
      }, 500); // Duración igual a la animación
    }, 500); // Duración igual a la transición CSS
  } else if (nextStep) {
    // Si es el primer paso o no hay anterior
    nextStep.classList.remove('hidden');
    nextStep.classList.add('fade-in');
    setTimeout(() => {
      nextStep.classList.remove('fade-in');
    }, 500);
  }
}

// Botones pasos 1–3
for (let i = 1; i < totalSteps; i++) {
  document.getElementById(`btn-${i}`)
    .addEventListener('click', () => showStep(i + 1));
}

// Botón “Leer nota” (btn-4)
document.getElementById('btn-4').addEventListener('click', () => {
  const idx = Math.floor(Math.random() * mensajes.length);

  // Inyecta texto en el párrafo de la nota
  document.querySelector('#step-5 .nota p').textContent = mensajes[idx];

  // Revela la paso 5
  showStep(5);

    // Muestra la imagen de la nota
  const notaDiv = document.querySelector('#step-5 .nota');
  notaDiv.classList.add('visible');
  
  // Muestra el botón de descarga
  const downloadBtn = document.getElementById('descargar-nota');
  downloadBtn.classList.remove('hidden');
});

