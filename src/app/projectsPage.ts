import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <div class="min-h-screen p-20">
      <h1 class="text-6xl font-bold">Projects</h1>
      <p class="mt-6 text-neutral-600">
        My acting projects will go here.
      </p>
    </div>
  `
})
export class projectsPage {}