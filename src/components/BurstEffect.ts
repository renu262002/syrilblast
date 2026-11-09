export function triggerNeonBurst(eventOrElement: React.MouseEvent | HTMLElement) {
  let originX = window.innerWidth / 2;
  let originY = window.innerHeight / 2;

  if ('clientX' in eventOrElement && typeof eventOrElement.clientX === 'number') {
    originX = eventOrElement.clientX;
    originY = eventOrElement.clientY;
  } else if (eventOrElement instanceof HTMLElement) {
    const rect = eventOrElement.getBoundingClientRect();
    originX = rect.left + rect.width / 2;
    originY = rect.top + rect.height / 2;
  }

  const colors = ['#ccff00', '#00ff66', '#ffffff', '#e5ff80', '#10b981'];
  const particleCount = 28;

  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.inset = '0';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '99999';
  document.body.appendChild(container);

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 6 + 3;
    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.4;
    const distance = Math.random() * 110 + 40;
    const duration = Math.random() * 0.4 + 0.5;

    particle.style.position = 'absolute';
    particle.style.left = `${originX}px`;
    particle.style.top = `${originY}px`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = color;
    particle.style.boxShadow = `0 0 10px ${color}`;
    particle.style.transform = 'translate(-50%, -50%) scale(1)';
    particle.style.transition = `transform ${duration}s cubic-bezier(0.12, 0.8, 0.32, 1), opacity ${duration}s ease-out`;

    container.appendChild(particle);

    requestAnimationFrame(() => {
      const destX = Math.cos(angle) * distance;
      const destY = Math.sin(angle) * distance + 20; // slight gravity
      particle.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(0)`;
      particle.style.opacity = '0';
    });
  }

  setTimeout(() => {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }, 1000);
}
