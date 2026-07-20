import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
  <div class="h-50"></div>

    <div class="min-h-screen p-20">
      <h1 class="text-6xl font-bold">contact</h1>
      <p class="mt-6 text-neutral-600">
        My contact info will be here.
      </p>
    </div>
  `
})
export class contactPage {}