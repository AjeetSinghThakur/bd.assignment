import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { WebNotificationService } from './web-notification.service';

@Injectable({
  providedIn: 'root',
  useFactory: notificationFactory,
  deps: [ToasterService],
})
export abstract class AbstractNotificationService implements INotificationService {
  abstract showError(title: string, message: string, icon?: string): void;
  abstract showInfo(title: string, message: string, icon?: string): void;
  abstract showWait(title: string, message: string, icon?: string): void;
  abstract showSuccess(title: string, message: string, icon?: string): void;
  abstract showWarning(title: string, message: string, icon?: string): void;
}
export interface INotificationService {
  showError(title: string, message: string, icon?: string): void;
  showInfo(title: string, message: string, icon?: string): void;
  showWait(title: string, message: string, icon?: string): void;
  showSuccess(title: string, message: string, icon?: string): void;
  showWarning(title: string, message: string, icon?: string): void;
}

export function notificationFactory(toasterService: ToasterService): AbstractNotificationService {
  return new WebNotificationService(toasterService);
}
