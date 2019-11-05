import * as Polaris from '@shopify/polaris';
import Button from './Button';
import Card from './Card';
import Checkbox from './Checkbox';
import ChoiceList from './ChoiceList';
import FormGroup from './Form';
import Label from './Label';
import Select from './Select';
import Textfield from './Textfield';

import * as ComponentProps from './props';

const StackItem = Polaris.Stack.Item;

const components = {
  Button,
  // Chart,
  Checkbox,
  ChoiceList,
  Label,
  Textfield,
  Card,
  FormGroup,
  Select,
  StackItem,
};

for (var c in Polaris) {
  if (!components[c]) components[c] = Polaris[c];
}

export default components;
export {ComponentProps};
