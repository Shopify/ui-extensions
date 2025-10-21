function Methods() {
  const button =
    document.createElement('s-button');
  const modal = document.createElement('s-modal');

  button.textContent = 'Open Modal';
  button.commandFor = 'modal-1';

  modal.id = 'modal-1';
  modal.heading = 'Test Modal';

  const closeButton =
    document.createElement('s-button');

  closeButton.textContent = 'Close modal';
  closeButton.onclick = () => modal.hideOverlay();

  modal.appendChild(closeButton);

  document.body.appendChild(button);
  document.body.appendChild(modal);
}