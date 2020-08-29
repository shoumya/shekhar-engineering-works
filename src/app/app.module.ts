import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './aboutus.component/about-us.component';
import { ContactUsComponent } from './contactus.component/contact-us.component';
import { ImageGalleryComponent } from './imagegallery.component/image-gallery.component';
import { HomeComponent } from './home.component/home.component';
import { FooterComponent } from './footer.component/footer.component';
import { NavbarComponent } from './navbar.component/navbar.component';
import { InfoComponent } from './info.component/info.component';
import { FeedbackComponent } from './feedback.component/feedback.component';
import { StaticDataService } from './shared/services/application-static.dataservice';
import { DatePipePipe } from './date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    ImageGalleryComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    InfoComponent,
    FeedbackComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StaticDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
