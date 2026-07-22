import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  template: `
    @if (isOpen) {
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
        (click)="close()"
      >
        <button
          class="absolute right-6 top-6 text-4xl text-white cursor-pointer"
          (click)="close()"
        >
          &times;
        </button>

        <img
          [src]="selectedImage"
          class="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
          (click)="$event.stopPropagation()"
        />
      </div>
    }
  `
})
export class LightboxComponent {
  isOpen = false;
  selectedImage = '';

  open(image: string) {
    this.selectedImage = image;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}