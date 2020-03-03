import { Component } from '@angular/core';
import {ProvidedInRootService} from './provided-in-root.service';
import {ProvidedInPlatformService} from './provided-in-platform.service';
import {ProvidedInAnyService} from './some/provided-in-any.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng9-di-demo';

  constructor(public rootService: ProvidedInRootService,
              public platformService: ProvidedInPlatformService,
              public anyService: ProvidedInAnyService) {
  }
}
