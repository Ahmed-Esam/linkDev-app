import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { SwiperModule } from "swiper/angular";
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { HelpedComponent } from './components/helped/helped.component';
import { NewsComponent } from './pages/news/news.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './components/home/home.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderHomeComponent,
    LatestNewsComponent,
    HelpedComponent,
    NewsComponent,
    DetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule
    // NgxDaterangepickerMd.forRoot(),

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
