
// EXPERIENCIA
const openExp = document.getElementById('openExp');
const modal_containerExp = document.getElementById('modal_containerExp');
const closeExp = document.getElementById('closeExp');

openExp.addEventListener('click', () => {
  modal_containerExp.classList.add('show'); 
});

closeExp.addEventListener('click', () => {
  modal_containerExp.classList.remove('show');
});

// ESTUDIOS

const openEst = document.getElementById('openEst');
const modal_containerEst = document.getElementById('modal_containerEst');
const closeEst = document.getElementById('closeEst');

openEst.addEventListener('click', () => {
  modal_containerEst.classList.add('show'); 
});

closeEst.addEventListener('click', () => {
  modal_containerEst.classList.remove('show');
});


