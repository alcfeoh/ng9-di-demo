import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class ProvidedInPlatformService {

  static i = 0;

  constructor() {
    ProvidedInPlatformService.i++;
    console.log('Service provided in PLATFORM - ID = ' + ProvidedInPlatformService.i);
  }
}
