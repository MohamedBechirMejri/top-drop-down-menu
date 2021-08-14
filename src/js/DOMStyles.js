export const DOMStyles = () => {
  const navToggleButton = document.querySelector('.navtoggle');
  navToggleButton.addEventListener('click', () => {
    navToggleButton.classList.toggle('clicked');
  });
};

export default { DOMStyles };
