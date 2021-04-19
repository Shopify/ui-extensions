import React, {createContext, useContext} from 'react';

const GlobalLocale = createContext<string>('en');

export interface GlobalLocaleProps {
  locale: string;
  children?: React.ReactNode;
}

export const GlobalLocaleProvider = ({locale, children}: GlobalLocaleProps) => {
  return <GlobalLocale.Provider value={locale}>{children}</GlobalLocale.Provider>;
};

export const useGlobalLocale = () => {
  return useContext(GlobalLocale);
};
