import { Injectable, NgZone } from '@angular/core';
import { WindowApi } from 'shared';

@Injectable({
  providedIn: 'root',
})
export class ElectronIpcService {
  private _api: WindowApi;

  constructor(private zone: NgZone) {
    if (window && (window as any).api) {
      try {
        this._api = (window as any).api;
      } catch (e) {
        throw e;
      }
      console.log('Preloader API has been loaded successfully');
    } else {
      console.warn('Preloader API is not loaded');
    }
  }

  public receive(channel: string, func: (...data) => void): void {
    if (this._api) {
      this._api.receive(channel, (...data) => {
        console.log(`Received from main process channel [${channel}]`, data);

        // Next code might run outside of Angular zone and therefore Angular
        // doesn't recognize it needs to run change detection
        // Further details on SO : https://stackoverflow.com/a/49136353/11480016
        this.zone.run(() => {
          func(...data);
        });
      });
    }
  }

  public send(channel: string, ...data): void {
    if (this._api) {
      console.log(`Sending to main process channel [${channel}]`, data);
      this._api.send(channel, ...data);
    }
  }
}
