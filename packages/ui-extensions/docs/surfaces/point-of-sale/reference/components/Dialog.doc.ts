import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForDialog = (title: string, fileName: string) =>
  generateCodeBlock(title, 'dialog', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Dialog',
  description:
    'A dialog is a high-priority, intentionally disruptive message that requires action from the merchant before they can continue using POS.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Dialog',
      description: '',
      type: 'DialogProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    codeblock: generateCodeBlockForDialog('Dialog example', 'default.example'),
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'guidelines',
      title: 'Guidelines',
      sectionContent: `
- A dialog appears on top of the view the merchant is currently looking at.
- When a dialog appears, the merchant can only interact with the buttons in the dialog and nothing else in the view.
- A scrim is used to dim the UI in the background, using the surfaceBackground color set to 60% transparency.
- Dialogs always include at least one action, two actions at most.
- Buttons in dialogs work best when stacked to accommodate for longer translated content.
- When buttons are displayed side-by-side, the primary action is on the right. When buttons are stacked, the primary action is at the top.
- For buttons that initiate irreversible actions, the text should be displayed in "destructive" (red) state.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'content-guidelines',
      title: 'Content guidelines',
      sectionContent: `
For confirmation dialogs, the header should be formed as a question that re-emphasizes the action being taken. Don't write: "Are you sure?"

✅ Log out of Shopify POS?<br />
❌ Are you sure you want to log out of Shopify POS?<br />
❌ You’re about to log out of Shopify POS

For confirmation dialogs, the primary button should clearly confirm the action while the secondary button should cancel the action with "Cancel":

✅ [Primary button] Log out<br />
❌ [Primary button] Yes

For errors, the header should clearly communicate the problem rather than the solution (use the body and button to communicate the solution):

✅ [Header] Transaction declined<br />
❌ [Header] Retry transaction

For informational dialogs where there's no action for the merchant to take but to acknowledge the message, the sole button should be "OK":

✅ [Button] OK<br />
❌ [Button] Understood<br />
❌ [Button] Dismiss
      `,
    },
  ],
};

export default data;
