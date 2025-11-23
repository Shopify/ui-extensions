import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PinPad',
  description:
    'The `PinPad` component provides a secure numeric keypad interface for PIN entry and validation. Use it to collect PIN codes, passcodes, or other sensitive numeric input with proper masking and validation.\n\nThe component provides a secure numeric input interface specifically designed for PIN entry, with visual feedback that masks entered digits for security. It includes built-in validation for PIN length requirements, supports error states for invalid PINs, and provides haptic feedback on touch-enabled devices to confirm key presses during secure authentication workflows.\n\n`PinPad` components meets security standards for PIN entry by preventing screenshot capture and display recording, protecting sensitive authentication data during payment authorization and staff access workflows.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `PinPad` component.',
      type: 'PinPadProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'pin-pad-thumbnail.png',
  defaultExample: {
    image: 'pin-pad-default.png',
    codeblock: {
      title: 'Validate a PIN securely',
      tabs: [
        {
          code: '../examples/pinpad/validation.ts',
          language: 'ts',
        },
      ],
    },
    description:
      'Collect and validate PINs securely using a numeric keypad interface. This example demonstrates a PinPad with an `onPinSubmit` callback that validates entered PINs asynchronously. The validation function receives an array of numbers representing the entered digits and returns a Promise that resolves to `PinValidationResult` (either `"accept"` or `"reject"`). In this example, the validation simulates a 1-second async check against a test PIN sequence [1, 2, 3, 4, 5, 6]. The component masks digits for security, provides haptic feedback, and supports error states for invalid PINs—ideal for payment authorization or staff access workflows.',
  },
  subSections: [
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
