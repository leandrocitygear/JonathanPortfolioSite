import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
  <div class="min-h-screen bg-[#fafafa] text-neutral-900 pt-30">
    
    <section class="min-h-screen">
   <article class="grid md:grid-cols-3 gap-10 items-center p-6 md:p-10 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-2xl/50 transition duration-500 m-10 hover:bg-gradient-to-tl hover:from-[#ff7f00]/70">

  <!-- PROJECT IMAGE -->
  <div class="overflow-hidden rounded hover:scale-105 transition duration-700 w-120 h-160">

    <img
      src="/projectIMG/p1.jpg"
      alt="Capicú project"
      class="w-120 h-160"
    />

  </div>


  <!-- PROJECT INFORMATION -->
  <div class="flex flex-col justify-center col-span-2 h-160 w-230">

    <div class="mb-8">

      <h3 class="text-4xl md:text-5xl font-bold tracking-tight">
        Capicú
      </h3>

      <p class="mt-3 text-lg text-neutral-500">
        Supporting Actor • 2025
      </p>

    </div>


    <!-- VIDEO -->
    <div class="w-full h-120 aspect-video rounded-3xl overflow-hidden shadow-xl bg-neutral-100">

      <iframe class="h-full w-full" src="https://www.youtube.com/embed/wR9k0yib_Gc?si=GKPhrNUo6AjiMEDL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>


    <!-- DESCRIPTION -->
    <p class="mt-6 text-neutral-500 leading-relaxed">
      A featured acting project showcasing my role as a supporting actor
      in the 2025 production of Capicú.
    </p>

  </div>

</article>

   <article class="grid md:grid-cols-3 gap-10 items-center p-6 md:p-10 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-2xl/50 transition duration-500 m-10 hover:bg-gradient-to-tl hover:from-[#fab41b]/70">

  <!-- PROJECT IMAGE -->
  <div class="overflow-hidden rounded hover:scale-105 transition duration-700 w-120 h-160">

    <img
      src="/projectIMG/p2.jpg"
      alt="Canvas project"
      class="w-120 h-160"
    />

  </div>


  <!-- PROJECT INFORMATION -->
  <div class="flex flex-col justify-center col-span-2 h-160 w-230">

    <div class="mb-8">

      <h3 class="text-4xl md:text-5xl font-bold tracking-tight">
        Canvas
      </h3>

      <p class="mt-3 text-lg text-neutral-500">
        Lead Actor • 2020
      </p>

    </div>


    <!-- VIDEO -->
    <div class="w-full h-120 aspect-video rounded-3xl overflow-hidden shadow-xl bg-neutral-100">

      <iframe class="h-full w-full" src="https://www.youtube.com/embed/QbGVXNp2IoM?si=HvJqo3pi-hEld9Sh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>


    <!-- DESCRIPTION -->
    <p class="mt-6 text-neutral-500 leading-relaxed">
      A featured acting project showcasing my role as a Lead actor
      in the 2020 production of Canvas.
    </p>

  </div>

</article>

   <article class="grid md:grid-cols-3 gap-10 items-center p-6 md:p-10 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-2xl/50 transition duration-500 m-10 hover:bg-gradient-to-tl hover:from-[#8a4980]/70">

  <!-- PROJECT IMAGE -->
  <div class="overflow-hidden rounded hover:scale-105 transition duration-700 w-120 h-160">

    <img
      src="/projectIMG/p3.jpg"
      alt="Lasesion project"
      class="w-120 h-160"
    />

  </div>


  <!-- PROJECT INFORMATION -->
  <div class="flex flex-col justify-center col-span-2 h-160 w-230">

    <div class="mb-8">

      <h3 class="text-4xl md:text-5xl font-bold tracking-tight">
        LASESIÓN
      </h3>

      <p class="mt-3 text-lg text-neutral-500">
        Lead Actor • Director • 2021
      </p>

    </div>


    <!-- VIDEO -->
    <div class="w-full h-120 aspect-video rounded-3xl overflow-hidden shadow-xl bg-neutral-100">

      <iframe class="h-full w-full" src="https://www.youtube.com/embed/m57Zj9IaSEo?si=xXAgXNvcFF_QkF0P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>


    <!-- DESCRIPTION -->
    <p class="mt-6 text-neutral-500 leading-relaxed">
      A featured acting project showcasing my role as a Lead actor and Director
      in the 2021 production of LASESIÓN.
    </p>

  </div>

</article>

   <article class="grid md:grid-cols-3 gap-10 items-center p-6 md:p-10 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-2xl/50 transition duration-500 m-10 hover:bg-gradient-to-tl hover:from-[#000]/70">

  <!-- PROJECT IMAGE -->
  <div class="overflow-hidden rounded hover:scale-105 transition duration-700 w-120 h-160">

    <img
      src="/projectIMG/p4.jpg"
      alt="The Monolith project"
      class="w-120 h-160"
    />

  </div>


  <!-- PROJECT INFORMATION -->
  <div class="flex flex-col justify-center col-span-2 h-160 w-230">

    <div class="mb-8">

      <h3 class="text-4xl md:text-5xl font-bold tracking-tight">
        The Monolith
      </h3>

      <p class="mt-3 text-lg text-neutral-500">
        Lead Actor • 2022
      </p>

    </div>


    <!-- VIDEO -->
    <div class="w-full h-120 aspect-video rounded-3xl overflow-hidden shadow-xl bg-neutral-100">

      <iframe class="h-full w-full" src="https://www.youtube.com/embed/PmytmH0JD8E?si=fJAPoncuUxBv5__u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>


    <!-- DESCRIPTION -->
    <p class="mt-6 text-neutral-500 leading-relaxed">
      A featured acting project showcasing my role as a Lead actor
      in the 2022 production of The Monolith.
    </p>

  </div>

</article>

   <article class="grid md:grid-cols-3 gap-10 items-center p-6 md:p-10 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-2xl/50 transition duration-500 m-10 hover:bg-gradient-to-tl hover:from-[#5f0503]/70">

  <!-- PROJECT IMAGE -->
  <div class="overflow-hidden rounded hover:scale-105 transition duration-700 w-120 h-160">

    <img
      src="/projectIMG/p5.jpg"
      alt="Teeth & glass project"
      class="w-120 h-160"
    />

  </div>


  <!-- PROJECT INFORMATION -->
  <div class="flex flex-col justify-center col-span-2 h-160 w-230">

    <div class="mb-8">

      <h3 class="text-4xl md:text-5xl font-bold tracking-tight">
        TEETH & GLASS
      </h3>

      <p class="mt-3 text-lg text-neutral-500">
        Supporting Actor • 2026
      </p>

    </div>


    <!-- VIDEO -->
    <div class="w-full h-120 aspect-video rounded-3xl overflow-hidden shadow-xl bg-neutral-100">

      <iframe class="h-full w-full" src="https://www.youtube.com/embed/nmLfAzkCJE8?si=jlJRCVIRI2jQzfOd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>


    <!-- DESCRIPTION -->
    <p class="mt-6 text-neutral-500 leading-relaxed">
      A featured acting project showcasing my role as a Supporting actor
      in the 2026 production of TEETH AND GLASS.
    </p>

  </div>

</article>

   <article class="grid md:grid-cols-3 gap-10 items-center p-6 md:p-10 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-2xl/50 transition duration-500 m-10 hover:bg-gradient-to-tl hover:from-[#ba0001]/70">

  <!-- PROJECT IMAGE -->
  <div class="overflow-hidden rounded hover:scale-105 transition duration-700 w-120 h-160">

    <img
      src="/projectIMG/p6.jpg"
      alt="Entre Colmillos project"
      class="w-120 h-160"
    />

  </div>


  <!-- PROJECT INFORMATION -->
  <div class="flex flex-col justify-center col-span-2 h-160 w-230">

    <div class="mb-8">

      <h3 class="text-4xl md:text-5xl font-bold tracking-tight">
        Entre Colmillos
      </h3>

      <p class="mt-3 text-lg text-neutral-500">
        Supporting Actor • 2023
      </p>

    </div>


    <!-- VIDEO -->
    <div class="w-full h-120 aspect-video rounded-3xl overflow-hidden shadow-xl bg-neutral-100">

      <iframe class="h-full w-full" src="https://www.youtube.com/embed/uYF2ANUUynQ?si=ZmxgHJeXVNGXQ68p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>


    <!-- DESCRIPTION -->
    <p class="mt-6 text-neutral-500 leading-relaxed">
      A featured acting project showcasing my role as a Supporting actor
      in the 2023 production of Entre Colmillos.
    </p>

  </div>

</article>

   <article class="grid md:grid-cols-3 gap-10 items-center p-6 md:p-10 rounded-[2rem] bg-white border border-neutral-200 shadow-sm hover:shadow-2xl/50 transition duration-500 m-10 hover:bg-gradient-to-tl hover:from-[#1597f5]/70">

  <!-- PROJECT IMAGE -->
  <div class="overflow-hidden rounded hover:scale-105 transition duration-700 w-120 h-160">

    <img
      src="/projectIMG/p7.jpeg"
      alt="EL Vejigante project"
      class="w-120 h-160"
    />

  </div>


  <!-- PROJECT INFORMATION -->
  <div class="flex flex-col justify-center col-span-2 h-160 w-230">

    <div class="mb-8">

      <h3 class="text-4xl md:text-5xl font-bold tracking-tight">
        EL VEJIGANTE
      </h3>

      <p class="mt-3 text-lg text-neutral-500">
        Supporting Actor • 2024
      </p>

    </div>


    <!-- VIDEO -->
    <div class="w-full h-120 aspect-video rounded-3xl overflow-hidden shadow-xl bg-neutral-100">

      <iframe class="h-full w-full" src="https://www.youtube.com/embed/nmLfAzkCJE8?si=jlJRCVIRI2jQzfOd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>


    <!-- DESCRIPTION -->
    <p class="mt-6 text-neutral-500 leading-relaxed">
      A featured acting project showcasing my role as a Supporting actor
      in the 2024 production of EL VEJIGANTE.
    </p>

  </div>

</article>

    </section>
    
  </div>
  `
})
export class projectsPage {}