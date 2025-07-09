import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-navigator>
          <s-screen name="DateField" title="DateField Example">
            <s-scroll-view>
              <s-email-field
                label="Email"
                placeholder="example@email.com"
                helpText="Please enter a valid email"
                value={email}
                onchange={setEmail}
                required={true}
                action={{
                  label: 'Clear',
                  onpress: () => setEmail(''),
                }}
              />
              <s-text>Entered Email: {email}</s-text>
            </s-scroll-view>
          </s-screen>
        </s-navigator>
  );
}