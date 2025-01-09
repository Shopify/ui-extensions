<Screen name="Stack" title="Stack">
  <Selectable onPress={() => {}}>
    <Stack
      direction="inline"
      justifyContent="space-between"
      inlineSize="100%"
      alignContent="center"
      alignItems="center"
      paddingInline="450"
      paddingBlock="600"
    >
      <Stack direction="block" gap="100">
        <Text>Hello world!</Text>
        <Text variant="captionRegular">
          This is an example of nested stacks!
        </Text>
      </Stack>
      <Stack
        direction="inline"
        alignItems="center"
        alignContent="center"
        gap="600"
      >
        <Text variant="captionRegular">Let's go!</Text>
        <Icon name="chevron-right" />
      </Stack>
    </Stack>
  </Selectable>
</Screen>;
