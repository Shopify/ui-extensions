// Basic example for MoneyField
export default function extension() {
  const moneyField = document.createElement('shopify-money-field');
  moneyField.label = 'Cost';
  moneyField.defaultValue = '9.99';
  moneyField.currencycode = 'EUR';

  moneyField.addEventListener('input', (event) => {
    console.log(event.target.value);
  });

  document.body.appendChild(moneyField);
}
