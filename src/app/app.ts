import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template:`
  <div class="min-h-screen bg-[#fafafa] text-neutral-900">

    <!-- NAV -->

    <header class="relative md:fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-white/70 backdrop-blur-xl">

      <h1 routerLink="/" class="text-xl font-semibold tracking-widest uppercase bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:bg-gradient-to-l from-red-500 via-yellow-500 to-purple-500">
          Jonathan Donatiu
      </h1>

      <button (click)="toggleMenu()" class="md:hidden rounded-xl px-4 py-3 bg-black text-white cursor-pointer">
          ☰
      </button>

      <!-- MOBILE NAV -->
      @if (menuOpen) {

        <nav class="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl p-6 flex flex-col gap-4 md:hidden">

      <button
        routerLink="/"
        (click)="menuOpen = false"
        class="rounded-full px-6 py-3 bg-black text-white bg-gradient-to-br from-red-500/75 to-black"
      >
        Home
      </button>

      <button
        routerLink="/projects"
        (click)="menuOpen = false"
        class="rounded-full px-6 py-3 bg-black text-white bg-gradient-to-bl from-yellow-500/75 to-black"
      >
        Projects
      </button>

      <button
        routerLink="/gallery"
        (click)="menuOpen = false"
        class="rounded-full px-6 py-3 bg-black text-white bg-gradient-to-tr from-purple-500/75 to-black"
      >
        Gallery
      </button>

      <button
        routerLink="/contact"
        (click)="menuOpen = false"
        class="rounded-full px-6 py-3 bg-black text-white bg-gradient-to-tl from-green-500/75 to-black"
      >
        Contact
      </button>

    </nav>

      }

      <!-- DESKTOP NAV -->
      <nav class="hidden md:flex">
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

    <footer class="py-24 px-8 text-center">

      <h2 class="text-4xl sm:text-6xl font-bold">
        Let's Create Something
      </h2>

      <p class="mt-5 text-gray-500">
        Film • Television • Commercials
      </p>

      <a href="mailto:johnyboyr8@gmail.com" class="mt-5 text-gray-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-black hover:bg-clip-text hover:text-transparent">
        email: johnyboyr8@gmail.com
      </a>

      <a href="tel:+17876793356" class="mt-5 text-gray-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-black hover:bg-clip-text hover:text-transparent">
        Tel: 787-679-3356
      </a>
      <div>

      <a
        href="https://leandrodelacruz.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="group mt-5 inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-300"
        >

        <span>Designed & developed by</span>

        <span
        class="font-medium text-neutral-700 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-black group-hover:bg-clip-text group-hover:text-transparent">

          Leandro De la cruz

          </span>

          <span class="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
        </div>


    </footer>

  </div>

`
})
export class App {
  protected readonly title = signal('JonathanPortfolioSite');

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
