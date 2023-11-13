import {
  extension,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  View,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root) => {
    const toggleButtonGroup =
      root.createComponent(
        ToggleButtonGroup,
        {
          value: 'time-9am',
          onChange: (value) => {
            console.log(
              `onChange event with value: ${value}`,
            );
          },
        },
        [
          root.createComponent(
            Grid,
            {
              columns: ['auto', 'auto', 'auto'],
              spacing: 'base',
            },
            [
              root.createComponent(
                ToggleButton,
                {id: 'time-9am'},
                root.createComponent(
                  View,
                  {inlineAlignment: 'center'},
                  '9:00 AM',
                ),
              ),
              root.createComponent(
                ToggleButton,
                {id: 'time-10am'},
                root.createComponent(
                  View,
                  {inlineAlignment: 'center'},
                  '10:00 AM',
                ),
              ),
              root.createComponent(
                ToggleButton,
                {id: 'time-11am'},
                root.createComponent(
                  View,
                  {inlineAlignment: 'center'},
                  '11:00 AM',
                ),
              ),
              root.createComponent(
                ToggleButton,
                {id: 'time-1pm'},
                root.createComponent(
                  View,
                  {inlineAlignment: 'center'},
                  '1:00 PM',
                ),
              ),
              root.createComponent(
                ToggleButton,
                {id: 'time-2pm'},
                root.createComponent(
                  View,
                  {inlineAlignment: 'center'},
                  '2:00 PM',
                ),
              ),
              root.createComponent(
                ToggleButton,
                {id: 'time-3pm'},
                root.createComponent(
                  View,
                  {inlineAlignment: 'center'},
                  '3:00 PM',
                ),
              ),
            ],
          ),
        ],
      );

    root.appendChild(toggleButtonGroup);
  },
);
