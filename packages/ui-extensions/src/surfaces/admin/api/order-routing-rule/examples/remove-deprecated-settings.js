const {applyMetafieldsChange, data} = useApi(TARGET);

const deprecatedKeys = ['old_setting', 'legacy_config'];

const changes = deprecatedKeys.map((key) => ({
  type: 'removeMetafield',
  namespace: 'routing',
  key,
}));

applyMetafieldsChange(changes);

console.log('Rule priority:', data.rule.priority);
console.log('Remaining settings:', data.rule.metafields.length);
