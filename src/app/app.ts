import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:`
 <div class="min-h-screen bg-[#fafafa] text-neutral-900">


<!-- NAV -->

<header class="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-white/70 backdrop-blur-xl">

  <h1 class="text-xl font-semibold tracking-widest uppercase">
    Jonathan Donatiu
  </h1>

<nav class="border-red-500 flex ">
  <button class="rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2">
    Projects
  </button>
  <button class=" rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2">
    Gallery
  </button>
  <button class=" rounded-full px-6 py-3 bg-black text-white text-sm mr-2 ml-2">
    Contact
  </button>
</nav>

</header>





<!-- HERO -->


<section class="
pt-32
px-8
max-w-7xl
mx-auto">


<div class="
grid
lg:grid-cols-2
gap-16
items-center">


<!-- LEFT -->


<div>


<p class="
text-sm
uppercase
tracking-[6px]
text-neutral-500">

Actor / Performer

</p>



<h2 class="
mt-8
text-7xl
lg:text-8xl
font-bold
leading-[0.9]">

Creating

<br>

<span class="text-neutral-400">
unforgettable
</span>

<br>

characters.

</h2>




<p class="
mt-8
max-w-xl
text-lg
text-neutral-600">

Actor specializing in film,
television and stage.
Focused on authentic performances
and powerful storytelling.

</p>




<div class="flex gap-5 mt-10">


<button class="
px-8 py-4
rounded-full
bg-black
text-white
hover:scale-105
transition">

Watch Reel

</button>


<button class="
px-8 py-4
rounded-full
border">

View Work

</button>


</div>


</div>







<!-- IMAGE -->


<div class="relative">


<div class="
absolute
inset-0
bg-black/10
rounded-3xl
blur-3xl">
</div>


<img
src="/actor.jpg"
class="
relative
rounded-3xl
shadow-2xl
w-full
object-cover">


</div>


</div>

</section>









<!-- STATS -->


<section class="
px-8
max-w-7xl
mx-auto
py-24">


<div class="
grid
grid-cols-2
md:grid-cols-4
gap-8">


<div>

<h3 class="
text-5xl
font-bold">

15+

</h3>

<p class="text-gray-500">
Projects
</p>

</div>



<div>

<h3 class="
text-5xl
font-bold">

8

</h3>

<p class="text-gray-500">
Films
</p>

</div>



<div>

<h3 class="
text-5xl
font-bold">

5

</h3>

<p class="text-gray-500">
Awards
</p>

</div>



<div>

<h3 class="
text-5xl
font-bold">

10+

</h3>

<p class="text-gray-500">
Years Acting
</p>

</div>



</div>


</section>









<!-- FEATURED -->


<section class="
bg-white
rounded-t-[50px]
py-24
px-8">


<div class="
max-w-7xl
mx-auto">


<h2 class="
text-5xl
font-bold
mb-12">

Selected Work

</h2>





<div class="
grid
md:grid-cols-3
gap-8">


<div class="
group">

<img
src="/movie1.jpg"
class="
rounded-3xl
group-hover:scale-105
transition
duration-500">


<div class="mt-5">

<h3 class="
text-2xl
font-bold">

The Last Horizon

</h3>


<p class="text-gray-500">
Lead Role • 2025
</p>


</div>


</div>






<div class="group">

<img
src="/movie2.jpg"
class="
rounded-3xl
group-hover:scale-105
transition
duration-500">


<h3 class="
mt-5
text-2xl
font-bold">

Silent Echo

</h3>


<p class="text-gray-500">
Supporting Actor
</p>


</div>







<div class="group">

<img
src="/movie3.jpg"
class="
rounded-3xl
group-hover:scale-105
transition
duration-500">


<h3 class="
mt-5
text-2xl
font-bold">

Broken Roads

</h3>


<p class="text-gray-500">
Theater
</p>


</div>


</div>


</div>


</section>









<!-- SHOWREEL -->


<section class="
px-8
py-24
max-w-7xl
mx-auto">


<div class="
bg-black
rounded-[40px]
p-12
text-white
flex
flex-col
md:flex-row
justify-between
items-center">


<div>

<h2 class="
text-5xl
font-bold">

Watch Showreel

</h2>


<p class="
mt-4
text-gray-400">

A collection of recent performances.

</p>

</div>




<button class="
mt-8
md:mt-0
px-10
py-5
rounded-full
bg-white
text-black">

▶ Play Video

</button>


</div>


</section>









<!-- CONTACT -->


<footer class="
py-24
text-center">


<h2 class="
text-6xl
font-bold">

Let's Create Something

</h2>


<p class="
mt-5
text-gray-500">

Film • Television • Commercials

</p>


</footer>



</div>

<router-outlet></router-outlet>
  `
})
export class App {
  protected readonly title = signal('JonathanPortfolioSite');
}
