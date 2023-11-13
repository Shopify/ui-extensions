import {
  reactExtension,
  Choice,
  ChoiceList,
  Grid,
  TextBlock,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Grid
      columns={[
        'fill',
        '13%',
        '13%',
        '13%',
        '13%',
        '13%',
      ]}
      rows="auto"
      spacing="none"
      border="base"
      cornerRadius="base"
      overflow="hidden"
    >
      <View />
      <View
        padding={['tight', 'extraTight']}
        blockAlignment="center"
        accessibilityVisibility="hidden"
      >
        <TextBlock inlineAlignment="center">
          Strongly disagree
        </TextBlock>
      </View>
      <View
        padding={['tight', 'extraTight']}
        blockAlignment="center"
        accessibilityVisibility="hidden"
      >
        <TextBlock inlineAlignment="center">
          Disagree
        </TextBlock>
      </View>
      <View
        padding={['tight', 'extraTight']}
        blockAlignment="center"
        accessibilityVisibility="hidden"
      >
        <TextBlock inlineAlignment="center">
          Neutral
        </TextBlock>
      </View>
      <View
        padding={['tight', 'extraTight']}
        blockAlignment="center"
        accessibilityVisibility="hidden"
      >
        <TextBlock inlineAlignment="center">
          Agree
        </TextBlock>
      </View>
      <View
        padding={['tight', 'extraTight']}
        blockAlignment="center"
        accessibilityVisibility="hidden"
      >
        <TextBlock inlineAlignment="center">
          Strongly agree
        </TextBlock>
      </View>

      <ChoiceList
        name="question1"
        value=""
        onChange={(value) => {
          console.log(
            `onChange event with value: ${value}`,
          );
        }}
      >
        <View
          background="subdued"
          padding="base"
          blockAlignment="center"
        >
          <TextBlock>
            I recommend Plant to others.
          </TextBlock>
        </View>
        <View
          background="subdued"
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question1-1"
            accessibilityLabel="Strongly disagree"
          />
        </View>
        <View
          background="subdued"
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question1-2"
            accessibilityLabel="Disagree"
          />
        </View>
        <View
          background="subdued"
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question1-3"
            accessibilityLabel="Neutral"
          />
        </View>
        <View
          background="subdued"
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question1-4"
            accessibilityLabel="Agree"
          />
        </View>
        <View
          background="subdued"
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question1-5"
            accessibilityLabel="Strongly agree"
          />
        </View>
      </ChoiceList>

      <ChoiceList
        name="question2"
        value=""
        onChange={(value) => {
          console.log(
            `onChange event with value: ${value}`,
          );
        }}
      >
        <View
          padding="base"
          blockAlignment="center"
        >
          <TextBlock>
            I have had a positive experience
            purchasing from Plant.
          </TextBlock>
        </View>
        <View
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question2-1"
            accessibilityLabel="Strongly disagree"
          />
        </View>
        <View
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question2-2"
            accessibilityLabel="Disagree"
          />
        </View>
        <View
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question2-3"
            accessibilityLabel="Neutral"
          />
        </View>
        <View
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question2-4"
            accessibilityLabel="Agree"
          />
        </View>
        <View
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question2-5"
            accessibilityLabel="Strongly agree"
          />
        </View>
      </ChoiceList>

      <ChoiceList
        name="question3"
        value=""
        onChange={(value) => {
          console.log(
            `onChange event with value: ${value}`,
          );
        }}
      >
        <View
          background="subdued"
          padding="base"
          blockAlignment="center"
        >
          <TextBlock>
            I would purchase from Plant again.
          </TextBlock>
        </View>
        <View
          background="subdued"
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question3-1"
            accessibilityLabel="Strongly disagree"
          />
        </View>
        <View
          background="subdued"
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question3-2"
            accessibilityLabel="Disagree"
          />
        </View>
        <View
          background="subdued"
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question3-3"
            accessibilityLabel="Neutral"
          />
        </View>
        <View
          background="subdued"
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question3-4"
            accessibilityLabel="Agree"
          />
        </View>
        <View
          background="subdued"
          blockAlignment="center"
          inlineAlignment="center"
        >
          <Choice
            id="question3-5"
            accessibilityLabel="Strongly agree"
          />
        </View>
      </ChoiceList>
    </Grid>
  );
}
