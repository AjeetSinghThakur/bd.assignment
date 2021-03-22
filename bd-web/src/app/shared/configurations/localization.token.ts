import { InjectionToken } from '@angular/core';
import { LocalizationConfiguration } from './localization';

// Default configuration providers for the application.
export const LOCALIZATION_CONFIGURATION_TOKEN = new InjectionToken<LocalizationConfiguration>('Localization Configuration injection token');
