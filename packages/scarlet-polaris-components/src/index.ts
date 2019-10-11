import * as Polaris from "@shopify/polaris";
import Button from "./button";
import Card from "./card";
// import Chart from "./chart";
import Checkbox from "./checkbox";
import ChoiceList from "./choice-list";
import FormGroup from "./form-group";
import Label from "./label";
import Select from "./select";
import Textfield from "./textfield";

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

for(var c in Polaris) {
  if(!components[c]) components[c] = Polaris[c];
}

export default components;
