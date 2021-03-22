import {Component, OnDestroy, OnInit} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import { Configuration } from './shared/configurations';
import { AbstractLocalizationService } from './shared/services';

@Component({
  selector: 'qa-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'ancillaries-development';
  protected subscriptions: Subscription[] = [];
  loading: boolean;

  constructor(public configuration: Configuration,
              private router: Router,
              private localizationService: AbstractLocalizationService) {

    this.localizationService.configure();
    this.localizationService.useLanguage('en');
  }

  ngOnInit() {
    this.subscriptions.push(this.router.events.subscribe((event) => this.setLoadingIndicator(event)));
    this.subscriptions.push(this.router.events.pipe(filter((event) =>
    event instanceof NavigationEnd)).subscribe((event) => window.scrollTo(0, 0)));
  }

  setLoadingIndicator(event: Event) {
    if (event instanceof NavigationStart) {
      this.loading = true;
    } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
      this.loading = false;
    }
  }

  ngOnDestroy() {
    // clean the subscriptions
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
