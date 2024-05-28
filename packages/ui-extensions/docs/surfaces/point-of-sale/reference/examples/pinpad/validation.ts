const onPinSubmit = (pin: number[]): Promise<PinValidationResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isPinValid =
        pin.length === 6 && pin.every((digit, index) => digit === index + 1);
      const result: PinValidationResult = isPinValid ? 'accept' : 'reject';
      resolve(result);
    }, 1000);
  });
};
