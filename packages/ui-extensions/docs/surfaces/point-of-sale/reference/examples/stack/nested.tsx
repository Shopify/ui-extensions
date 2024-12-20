<Screen name="Home">
  <Selectable onPress={() => console.log('Selectable pressed')}>
    <Stack
      direction="inline"
      inlineSize="100%"
      justifyContent="space-between"
      alignItems="center"
      paddingInline="500"
      paddingBlock="600"
    >
      <Stack direction="block" gap="100">
        <Text>Hello world!</Text>
        <Text variant="captionRegular">
          This is an example of nested stacks!
        </Text>
      </Stack>
      <Stack direction="inline" gap="200">
        <Text variant="captionRegular">Let's go!</Text>
        <Icon name="chevron-right" />
      </Stack>
    </Stack>
  </Selectable>
</Screen>;
