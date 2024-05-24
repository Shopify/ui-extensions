import React, { useState } from "react";
import {
  TextArea,
  Screen,
  ScrollView,
  Navigator,
  reactExtension,
  Text,
} from "@shopify/ui-extensions-react/point-of-sale";

const SmartGridModal = () => {
  const [comment, setComment] = useState("");

  return (
    <Navigator>
      <Screen name="TextArea" title="Comment Input Example">
        <ScrollView>
          <TextArea
            label="Comments"
            rows={4}
            placeholder="Input your comments here"
            value={comment}
            onChange={setComment}
          />
          <Text>{comment}</Text>
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension("pos.home.modal.render", () => (
  <SmartGridModal />
));
