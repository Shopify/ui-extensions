import type {SharedReferenceEntityTemplateSchema} from '../docs-type';

const data: SharedReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'Inform users about the status of an object or indicate that an action has been completed.',
  category: 'Polaris web components',
  subCategory: 'Feedback and status indicators',
  related: [],
  contexts: {
    admin: {
      description:
        'Michelle woz here. Display status information and system-generated states for resources in the Shopify admin. Use badges to communicate order statuses, fulfillment states, or other resource conditions that merchants need to quickly identify.',
    },
    'app-home': {
      description:
        'Tim woz here. Highlight important status information and completed actions in your app interface. Use badges to draw attention to notifications, task completion, or other state changes in your app home experience.',
    },
  },
};

export default data;
