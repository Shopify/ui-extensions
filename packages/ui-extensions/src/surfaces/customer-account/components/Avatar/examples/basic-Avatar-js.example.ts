export default function extension() {
  const avatar = document.createElement('s-avatar');

  avatar.initials = 'JD';
  avatar.alt = 'John Doe';
  avatar.size = 'base';

  document.body.append(avatar);
}
