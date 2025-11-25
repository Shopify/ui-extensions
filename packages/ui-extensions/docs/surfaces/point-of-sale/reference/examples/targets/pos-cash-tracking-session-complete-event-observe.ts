import {eventExtension} from '@shopify/ui-extensions/point-of-sale';

export default eventExtension(
  'pos.cash-tracking-session-complete.event.observe',
  (eventData) => {
    // Access session data from the event
    const {cashTrackingSessionComplete} = eventData;

    // Log session completion for audit trails
    console.log('Cash tracking session completed:', {
      sessionId: cashTrackingSessionComplete.id,
      openingTime: new Date(cashTrackingSessionComplete.openingTime).toISOString(),
      closingTime: new Date(cashTrackingSessionComplete.closingTime).toISOString(),
    });

    // Example: Generate end-of-shift report
    // fetch('/api/cash-sessions/complete', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     sessionId: cashTrackingSessionComplete.id,
    //     openingTime: cashTrackingSessionComplete.openingTime,
    //     closingTime: cashTrackingSessionComplete.closingTime,
    //   }),
    // });

    // Return success (no errors)
    return {};
  },
);

