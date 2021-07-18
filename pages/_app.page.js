import React, { useState, useMemo } from 'react';

// i18n
import i18next from 'i18next';
import localeResources from 'locales';

// antd
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import zhCN from 'antd/lib/locale-provider/zh_CN';

// context
import AppContext from 'components/AppContext';

// styles
import 'styles/vars.css'
import 'styles/global.css'

// i18n
const defaultLocale = 'en_GB'; // en_GB, zh_CN
i18next.init({
  lng: defaultLocale,
  resources: localeResources,
});

function MyApp({ Component, pageProps, ...restProps }) {
  // locale
  const [locale] = useState(defaultLocale);

  // context value
  const contextValue = useMemo(() => ({
    locale,
  }), [locale]);

  // antd locale
  const antdLocaleMap = {
    en_GB: enUS,
    zh_CN: zhCN,
  };
  const antdLocale = antdLocaleMap[locale] || zhCN;

  return (
    <AppContext.Provider value={contextValue}>
      <ConfigProvider locale={antdLocale}>
        <Component {...pageProps} />
      </ConfigProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
