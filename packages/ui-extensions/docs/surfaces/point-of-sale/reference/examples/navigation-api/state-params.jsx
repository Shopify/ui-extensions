import { render } from "preact";

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const url = navigation.currentEntry.url;
  
  /** @type {{ firstParam?: string; secondParam?: string }} */
  const state = navigation.currentEntry.getState();

  if (url?.includes("ScreenTwo")) {
    return (
      <s-page heading="Screen Two Title">
        <s-scroll-box>
          <s-text>First Param: {state.firstParam}</s-text>
          <s-text>Second Param: {state.secondParam}</s-text>
        </s-scroll-box>
      </s-page>
    );
  }

  return (
    <s-page heading="Screen One Title">
      <s-scroll-box>
        <s-button onClick={() => navigation.navigate("ScreenTwo", { state: { firstParam: "test", secondParam: "test2" } })}>
          Navigate to Screen Two
        </s-button>
        <s-button onClick={() => navigation.back()}>Go back</s-button>
      </s-scroll-box>
    </s-page>
  );
};