import {render} from 'preact';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  return (
    <s-image-group>
      <s-image src="../assets/flower.jpg" />
      <s-image src="../assets/flower.jpg" />
      <s-image src="../assets/flower.jpg" />
    </s-image-group>
  );
}
