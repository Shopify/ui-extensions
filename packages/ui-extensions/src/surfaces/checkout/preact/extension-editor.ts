import type {Editor} from '../api/standard/standard';

import {useApi} from './api';

/**
 * Returns information about the editor where the extension is being rendered.
 * @publicDocs
 */
export function useExtensionEditor(): Editor | undefined {
  return useApi().extension.editor;
}
