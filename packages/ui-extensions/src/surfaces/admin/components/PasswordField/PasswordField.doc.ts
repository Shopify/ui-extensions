import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/PasswordField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/passwordfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PasswordField',
    },
  ],
  defaultExample: {
    image: 'password-field-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
        },
      ],
    },
  },
};

export default data;
