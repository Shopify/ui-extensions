import * as Polaris from '@shopify/polaris';
import Button from './Button';
import Card from './Card';
import Checkbox from './Checkbox';
import ChoiceList from './ChoiceList';
import FormGroup from './Form';
import Label from './Label';
import TextField from './Textfield';

const StackItem = Polaris.Stack.Item;

const components = {
  Button,
  Checkbox,
  ChoiceList,
  Label,
  TextField,
  Card,
  FormGroup,
  StackItem,
};

for (var c in Polaris) {
  if (!components[c]) components[c] = Polaris[c];
}

export default components;
