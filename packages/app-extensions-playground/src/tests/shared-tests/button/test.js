const componentRefId = window.testUtils.renderLisp(`(Button (# "label" "Click" "onClick" (testClick)))`);
window.testUtils.expectComponentToExist(componentRefId, 'Button');
window.testUtils.expectComponentToHaveProperty(componentRefId, 'Button', 'label', 'Click');
window.testUtils.expectButtonToTriggerActionWhenClicked(componentRefId, 'Button');
