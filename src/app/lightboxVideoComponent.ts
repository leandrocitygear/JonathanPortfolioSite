import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-lightboxVideo',
  standalone: true,
  template: `
    @if (isOpen) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
        (click)="close()"
      >
        <button
          class="absolute right-6 top-6 z-10 cursor-pointer text-4xl text-white"
          (click)="close()"
        >
          &times;
        </button>

        <div
          class="aspect-video w-full max-w-5xl"
          (click)="$event.stopPropagation()"
        >
          <iframe
            [src]="videoUrl"
            class="h-full w-full rounded-xl"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    }
  `
})
export class LightboxVideoComponent {
  isOpen = false;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  open(video: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(video);
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}