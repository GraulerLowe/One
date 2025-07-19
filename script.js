const totalSteps = 6;
const mensajes = [
  "El alien te ha regalado resiliencia épica.",
  "El alien ha dejado algo únicamente para ti."
];

function showStep(n) {
  const prevStep = document.querySelector('.step:not(.hidden)');
  const nextStep = document.getElementById(`step-${n}`);

  if (prevStep && prevStep !== nextStep) {
    prevStep.classList.add('fade-out');
    setTimeout(() => {
      prevStep.classList.add('hidden');
      prevStep.classList.remove('fade-out');

      nextStep.classList.remove('hidden');
      nextStep.classList.add('fade-in');
      setTimeout(() => {
        nextStep.classList.remove('fade-in');
      }, 500);
    }, 500); 
  } else if (nextStep) {
   
    nextStep.classList.remove('hidden');
    nextStep.classList.add('fade-in');
    setTimeout(() => {
      nextStep.classList.remove('fade-in');
    }, 500);
  }
}

for (let i = 1; i < totalSteps; i++) {
  document.getElementById(`btn-${i}`)
    .addEventListener('click', () => showStep(i + 1));
}

document.getElementById('btn-4').addEventListener('click', () => {
  const idx = Math.floor(Math.random() * mensajes.length);

  document.querySelector('#step-5 .nota p').textContent = mensajes[idx];

  showStep(5);

  const notaDiv = document.querySelector('#step-5 .nota');
  notaDiv.classList.add('visible');

});

