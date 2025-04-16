export default function extension() {
  const imageGroup = document.createElement('s-image-group');
  const firstImage = document.createElement('s-image');
  firstImage.src = '../assets/flower.jpg';

  const secondImage = document.createElement('s-image');
  secondImage.src = '../assets/flower.jpg';

  const thirdImage = document.createElement('s-image');
  thirdImage.src = '../assets/flower.jpg';

  imageGroup.append(firstImage);
  imageGroup.append(secondImage);
  imageGroup.append(thirdImage);

  document.body.append(imageGroup);
}
