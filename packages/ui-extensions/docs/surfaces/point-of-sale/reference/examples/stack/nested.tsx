<Screen name="Home">
  <Selectable onPress={() => console.log('You tapped this row!')}>
    // Parent stack
    <Stack
      direction="horizontal"
      alignment="space-between"
      paddingVertical={'Medium'}
      paddingHorizontal={'ExtraExtraLarge'}
    >
      // First child stack
      <Stack direction="vertical" spacing={0.5}>
        <Text>Hello world!</Text>
        <Text variant="captionRegular">
          This is an example of nested stacks!
        </Text>
      </Stack>
      // Second child stack
      <Stack direction="vertical" flex={1} alignment="center">
        // Horizontal stack for the right label and chevron icon
        <Stack direction="horizontal" spacing={2}>
          <Text variant="captionRegular">Let's go!</Text>
          <Icon name="chevron-right" />
        </Stack>
      </Stack>
    </Stack>
  </Selectable>
</Screen>;
