// Basic example for ChoiceList
export default function extension() {
  const choiceList = document.createElement('s-choice-list');

  choiceList.label = "What's your favourite fruit?";

  const choice1 = document.createElement('s-choice');
  choice1.label = 'Apple';
  choice1.value = 'apple';

  const choice2 = document.createElement('s-choice');
  choice2.label = 'Banana';
  choice2.value = 'banana';

  const choice3 = document.createElement('s-choice');
  choice3.label = 'Orange';
  choice3.value = 'orange';

  choiceList.appendChild(choice1);
  choiceList.appendChild(choice2);
  choiceList.appendChild(choice3);

  document.body.appendChild(choiceList);
}
