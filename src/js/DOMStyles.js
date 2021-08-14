export const DOMStyles = () => {
  const navToggleButton = document.querySelector('.navtoggle');
  navToggleButton.addEventListener('click', () => {
    const navlinks = document.querySelector('.navlinks');

    navToggleButton.classList.toggle('clicked');
    navlinks.classList.toggle('visible');
  });
};

export default { DOMStyles };
