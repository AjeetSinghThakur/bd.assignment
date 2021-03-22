import { environment } from '@env/environment';

export interface LocalizationConfiguration {
  supportedLocales: string[];
  rtlLanguages: string[];
  bundlesOutputPath: string;
  fallbackLanguage: string;
}

export const DEFAULT_LOCALIZATION_CONFIGURATION: LocalizationConfiguration = {
  supportedLocales: [],
  rtlLanguages: ['ar', 'he'],
  bundlesOutputPath: environment.bundlesOutputPath,
  fallbackLanguage: 'en',
};



