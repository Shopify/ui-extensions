export default function extension() {
  const avatar = document.createElement('s-avatar');

  avatar.initials = 'EW';
  avatar.alt = 'Evan White';
  avatar.size = 'base';

  document.body.append(avatar);
}
