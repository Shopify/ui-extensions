import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PinPad',
  description:
    'The PinPad component provides a secure numeric keypad interface for PIN entry and validation. Use it to collect PIN codes, passcodes, or other sensitive numeric input with proper masking and validation.\n\nThe component provides a secure numeric input interface specifically designed for PIN entry, with visual feedback that masks entered digits for security. It includes built-in validation for PIN length requirements, supports error states for invalid PINs, and provides haptic feedback on touch-enabled devices to confirm key presses during secure authentication workflows.\n\nPinPad components meets security standards for PIN entry by preventing screenshot capture and display recording, protecting sensitive authentication data during payment authorization and staff access workflows.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the PinPad component.',
      type: 'PinPadProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Forms',
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
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Mask sensitive entry:** Set \`masked\` to true for security-related PIN entry to prevent shoulder-surfing.\n- **Set appropriate constraints:** Define \`minPinLength\` and \`maxPinLength\` based on security needs (4-6 for basic, 6-10 for higher security).\n- **Validate securely on backend:** Use \`onSubmit\` for server-side verification. Return \`accept\` or \`reject\`. Implement rate limiting.\n- **Write clear labels:** Use direct prompts like "Enter Manager PIN" rather than verbose text.\n- **Use PIN terminology:** Always use "PIN" in all capitals.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- PinPad is designed for numeric PIN entry only—alphanumeric passcodes or complex passwords require different input components.\n- PIN length is constrained to 4-10 digits—requirements outside this range need alternative authentication methods.\n- The component provides the keypad interface and basic validation—additional security measures like rate limiting, attempt tracking, or lockout mechanisms must be implemented in your \`onSubmit\` callback.\n`,
    },
  ],
};

export default data;
