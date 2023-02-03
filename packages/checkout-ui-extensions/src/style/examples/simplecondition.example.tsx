<Pressable
  onPress={() => alert('press')}
  background={Style.default('color1').when({hover: true}, 'color2')}
>
  Content
</Pressable>;
