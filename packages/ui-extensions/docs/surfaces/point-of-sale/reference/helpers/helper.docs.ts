// for use with `definitions` in a reference entity schema.
export const CUSTOM_DATA = (type: string, title?: string) => ({
  title: title ?? type,
  description: 'The data object provided to this extension target.',
  // exact type name auto-populates the properties.
  type,
});
