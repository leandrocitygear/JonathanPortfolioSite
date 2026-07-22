import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
  <section class="min-h-screen bg-[#fafafa] text-neutral-900 px-6 py-24">

      <div class="max-w-7xl mx-auto">

        <!-- HEADER -->
        <div class="mb-20">
          <p class="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-5">
            Contact
          </p>

          <h1 class="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
            Let's build something
            <span class="text-neutral-400">great together.</span>
          </h1>

          <p class="mt-8 text-lg text-neutral-500 max-w-xl">
            Have a project, opportunity, or idea you'd like to discuss?
            I'd love to hear from you.
          </p>
        </div>


        <!-- CONTACT GRID -->
        <div class="grid lg:grid-cols-2 gap-16 items-start">

          <!-- LEFT SIDE -->
          <div class="space-y-10">

            <div class="flex gap-6">
            <div class="block">
              <p class="text-sm text-neutral-500 uppercase tracking-widest mb-2">
                Email
              </p>

              <a
                href="mailto:johnyboyr8@gmail.com"
                class="text-xl md:text-2xl font-medium hover:bg-gradient-to-r hover:from-orange-500 hover:to-black hover:bg-clip-text hover:text-transparent"
              >
                johnyboyr8@gmail.com
              </a>
              </div>

              <div class="block">
              <p class="text-sm text-neutral-500 uppercase tracking-widest mb-2">
                Tel
              </p>

              <a
                href="tel:+17876793356"
                class="text-xl md:text-2xl font-medium hover:bg-gradient-to-r hover:from-orange-500 hover:to-black hover:bg-clip-text hover:text-transparent"
              >
                787-679-3356
              </a>
              </div>
            </div>


            <div>
              <p class="text-sm text-neutral-500 uppercase tracking-widest mb-2">
                Socials
              </p>

              <div class="flex gap-6 text-lg">

                <a
                  href="https://www.instagram.com/jondonaru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  class="hover:bg-gradient-to-r hover:from-orange-500 hover:to-black hover:bg-clip-text hover:text-transparent"
                >
                  Instagram
                </a>

              </div>
            </div>


            <!-- CTA CARD -->
            <div class="relative overflow-hidden bg-black rounded-[40px] p-10 text-white">

              <div class="relative z-10">

                <p class="text-sm uppercase tracking-widest text-neutral-400 mb-5">
                  Available for opportunities
                </p>

                <h2 class="text-3xl font-semibold mb-6">
                  Let's connect.
                </h2>

                <p class="text-neutral-400 max-w-md">
                  Whether you're looking for an actor or model and want to collaborate
                  on an interesting project, feel free to reach out.
                </p>

              </div>

              <!-- Decorative gradient -->
              <div class="absolute -right-20 -bottom-20 w-72 h-72
                          bg-orange-500/30 blur-3xl rounded-full">
              </div>

            </div>

          </div>


          <!-- CONTACT FORM -->
          <form
            action="https://api.web3forms.com/submit" method="POST"
            class="bg-white border border-neutral-200 rounded-[40px] p-8 md:p-12 shadow-sm"
          >

            <div class="space-y-8">
            <input type="hidden" name="access_key" value="6cfad4b2-ddc8-41d1-8e2e-79b8ac90ab71">

              <!-- NAME -->
              <div>
                <label class="block text-sm font-medium mb-3">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  class="w-full border-b border-neutral-300 py-4 outline-none
                         focus:border-black transition-colors duration-300
                         bg-transparent"
                />
              </div>


              <!-- EMAIL -->
              <div>
                <label class="block text-sm font-medium mb-3">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  class="w-full border-b border-neutral-300 py-4 outline-none
                         focus:border-black transition-colors duration-300
                         bg-transparent"
                />
              </div>


              <!-- MESSAGE -->
              <div>
                <label class="block text-sm font-medium mb-3">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Tell me about your project..."
                  class="w-full border-b border-neutral-300 py-4 outline-none
                         focus:border-black transition-colors duration-300
                         bg-transparent resize-none"
                ></textarea>
              </div>


              <!-- BUTTON -->
              <button
                type="submit"
                class="group w-full bg-black text-white rounded-full py-5
                       flex items-center justify-center gap-3
                      hover:bg-gradient-to-tr hover:from-orange-500/90 hover:to-black 
                       transition-colors duration-800 cursor-pointer"
              >

                Send Message

                <span class="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>

              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  `
})
export class contactPage {}