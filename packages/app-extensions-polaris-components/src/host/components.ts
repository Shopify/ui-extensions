import * as Polaris from '@shopify/polaris';
import Button from './Button/Button';
import Card from './Card/Card';
import Checkbox from './Checkbox/Checkbox';
import ChoiceList from './ChoiceList/ChoiceList';
import FormGroup from './Form/Form';
import List from './List/List';
import TextField from './TextField/TextField';

const StackItem = Polaris.Stack.Item;

const components = {
  Button,
  Checkbox,
  ChoiceList,
  TextField,
  List,
  Card,
  FormGroup,
  StackItem,
};

for (var c in Polaris) {
  if (!components[c]) components[c] = Polaris[c];
}

export default components;
