export default async () => {
  const page = document.createElement('s-page');

  const primaryAction = document.createElement('s-button');
  primaryAction.innerHTML = 'Primary action';
  primaryAction.slot = 'primary-action';
  primaryAction.addEventListener('click', () => console.log('Primary action'));

  const secondaryActions1 = document.createElement('s-button');
  secondaryActions1.slot = 'secondary-actions';
  secondaryActions1.textContent = 'Secondary action 1';
  secondaryActions1.addEventListener('click', () =>
    console.log('Secondary action 1'),
  );

  const secondaryActions2 = document.createElement('s-button');
  secondaryActions2.slot = 'secondary-actions';
  secondaryActions2.textContent = 'Secondary action 2';
  secondaryActions2.addEventListener('click', () =>
    console.log('Secondary action 2'),
  );

  const breadcrumbActions = document.createElement('s-button');
  breadcrumbActions.slot = 'breadcrumb-actions';
  breadcrumbActions.setAttribute('accessibilitylabel', 'Button');
  breadcrumbActions.setAttribute('href', 'shopify://customer-account/orders');

  page.append(primaryAction);
  page.append(secondaryActions1);
  page.append(secondaryActions2);
  page.append(breadcrumbActions);

  page.heading = 'Order #1411';
  page.subheading = 'Confirmed Oct 5';

  page.append('Content');

  document.body.append(page);
}
