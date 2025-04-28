export default function extension() {
  const list = document.createElement('s-ordered-list');

  const item1 = document.createElement('s-list-item');
  item1.textContent = 'Add items to your cart';
  list.appendChild(item1);

  const item2 = document.createElement('s-list-item');
  item2.textContent = 'Review your order details';
  list.appendChild(item2);

  const item3 = document.createElement('s-list-item');
  item3.textContent = 'Complete your purchase';
  list.appendChild(item3);

  document.body.append(list);
}
