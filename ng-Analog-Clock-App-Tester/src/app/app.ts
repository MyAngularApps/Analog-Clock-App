import { Component, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnalogClock } from '@myangularapps/analog-clock';

@Component({
  selector: 'app-root',
  imports: [AnalogClock, RouterOutlet],
  schemas: [NO_ERRORS_SCHEMA],
  template: `<analog-clock [options]="{ size: 200 }"></analog-clock>`,
})
export class App {
  protected readonly title = signal('ng-Analog-Clock-App-Tester');
}
