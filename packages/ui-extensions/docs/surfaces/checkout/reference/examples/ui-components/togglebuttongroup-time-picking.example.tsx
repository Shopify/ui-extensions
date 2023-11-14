import {
  reactExtension,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ToggleButtonGroup
      value="time-9am"
      onChange={(value) => {
        console.log(
          `onChange event with value: ${value}`,
        );
      }}
    >
      <Grid
        columns={['auto', 'auto', 'auto']}
        spacing="base"
      >
        <ToggleButton id="time-9am">
          <View inlineAlignment="center">
            9:00 AM
          </View>
        </ToggleButton>
        <ToggleButton id="time-10am">
          <View inlineAlignment="center">
            10:00 AM
          </View>
        </ToggleButton>
        <ToggleButton id="time-11am">
          <View inlineAlignment="center">
            11:00 AM
          </View>
        </ToggleButton>
        <ToggleButton id="time-1pm">
          <View inlineAlignment="center">
            1:00 PM
          </View>
        </ToggleButton>
        <ToggleButton id="time-2pm">
          <View inlineAlignment="center">
            2:00 PM
          </View>
        </ToggleButton>
        <ToggleButton id="time-3pm">
          <View inlineAlignment="center">
            3:00 PM
          </View>
        </ToggleButton>
      </Grid>
    </ToggleButtonGroup>
  );
}
