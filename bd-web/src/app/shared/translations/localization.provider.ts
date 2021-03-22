import { FactoryProvider } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { LOCALIZATION_CONFIGURATION_TOKEN, LocalizationConfiguration } from '../configurations';
import { TranslationsLoader } from './translations-loader';

export const translateLoaderProvider: FactoryProvider = {
  provide: TranslateLoader,
  useFactory: createTranslateLoader,
  deps: [LOCALIZATION_CONFIGURATION_TOKEN]
};

export function createTranslateLoader(localizationConfiguration: LocalizationConfiguration) {
  return new TranslationsLoader(localizationConfiguration);
}


