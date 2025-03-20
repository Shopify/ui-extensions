const onClick = () => {
  setClicked(true);
};

<s-stack gap="base" alignContent="center" justifyContent="center">
  <s-clickable onClick={onClick}>
    <s-badge tone={clicked ? 'success' : 'info'}>
      {clicked ? 'Clicked' : 'Click me'}
    </s-badge>
  </s-clickable>
</s-stack>;
