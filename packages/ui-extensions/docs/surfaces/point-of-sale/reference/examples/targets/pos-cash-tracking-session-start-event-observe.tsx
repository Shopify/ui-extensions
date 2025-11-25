import {reactEventExtension} from '@shopify/ui-extensions-react/point-of-sale';

export default reactEventExtension(
  'pos.cash-tracking-session-start.event.observe',
  (eventData) => {
    // Access session data from the event
    const {cashTrackingSessionStart} = eventData;

    // Log session start for compliance or security
    console.log('Cash tracking session started:', {
      sessionId: cashTrackingSessionStart.id,
      openingTime: new Date(cashTrackingSessionStart.openingTime).toISOString(),
    });

    // Example: Send session start notification to backend
    // fetch('/api/cash-sessions/start', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     sessionId: cashTrackingSessionStart.id,
    //     openingTime: cashTrackingSessionStart.openingTime,
    //   }),
    // });

    // Return success (no errors)
    return {};
  },
);

