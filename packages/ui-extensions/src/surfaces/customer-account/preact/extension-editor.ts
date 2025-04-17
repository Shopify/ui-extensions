import type {Editor} from '../api';

import {useApi} from './api';

/**
 * Returns information about the editor where the extension is being rendered.
 */
export function useExtensionEditor(): Editor | undefined {
  return useApi().extension.editor;
}
