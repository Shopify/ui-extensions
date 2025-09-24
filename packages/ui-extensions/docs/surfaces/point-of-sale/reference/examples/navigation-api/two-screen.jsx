import { render } from "preact";

export default async () => {
  render(<Extension />, document.body);
};

const Extension = () => {
  const url = navigation.currentEntry.url;

  // note: url is lowercased, so we compare with lowercase strings
  if (url?.includes("screentwo")) {
    return (
      <s-page heading="Screen Two Title">
        <s-scroll-box>
          <s-button onClick={() => navigation.navigate("ScreenOne")}>
            Navigate to Screen One
          </s-button>
          <s-button onClick={() => navigation.back()}>Go back</s-button>
        </s-scroll-box>
      </s-page>
    );
  }

  return (
    <s-page heading="Screen One Title">
      <s-scroll-box>
        <s-button onClick={() => navigation.navigate("ScreenTwo")}>
          Navigate to Screen Two
        </s-button>
        <s-button onClick={() => navigation.back()}>Go back</s-button>
      </s-scroll-box>
    </s-page>
  );
};