import { Injectable } from '@angular/core';

import { Angulartics2 } from 'angulartics2';

declare var mt: Function;

@Injectable({ providedIn: 'root' })
export class Angulartics2Mautic {

  constructor(
    protected angulartics2: Angulartics2,
  ) {
    
  }

  startTracking() {
    this.angulartics2.pageTrack
      .pipe(this.angulartics2.filterDeveloperMode())
      .subscribe((x) => this.pageTrack(x.path));
    this.angulartics2.eventTrack
      .pipe(this.angulartics2.filterDeveloperMode())
      .subscribe((x) => this.eventTrack(x.action, x.properties));
  }

  /**
   * Track pageview
   * @param path 
   */
  pageTrack(path: string) {
    mt('send', 'pageview');
  }

  /**
   * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
   *
   * @param action associated with the event
   */
  eventTrack(action: string, properties: any) {
    properties = properties || {};

    mt('send', 'pageview', properties);
  }

}
