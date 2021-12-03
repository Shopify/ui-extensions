import { createRemoteComponent } from '@remote-ui/core';
/**
 * Info:
 * Use to convey general information or actions that aren’t critical or tied to
 * a particular action.
 *
 * Success:
 * Use rarely, only if you need additional visual confirmation that a
 * non-standard action has been completed successfully, for example adding an
 * item to an order as an upsell.
 *
 * Warning:
 * Use to display information that needs attention or that customers need to
 * take action on. Seeing these banners can be stressful for customers so be
 * cautious about using them. Does not block progress to next step.
 *
 * Critical:
 * Use to communicate problems that have to be resolved immediately for
 * customers to complete a task. For example, using a different payment method
 * if card details couldn't be processed. Seeing these banners can be stressful
 * for customers so be cautious about using them.
 */

/**
 * A Banner is used to give feedback and is typically displayed at the top of a
 * page or section.
 */
export var Banner = createRemoteComponent('Banner');