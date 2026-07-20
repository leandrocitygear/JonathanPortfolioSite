import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template:`
  <div class="min-h-screen bg-[#fafafa] text-neutral-900">

    <!-- NAV -->

    <header class="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-white/70 backdrop-blur-xl">

      <h1 class="text-xl font-semibold tracking-widest uppercase">
        Jonathan Donatiu
      </h1>

      <nav class="border-red-500 flex ">
        <button routerLink="/" class="rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2">
          Home
        </button>
        <button routerLink="/projects" class="rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2">
          Projects
        </button>
        <button routerLink="/gallery" class="rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2">
          Gallery
        </button>
        <button routerLink="/contact" class="rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2">
          Contact
        </button>
      </nav>

    </header>

    <router-outlet></router-outlet>

    <!-- CONTACT -->

    <footer class="py-24 text-center">

      <h2 class="text-6xl font-bold">
        Let's Create Something
      </h2>

      <p class="mt-5 text-gray-500">
        Film • Television • Commercials
      </p>

    </footer>

  </div>

`
})
export class App {
  protected readonly title = signal('JonathanPortfolioSite');
}
