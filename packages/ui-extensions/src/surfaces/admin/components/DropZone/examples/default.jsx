<s-drop-zone
  label="Upload"
  accessibilityLabel="Upload image of type jpg, png, or gif"
  accept=".jpg,.png,.gif"
  multiple
  onInput={(event) => console.log('onInput', event.currentTarget?.value)}
  onChange={(event) => console.log('onChange', event.currentTarget?.value)}
  onDropRejected={(event) => console.log('onDropRejected', event.currentTarget?.value)}
 />