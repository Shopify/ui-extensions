import { extend, ResourcePicker } from '@shopify/admin-ui-extensions';
var mockData = [{
  accessibilityLabel: 'item 1 a11y',
  badges: [{
    id: 'badge1',
    content: 'done',
    progress: 'incomplete',
    status: 'success'
  }, {
    id: 'badge2',
    content: 'warning',
    progress: 'complete',
    status: 'attention'
  }],
  id: '3',
  media: {
    kind: 'Thumbnail',
    source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
    alt: 'Black choker necklace'
  },
  onPress: function onPress() {
    return console.log('onPress');
  },
  name: 'item 1',
  options: [{
    accessibilityLabel: 'inner item 1',
    badges: [{
      id: 'badge1',
      content: 'done',
      progress: 'incomplete',
      status: 'success'
    }, {
      id: 'badge2',
      content: 'warning',
      progress: 'complete',
      status: 'attention'
    }],
    id: '31',
    onPress: function onPress() {
      return console.log('onPress');
    },
    name: 'inner item 1',
    media: {
      kind: 'Thumbnail',
      source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
      alt: 'Black choker necklace'
    }
  }, {
    accessibilityLabel: 'inner item 2',
    id: '32',
    onPress: function onPress() {
      return console.log('onPress');
    },
    name: 'inner item 2',
    media: {
      kind: 'Thumbnail',
      source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
      alt: 'Black choker necklace'
    }
  }]
}, {
  accessibilityLabel: 'item 2 a11y',
  id: '4',
  media: {
    kind: 'Thumbnail',
    source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
    alt: 'Black choker necklace'
  },
  onPress: function onPress() {
    return console.log('onPress');
  },
  name: 'item 2',
  options: [{
    accessibilityLabel: 'inner item 2 a11y',
    id: '41',
    onPress: function onPress() {
      return console.log('onPress');
    },
    name: 'inner item 2',
    media: {
      kind: 'Thumbnail',
      source: 'https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg',
      alt: 'Black choker necklace'
    }
  }]
}];
extend('Playground', function (root) {
  root.createComponent(ResourcePicker, {
    items: mockData,
    maxSelectable: 1,
    onChange: function onChange() {
      return 'onChange';
    },
    onClose: function onClose() {
      return 'onClose';
    },
    primaryAction: {
      content: 'Add',
      onAction: function onAction() {
        return console.log('primary action');
      }
    },
    selectedItems: [{
      id: 'item1',
      options: [{
        id: 'option1a'
      }]
    }],
    secondaryActions: [{
      content: 'Cancel',
      onAction: function onAction() {
        return 'onClose';
      }
    }],
    title: "Resource Picker",
    visible: true
  });
  root.mount();
});