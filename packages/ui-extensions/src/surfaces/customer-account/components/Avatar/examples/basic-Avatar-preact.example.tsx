import {render} from 'preact';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  return <s-avatar initials="EW" alt="Evan White" size="base" />;
}
