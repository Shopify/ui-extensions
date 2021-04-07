# Spinner

Spinner is used to notify buyers that their action is being processed. The Spinner is usually used when sending or receiving data from a server.

Any children of the Spinner are used as accessible content that will replace the animated loading indicator when buyers prefers reduced motion. If not included, it will use the loading indicator for all buyers.
 
## Props
required = *
<table><tr><th>Name</th><th>Type</th><th>Description</th></tr><tr><td>size</td><td><code>"small"</code> | <code>"large"</code></td><td>Adjust the size. If not specified, it will use the default size which is about twice as big as the base text. </td></tr><tr><td>color</td><td><code>"inherit"</code></td><td>Specify that the Spinner will inherit its color from its parent. If not specified, it will take the `interactive` color from the theme. </td></tr></table>