function openModal(topic) {
  const modal = document.getElementById('bookingModal');
  const sub = document.getElementById('modalSubtitle');
  if (topic) {
    sub.innerText = 'Вы выбрали: ' + topic + '. Мы перезвоним для подтверждения времени.';
  }
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('bookingModal').classList.remove('active');
}

function closeModalOnBg(e) {
  if (e.target.id === 'bookingModal') {
    closeModal();
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  alert('Спасибо! Ваша заявка успешно принята. Мы свяжемся с вами в течение 15 минут.');
  closeModal();
}

function filterSchedule(day, btn) {
  document.querySelectorAll('.day-tab').forEach(el => el.classList.remove('active'));
  btn.classList.add('active');
}
