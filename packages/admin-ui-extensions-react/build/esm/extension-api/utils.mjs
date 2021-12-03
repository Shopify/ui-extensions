import { createContext, useContext } from 'react';
export var ExtensionApiContext = /*#__PURE__*/createContext(null);
export function useExtensionApi() {
  var api = useContext(ExtensionApiContext);

  if (api === null) {
    throw new Error('No extension api found');
  }

  return api;
}