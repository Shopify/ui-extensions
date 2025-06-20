import {render} from 'preact';

export default function extension() {
  render(<App />, document.body);
}

function App() {
  return <s-avatar initials="JD" alt="John Doe" size="base" />;
}
