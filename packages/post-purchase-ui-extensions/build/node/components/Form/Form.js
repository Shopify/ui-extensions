"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _core = require("@remote-ui/core");

/**
 * The `Form` component should be used to wrap one or more form controls.
 * This component provides an "implicit submit" behavior, where buyers can
 * submit the form from any input by pressing "enter" on their keyboards. This
 * behavior is widely expected, and should be respected as often as possible.
 *
 * Unlike an HTML `form` element, this component does not support configuring
 * the descendant fields to be submitted via HTTP automatically. Instead, you
 * must provide an `onSubmit` callback that will perform the necessary HTTP
 * requests in JavaScript.
 */
const Form = (0, _core.createRemoteComponent)('Form');
exports.Form = Form;