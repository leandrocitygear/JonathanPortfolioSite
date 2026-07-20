import { Routes } from '@angular/router';
import { homePage } from './homePage';
import { projectsPage } from './projectsPage';
import { galleryPage } from './galleryPage';
import { contactPage } from './contactPage';

export const routes: Routes = [
    { path: '', component: homePage },
    { path: 'projects', component: projectsPage },
    { path: 'gallery', component: galleryPage },
    { path: 'contact', component: contactPage }
];
