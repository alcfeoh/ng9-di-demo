import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class ProvidedInAnyService {

  static i = 0;

  constructor() {
    ProvidedInAnyService.i++;
    console.log('Service provided in ANY - ID = ' + ProvidedInAnyService.i);
  }
}
