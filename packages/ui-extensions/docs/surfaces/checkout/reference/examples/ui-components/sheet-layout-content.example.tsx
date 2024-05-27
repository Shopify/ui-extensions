import {
  reactExtension,
  Button,
  Link,
  Image,
  InlineLayout,
  Sheet,
  TextBlock,
  useCustomerPrivacy,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.footer.render-after',
  () => <Extension />,
);

function Extension() {
  const {shouldShowBanner} = useCustomerPrivacy();

  return (
    <Sheet
      accessibilityLabel="A sheet that collects privacy consent preferences"
      defaultOpen={shouldShowBanner}
      primaryAction={
        <>
          <Button
            kind="secondary"
            onPress={() => {}}
          >
            I decline
          </Button>
          <Button
            kind="secondary"
            onPress={() => {}}
          >
            I agree
          </Button>
        </>
      }
      secondaryAction={
        <Button kind="plain" onPress={() => {}}>
          Preferences
        </Button>
      }
    >
      <InlineLayout
        padding="none"
        spacing="small100"
        columns={[38, 'fill']}
      >
        <Image source="https://yourawesomeimage.com" />
        <TextBlock>
          This website uses cookies to ensure you
          get the best experience on our website.{' '}
          <Link>Learn more</Link>.
        </TextBlock>
      </InlineLayout>
    </Sheet>
  );
}
