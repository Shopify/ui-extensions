import {
  reactExtension,
  Button,
  Link,
  Icon,
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
      heading="We value your privacy"
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
        <Button
          kind="secondary"
          onPress={() => {}}
        >
          <Icon source="settings" />
        </Button>
      }
    >
      <TextBlock>
        This website uses cookies to ensure you
        get the best experience on our website.{' '}
        <Link>Privacy Policy</Link>.
      </TextBlock>
    </Sheet>
  );
}
