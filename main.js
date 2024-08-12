function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;  
  audio.currentTime = 0;  
  audio.play();
}

function addPlayingClass(keyCode) {
  const button = document.querySelector(`button[data-key="${keyCode}"]`);
  if (!button) return; 
  button.classList.add('playing');
}

function removePlayingClass(event) {
  if (event.propertyName !== 'transform') return; 
  this.classList.remove('playing');
}

document.addEventListener('keydown', (event) => {
  playSound(event.keyCode);
  addPlayingClass(event.keyCode);
});

const buttons = document.querySelectorAll('.drum button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
      const keyCode = button.getAttribute('data-key');
      playSound(keyCode);
      addPlayingClass(keyCode);
  });

  button.addEventListener('touchstart', () => {
      const keyCode = button.getAttribute('data-key');
      playSound(keyCode);
      addPlayingClass(keyCode);
  });

  button.addEventListener('transitionend', removePlayingClass);
});