import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './aboutus.component/about-us.component';
import { ContactUsComponent } from './contactus.component/contact-us.component';
import { ImageGalleryComponent } from './imagegallery.component/image-gallery.component';
import { HomeComponent } from './home.component/home.component';
import { FeedbackComponent } from './feedback.component/feedback.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'sew/home',
    component: HomeComponent
  },
  {
    path: 'sew/aboutus',
    component: AboutUsComponent
  },
  {
    path: 'sew/contactus',
    component: ContactUsComponent
  },
  {
    path: 'sew/imagegallery',
    component: ImageGalleryComponent
  },
  {
    path: 'sew/feedback',
    component: FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
