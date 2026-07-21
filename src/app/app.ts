import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template:`
  <div class="min-h-screen bg-[#fafafa] text-neutral-900">

    <!-- NAV -->

    <header class="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-white/70 backdrop-blur-xl">

      <h1 routerLink="/" class="text-xl font-semibold tracking-widest uppercase bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:bg-gradient-to-l from-red-500 via-yellow-500 to-purple-500">
          Jonathan Donatiu
      </h1>

      <nav class="flex">
        <button routerLink="/" routerLinkActive="bg-gradient-to-br from-red-500" [routerLinkActiveOptions]="{ exact: true }" class="rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2 cursor-pointer hover:bg-gradient-to-br hover:from-red-500">
          Home
        </button>
        <button routerLink="/projects" routerLinkActive="bg-gradient-to-bl from-yellow-500" [routerLinkActiveOptions]="{ exact: true }" class="rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2 cursor-pointer hover:bg-gradient-to-bl hover:from-yellow-500">
          Projects
        </button>
        <button routerLink="/gallery" routerLinkActive="bg-gradient-to-tr from-purple-500" [routerLinkActiveOptions]="{ exact: true }" class="rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2 cursor-pointer hover:bg-gradient-to-tr hover:from-purple-500">
          Gallery
        </button>
        <button routerLink="/contact" routerLinkActive="bg-gradient-to-tl from-green-500" [routerLinkActiveOptions]="{ exact: true }" class="rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2 cursor-pointer hover:bg-gradient-to-tl hover:from-green-500">
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
