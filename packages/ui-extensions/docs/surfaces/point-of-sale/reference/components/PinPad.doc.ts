import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PinPad',
  description:
    'A component used to authenticate or identify individuals through a standarized number pad.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'PinPad',
      description: '',
      type: 'PinPadProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'pinPad-thumbnail.png',
  defaultExample: {
    image: 'pinPad-default.png',
    codeblock: {
      title: 'Validation',
      tabs: [
        {
          code: '../examples/pinpad/validation.ts',
          language: 'ts',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'example',
      title: 'Validating a PIN Example',
      sectionContent: `
This code defines a function onPinSubmit that simulates the validation of a Personal Identification Number (PIN). The function takes an array of numbers as input, representing the PIN entered by a user.

The function returns a Promise that resolves with a PinValidationResult, which can be either 'accept' or 'reject'. The Promise simulates an asynchronous operation using setTimeout with a delay of 1 second.

This code simulates an asynchronous operation using the setTimeout callback. The code checks if the entered PIN matches the sequence [1, 2, 3, 4, 5, 6]. If the entered PIN matches this sequence, the Promise resolves with 'accept'; otherwise, it resolves with 'reject'.

This function can be used to simulate PIN validation in a system where the correct PIN is [1, 2, 3, 4, 5, 6].
`,
    },
    {
      type: 'Generic',
      anchorLink: 'guidelines',
      title: 'Guidelines',
      sectionContent: `
*   Due to the nature of this component and the intended UX for this type of action, we recommend surfacing this in a full screen modal.

*   Please be advised that when utilizing the onSubmit callback, it is your responsibility to manage the navigation to the subsequent screen or dismissal of the modal. The component will only handle rejection of invalid PIN cases.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'content-guidelines',
      title: 'Content guidelines',
      sectionContent: `
When referring to a personal identification number, refer to it as a PIN, with all capital letters.

Also when writing the PIN title or PinPadAction label:

*   Be concise
*   Never go over 4 words
*   Do not use punctuation
*   Start with a capital letter

### Title (Enter PIN)

✅ [PIN pad title] Enter PIN<br>
✅ [PIN pad title] Enter staff PIN<br>
✅ [PIN pad title] Create PIN<br>
❌ [PIN pad title] Please put in a PIN<br>
❌ [PIN pad title] Create a PIN

### PinPadAction (Generate random PIN, Clear)

For PIN Pad actions, the action label should clearly communicate the action.

✅ [PIN pad action label] Generate random PIN<br>
❌ [PIN pad action label] Please create a new random PIN

You can use just [verb], if it's obvious from the surrounding context what the [item] is:

✅ [PIN pad action label] Clear<br>
❌ [PIN pad action label] Clear PIN
      `,
    },
  ],
};

export default data;
