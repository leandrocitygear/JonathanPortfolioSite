import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LightboxComponent } from "./lightboxComponent";
import { LightboxVideoComponent } from "./lightboxVideoComponent";

@Component({
    selector: 'app-homePage',
    standalone: true,
    imports: [RouterLink, LightboxComponent, LightboxVideoComponent],
    template: `
<div class="min-h-screen bg-[#fafafa] text-neutral-900">

<!-- HERO -->

<section class="pt-32 px-4 sm:px-8 lg:px-18 max-w-7xl mx-auto">

  <div class="flex flex-col lg:flex-row gap-16 items-center">

  <!-- LEFT -->

  <div class="w-full lg:w-1/2 min-w-0">

    <p class="text-sm uppercase tracking-[6px] text-neutral-500">
      Actor / Performer
    </p>

    <h2 class="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] break-all">

      Creating

      <br>

      <span class="text-neutral-400">
        unforgettable
      </span>

      <br>

      characters.

    </h2>

    <p class="mt-8 max-w-xl text-lg text-neutral-600">
      Actor specializing in film,
      television and stage.
      Focused on authentic performances
      and powerful storytelling.
    </p>

    <p class="mt-8 max-w-xl text-lg text-neutral-600">
      Name: Best Actor in a Short Film, Ponte Los Cortos Festival 2020
    </p>

    <div class="flex flex-wrap gap-5 mt-10">

      <button
        class="px-8 py-4 rounded-full bg-black text-white hover:scale-105 transition cursor-pointer hover:bg-gradient-to-r from-red-500"
        (click)="lightboxVideo.open('https://www.youtube.com/embed/JJ5yZuZezU8?si=Llv6Ur61QDJRa3bb')"
      >
        Watch Reel
      </button>

      <button
        routerLink="/projects"
        class="px-8 py-4 rounded-full cursor-pointer border hover:scale-105 transition hover:bg-gradient-to-l from-purple-500 hover:bg-black hover:text-white"
      >
        View Work
      </button>

    </div>

  </div>


  <!-- IMAGE -->

  <div class="relative w-full lg:w-1/2 min-w-0">

    <div class="absolute inset-0 bg-black/10 rounded-3xl blur-3xl"></div>

    <img
      src="./images/home_img.jpg"
      (click)="lightbox.open('./images/home_img.jpg')"
      class="relative rounded-3xl shadow-2xl w-full max-w-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
    >

  </div>

  </div>

</section>

<!-- STATS -->

<section class="px-8 max-w-7xl mx-auto py-24">

  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">

    <div>

      <h3 class="text-5xl font-bold">
        25+
      </h3>

      <p class="text-gray-500">
        Projects
      </p>

    </div>

    <div>

      <h3 class="text-5xl font-bold">
        2
      </h3>

      <p class="text-gray-500">
        Films
      </p>

    </div>

    <div>

      <h3 class="text-5xl font-bold">
       1
      </h3>

      <p class="text-gray-500">
        Awards  
      </p>

    </div>

    <div>

      <h3 class="text-5xl font-bold">
        7+
      </h3>

      <p class="text-gray-500">
        Years Acting
      </p>

    </div>

  </div>

</section>

<!-- FEATURED -->

<section class="bg-white rounded-t-[50px] py-24 px-8">

  <div class="max-w-7xl mx-auto">

    <h2 class="text-5xl font-bold mb-12">
      Selected Work
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8">

      <div class="group">

        <img src="/projectIMG/p1.jpg" (click)="lightbox.open('/projectIMG/p1.jpg')" class="rounded-3xl group-hover:scale-105 transition duration-500 w-80 sm:w-100 h-100 sm:h-125 shadow-2xl/50 cursor-pointer">

        <div class="mt-5">

          <h3 class="text-2xl font-bold">
              Capicú
          </h3>

          <p class="text-gray-500">
              Supporting Actor • 2025
          </p>

        </div>

      </div>

      <div class="group">

        <img src="/projectIMG/p2.jpg" (click)="lightbox.open('/projectIMG/p2.jpg')" class="rounded-3xl group-hover:scale-105 transition duration-500 w-80 sm:w-100 h-100 sm:h-125 shadow-2xl/50 cursor-pointer">

        <h3 class="mt-5 text-2xl font-bold">
            Canvas
        </h3>

        <p class="text-gray-500">
            Lead Actor • 2020
        </p>

      </div>

      <div class="group">

        <img src="/projectIMG/p3.jpg" (click)="lightbox.open('/projectIMG/p3.jpg')" class="rounded-3xl group-hover:scale-105 transition duration-500 w-80 sm:w-100 h-100 sm:h-125 shadow-2xl/50 cursor-pointer">

        <h3 class="mt-5 text-2xl font-bold">
            LASESIÓN
        </h3>

        <p class="text-gray-500">
            Lead Actor • Director • 2021
        </p>

      </div>

    </div>

  </div>

</section>

<!-- SHOWREEL -->

<section class="px-8 py-24 max-w-7xl mx-auto">

  <div class="bg-black rounded-[40px] p-12 text-white flex flex-col md:flex-row justify-between items-center bg-gradient-to-tr from-orange-500/35">

    <div>

      <h2 class="text-5xl font-bold">
        Watch Showreel
      </h2>

      <p class="mt-4 text-gray-400">
        A collection of recent performances.
      </p>

    </div>

    <button class="mt-8 md:mt-0 px-10 py-5 rounded-full bg-white text-black cursor-pointer hover:scale-105 transition hover:bg-gradient-to-l hover:from-orange-500 hover:bg-black hover:text-white"
    (click)="lightboxVideo.open('https://www.youtube.com/embed/JJ5yZuZezU8?si=Llv6Ur61QDJRa3bb')"
    >
      Play Video
    </button>

  </div>

</section>

</div>

<app-lightbox #lightbox></app-lightbox>
<app-lightboxVideo #lightboxVideo></app-lightboxVideo>
    `
})
export class homePage {}