import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import * as components from '../../docs/shared/components';

export function setRelatedUrl<T extends Partial<ReferenceEntityTemplateSchema>>(
  shared: T,
  type: 'admin-extensions' | 'app-home' = 'admin-extensions',
) {
  shared.related = shared.related?.map((item) => {
    const component = (components as Record<string, any>)[item.name];

    if (!component) {
      return item;
    }

    const path = [component.category, component.subCategory]
      .map(kebabCase)
      .filter(Boolean)
      .join('/');

    return {
      ...item,
      url: `/docs/api/${type}/${path}/${item.url}`,
    };
  });

  return shared;
}

function kebabCase(str = '') {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}
