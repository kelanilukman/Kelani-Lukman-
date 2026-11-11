document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = document.querySelector('.footer-links');

  if (footerLinks && !footerLinks.querySelector('.year')) {
    const yearNode = document.createElement('span');
    yearNode.className = 'year';
    yearNode.textContent = `© ${currentYear}`;
    footerLinks.appendChild(yearNode);
  }
});
