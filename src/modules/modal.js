const body = document.querySelector('body');

const closeIcon = document.querySelector('.closeIcon');

const toggleModal = document.querySelector('.closeModal');

const handleModalToggle = () => {
  toggleModal.classList.toggle('showModal');

  // Preventing the body scroll when popup is active
  if (toggleModal.classList.contains('showModal')) {
    body.style.overflow = 'hidden';
  } else {
    body.style = '';
  }
};

// Close popup
if (closeIcon) {
  closeIcon.addEventListener('click', handleModalToggle);
}

module.exports = { handleModalToggle };
