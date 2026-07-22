import { Component } from '@angular/core';
import { LightboxComponent } from "./lightboxComponent";


@Component({
  selector: 'app-gallery',
  imports: [LightboxComponent],
  standalone: true,
  template: `

    <div class="min-h-screen pt-30">
       <div class="flex flex-wrap justify-center">
       @for (image of images; track image) {

        <img [src]="image" (click)="lightbox.open(image)" class="rounded-3xl hover:scale-105 transition duration-500 h-125 shadow-2xl/50 cursor-pointer m-5">
        }
      </div>
    </div>
<app-lightbox #lightbox></app-lightbox>
    
  `
})
export class galleryPage {

   images = [
    'images/g1.jpg',
    'images/g2.jpg',
    'images/g3.jpg',
    'images/g4.jpg',
    'images/g5.jpg',
    'images/g6.jpg',
    'images/g7.jpg',
    'images/g8.jpg',
    'images/g9.jpg',
    'images/g10.jpg',
    'images/g11.jpg',
    'images/g12.jpg',
    'images/g13.jpg',
    'images/g14.jpg',
    'images/g15.jpg',
    'images/g16.jpg',
    'images/g17.jpg',
    'images/g18.jpg',
    'images/g19.jpg',
    'images/g20.jpg',
    'images/g21.jpg',
    'images/g22.jpg',
    'images/g23.jpg',
    'images/g24.jpg',
    'images/g25.jpg',
    'images/g27.jpg',
    'images/g28.jpg',
    'images/g29.jpg',
    'images/g30.jpg'
  ];

  ngOnInit() {
    this.images = this.images.sort(() => Math.random() - 0.5);
  }

}