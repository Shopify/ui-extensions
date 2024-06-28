import '@remote-dom/core/polyfill';
import {REMOTE_ID} from '@remote-dom/core';
// @ts-expect-error - for some reason TS can’t pick this up
import type {RemoteNodeSerialization} from '@remote-dom/core';
import {
  RemoteRootElement,
  RemoteFragmentElement,
  createRemoteElement,
} from '@remote-dom/core/elements';

import type {
  RenderExtensionConnection,
  RenderExtension,
  RenderExtensionWithElement,
} from '../extension';

type OverrideMapping = Map<string, string>;

const Box = createRemoteElement({
  properties: {},
});

const Text = createRemoteElement({
  properties: {},
});

const Button = createRemoteElement({
  properties: {
    onPress: {event: true},
  },
});

const BlockStack = createRemoteElement({
  properties: {
    accessibilityLabel: {},
    accessibilityRole: {},
    background: {},
    border: {},
    borderRadius: {},
    borderWidth: {},
    cornerRadius: {},
    display: {},
    id: {},
    inlineAlignment: {},
    maxBlockSize: {},
    maxInlineSize: {},
    minBlockSize: {},
    minInlineSize: {},
    overflow: {},
    padding: {},
    spacing: {},
  },
});

const Checkbox = createRemoteElement({
  properties: {
    accessibilityLabel: {type: String},
    checked: {type: Boolean},
    disabled: {type: Boolean},
    error: {type: String},
    id: {type: String},
    name: {type: String},
    onChange: {event: true},
    toggles: {type: String},
    value: {type: Boolean},
  },
});

const TextField = createRemoteElement({
  properties: {
    accessibilityDescription: {type: String},
    accessory: {type: String}, // TO-DO: add a slot
    autocomplete: {type: Boolean}, // simplification from original type
    controlledValue: {type: String},
    disabled: {type: Boolean},
    error: {type: String},
    icon: {type: String}, // simplification from original type
    id: {type: String},
    label: {type: String},
    maxLength: {type: Number},
    multiline: {type: Number}, // simplification from original type
    name: {type: String},
    onBlur: {event: true},
    onChange: {event: true},
    onFocus: {event: true},
    onInput: {event: true},
    prefix: {type: String},
    readonly: {type: Boolean},
    required: {type: Boolean},
    suffix: {type: String},
    type: {type: String},
    value: {type: String}, // simplified because generics aren't supported, and values are treated as string
  },
});

export interface ExtensionRegistrationFunction<ExtensionTargets> {
  <Target extends keyof ExtensionTargets>(
    target: Target,
    implementation: ExtensionTargets[Target],
  ): ExtensionTargets[Target];
}

export interface ExtensionRegistrationFunctionWithRoot<ExtensionTargets> {
  <Target extends keyof ExtensionTargets>(
    target: Target,
    implementation: ExtensionTargets[Target] extends RenderExtension<infer Api>
      ? RenderExtensionWithElement<Api>
      : ExtensionTargets[Target],
  ): ExtensionTargets[Target];
}

const ELEMENT_MAPPING = new Map<string, string>([
  ['ui-block-stack', 'BlockStack'],
  ['ui-box', 'Box'],
  ['ui-button', 'Button'],
  ['ui-checkbox', 'Checkbox'],
  ['ui-text', 'Text'],
  ['ui-text-field', 'TextField'],
]);

// Registering the custom components
customElements.define('ui-block-stack', BlockStack);
customElements.define('ui-block-stack', Box);
customElements.define('ui-button', Button);
customElements.define('ui-checkbox', Checkbox);
customElements.define('ui-text', Text);
customElements.define('ui-text-field', TextField);

customElements.define('remote-root', RemoteRootElement);
customElements.define('remote-fragment', RemoteFragmentElement);

globalThis.REMOTE_DOM_ELEMENT_MAPPING = ELEMENT_MAPPING;

declare global {
  interface HTMLElementTagNameMap {
    'remote-root': InstanceType<typeof RemoteRootElement>;
    'remote-fragment': InstanceType<typeof RemoteFragmentElement>;

    'ui-block-stack': InstanceType<typeof BlockStack>;
    'ui-box': InstanceType<typeof Box>;
    'ui-button': InstanceType<typeof Button>;
    'ui-checkbox': InstanceType<typeof Checkbox>;
    'ui-text': InstanceType<typeof Text>;
    'ui-text-field': InstanceType<typeof TextField>;
  }

  // eslint-disable-next-line no-var, @shopify/prefer-module-scope-constants
  var REMOTE_DOM_ELEMENT_MAPPING: Map<string, string>;
}

/**
 * This function takes an extension function that is expecting a `RemoteRoot` as its
 * first argument, and returns a new function that accepts a `RemoteChannel` instead.
 * This is a convenience that allows the raw UI extension API to only expose the simpler
 * `RemoteChannel` type, while allowing the extension to use the more powerful `RemoteRoot`,
 * provided by a version of `@remote-ui/core` that the extension controls.
 */
export function createExtensionRegistrationFunction<
  ExtensionTargets,
>(options?: {
  overrideMapping?: OverrideMapping;
}): ExtensionRegistrationFunctionWithRoot<ExtensionTargets> {
  const extensionWrapper: ExtensionRegistrationFunctionWithRoot<
    ExtensionTargets
  > = (target, implementation) => {
    function normalizeNode(child: RemoteNodeSerialization): any {
      switch (child.type) {
        case 1: {
          return {
            id: child.id,
            kind: 1,
            type:
              options?.overrideMapping?.get(child.element) ??
              ELEMENT_MAPPING.get(child.element),
            props: child.properties ?? {},
            children: child.children.map(normalizeNode),
          };
        }
        case 3: {
          return {id: child.id, kind: 2, text: child.data};
        }
        default: {
          throw new Error(`Unsupported child: ${child.type}`);
        }
      }
    }

    async function extension(...args: any[]) {
      // Rendering extensions have two arguments. Non-rendering extensions don’t have
      // a `RemoteChannel` that needs to be normalized, so we can just pass the arguments
      // through.
      if (args.length === 1) {
        return (implementation as any)(...args);
      }

      const [connection, api] = args as [RenderExtensionConnection, any];

      const root = document.createElement('remote-root');

      let mounted = false;
      const queued: Parameters<typeof connection.channel>[] = [];

      const send: typeof connection.channel = ((...args: any[]) => {
        if (mounted) {
          return connection.channel(...(args as [any, ...any[]]));
        } else {
          queued.push(args as any);
          return Promise.resolve();
        }
      }) as any;

      root.connect({
        // @ts-expect-error - for some reason TS can’t pick this up
        mutate(records) {
          for (const record of records) {
            switch (record[0]) {
              // insert child
              case 0: {
                const [, id, child, index] = record;
                send(
                  1,
                  normalizeId(id, root),
                  index,
                  normalizeNode(child),
                  false,
                );
                break;
              }
              // remove child
              case 1: {
                const [, id, index] = record;
                send(2, normalizeId(id, root), index);
                break;
              }
              // update text
              case 2: {
                const [, id, text] = record;
                send(3, id, text);
                break;
              }
              // update property
              case 3: {
                const [, id, property, value] = record;
                send(4, normalizeId(id, root)!, {[property]: value});
                break;
              }
            }
          }
        },
        // Remote DOM provides a `call` method that allows instance
        // methods to be invoked over the bridge. remote-ui has no
        // equivalent, and therefore none of our components depend on
        // this feature, so we just no-op it here.
        call() {},
      });

      let renderResult = (implementation as any)(root, api);

      if (
        typeof renderResult === 'object' &&
        renderResult != null &&
        'then' in renderResult
      ) {
        renderResult = await renderResult;
      }

      mounted = true;
      connection.channel(0, []);
      for (const queuedMessage of queued) {
        connection.channel(...(queuedMessage as [any, ...any[]]));
      }

      return renderResult;
    }

    (globalThis as any).shopify?.extend(target, extension);

    return extension as any;
  };

  return extensionWrapper;
}

function normalizeId(id: string, root: any) {
  return id === root[REMOTE_ID] ? undefined : id;
}
