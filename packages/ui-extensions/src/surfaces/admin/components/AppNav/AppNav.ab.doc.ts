import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'AppNav',
  description:
    'The app nav component (`<s-app-nav>`) injects navigation items into the Shopify admin sidebar. Use this component to define sidebar navigation for your App Home extension. It does not render visible UI — it configures navigation items on the host side.',
  isVisualComponent: false,
  category: 'Web components',
  subCategory: 'Navigation',
  thumbnail: '/assets/templated-apis-screenshots/admin/components/app-nav.png',
  requires:
    'an [admin.app.home.render](/docs/api/app-home-ui-extension/{API_VERSION}/targets) target.',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the app nav component.',
      type: 'AppNavAttributes',
    },
    {
      title: 'Link properties',
      description: 'Properties for links used as children.',
      type: 'AppNavLinkAttributes',
    },
  ],
  related: [
    {
      name: 'Link',
      subtitle: 'Web component',
      url: '/docs/api/app-home-ui-extension/{API_VERSION}/web-components/actions/link',
      type: 'component',
    },
  ],
};

export default data;
