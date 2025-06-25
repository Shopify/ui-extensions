export default async () => {
  const target = shopify.target;

  const text = document.createElement('s-text');
  text.textContent = `Line item title: ${target.current.merchandise?.title}`;

  target.subscribe((updatedTarget) => {
    text.textContent = `Line item title: ${updatedTarget.merchandise?.title}`;
  });

  document.body.append(text);
}
