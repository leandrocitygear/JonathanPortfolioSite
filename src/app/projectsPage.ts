import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LightboxComponent } from "./lightboxComponent";


@Component({
  selector: 'app-projects',
  imports: [LightboxComponent],
  standalone: true,

  template: `

  <div class="min-h-screen bg-[#fafafa] text-neutral-900 pt-30">
    
    <section class="w-full flex flex-col px-4 items-center">

      @for (project of projects; track project.title) {

        <article
          class="w-full max-w-screen-2xl flex flex-col lg:flex-row gap-10 items-center p-6 md:p-10 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-2xl/50 transition duration-500 my-10 overflow-hidden"
          [class]="project.hoverColor"
        >

          <!-- PROJECT IMAGE -->
          <div class="overflow-hidden rounded hover:scale-105 transition duration-700 h-100 w-80 sm:w-120 sm:h-160">

            <img
              [src]="project.image"
              (click)="lightbox.open(project.image)"
              [alt]="project.title + ' project'"
              class="w-80 sm:w-120 sm:h-160 h-100 cursor-pointer"
            />

          </div>


          <!-- PROJECT INFORMATION -->
          <div class="flex flex-col justify-center h-auto lg:h-160 w-full lg:flex-1 min-w-0">

            <div class="mb-8">

              <h3 class="text-4xl md:text-5xl font-bold tracking-tight">
                {{ project.title }}
              </h3>

              <p class="mt-3 text-lg text-neutral-500">
                {{ project.role }} • {{ project.year }}
              </p>

            </div>


            <!-- VIDEO -->
            <div class="w-full max-w-full h-auto lg:h-120 aspect-video rounded-3xl overflow-hidden shadow-xl bg-neutral-100">

              <iframe
                class="h-full w-full"
                [src]="project.video"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>

            </div>


            <!-- DESCRIPTION -->
            <p class="mt-6 text-neutral-500 leading-relaxed">
              {{ project.description }}
            </p>

          </div>

        </article>

      }

    </section>
    
  </div>

  <app-lightbox #lightbox></app-lightbox>

  `
})


export class projectsPage implements OnInit {

  projects: {
    title: string;
    image: string;
    role: string;
    year: string;
    video: SafeResourceUrl;
    description: string;
    hoverColor: string;
  }[] = [];


  constructor(private sanitizer: DomSanitizer) {}


  ngOnInit() {

    this.projects = [

      {
        title: 'Capicú',
        image: '/projectIMG/p1.jpg',
        role: 'Supporting Actor',
        year: '2025',

        video: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/wR9k0yib_Gc'
        ),

        description:
          'A featured acting project showcasing my role as a supporting actor in the 2025 production of Capicú.',

        hoverColor:
          'hover:bg-gradient-to-tl hover:from-[#ff7f00]/70'
      },


      {
        title: 'Canvas',
        image: '/projectIMG/p2.jpg',
        role: 'Lead Actor',
        year: '2020',

        video: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/QbGVXNp2IoM'
        ),

        description:
          'A featured acting project showcasing my role as a Lead actor in the 2020 production of Canvas.',

        hoverColor:
          'hover:bg-gradient-to-tl hover:from-[#fab41b]/70'
      },


      {
        title: 'LASESIÓN',
        image: '/projectIMG/p3.jpg',
        role: 'Lead Actor • Director',
        year: '2021',

        video: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/m57Zj9IaSEo'
        ),

        description:
          'A featured acting project showcasing my role as a Lead actor and Director in the 2021 production of LASESIÓN.',

        hoverColor:
          'hover:bg-gradient-to-tl hover:from-[#8a4980]/70'
      },


      {
        title: 'The Monolith',
        image: '/projectIMG/p4.jpg',
        role: 'Lead Actor',
        year: '2022',

        video: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/PmytmH0JD8E'
        ),

        description:
          'A featured acting project showcasing my role as a Lead actor in the 2022 production of The Monolith.',

        hoverColor:
          'hover:bg-gradient-to-tl hover:from-[#000]/70'
      },


      {
        title: 'TEETH & GLASS',
        image: '/projectIMG/p5.jpg',
        role: 'Supporting Actor',
        year: '2026',

        video: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/nmLfAzkCJE8'
        ),

        description:
          'A featured acting project showcasing my role as a Supporting actor in the 2026 production of TEETH AND GLASS.',

        hoverColor:
          'hover:bg-gradient-to-tl hover:from-[#5f0503]/70'
      },


      {
        title: 'Entre Colmillos',
        image: '/projectIMG/p6.jpg',
        role: 'Supporting Actor',
        year: '2023',

        video: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/uYF2ANUUynQ'
        ),

        description:
          'A featured acting project showcasing my role as a Supporting actor in the 2023 production of Entre Colmillos.',

        hoverColor:
          'hover:bg-gradient-to-tl hover:from-[#ba0001]/70'
      },


      {
        title: 'EL VEJIGANTE',
        image: '/projectIMG/p7.jpeg',
        role: 'Supporting Actor',
        year: '2024',

        video: this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/ny9cwvveL9I'
        ),

        description:
          'A featured acting project showcasing my role as a Supporting actor in the 2024 production of EL VEJIGANTE.',

        hoverColor:
          'hover:bg-gradient-to-tl hover:from-[#1597f5]/70'
      }

    ];

  }

}