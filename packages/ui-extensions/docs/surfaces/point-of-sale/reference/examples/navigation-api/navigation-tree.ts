// You can navigate to any of these three screens since they all exist within the same Navigator.
let navigator = root.createComponent(Navigator);

let screenOne = root.createComponent(Screen, {
  name: 'ScreenOne',
  title: 'Screen One Title',
});

let screenTwo = root.createComponent(Screen, {
  name: 'ScreenTwo',
  title: 'Screen Two Title',
});

let screenThree = root.createComponent(Screen, {
  name: 'ScreenThree',
  title: 'Screen Three Title',
});

navigator.appendChild(screenOne);
navigator.appendChild(screenTwo);
navigator.appendChild(screenThree);
root.appendChild(navigator);
