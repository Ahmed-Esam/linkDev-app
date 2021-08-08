import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation,Pagination]);

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderHomeComponent implements OnInit {

//   config1: SwiperOptions = {
//     direction: 'horizontal',
//     slidesPerView: 1,
//     // slideToClickedSlide: true,
//     mousewheel: true,
//     watchSlidesProgress: false,
//     keyboard: true,
//     centeredSlides: false,
//     loop: false,
//     roundLengths: false,
//     // slidesOffsetBefore: 0,
//     // slidesOffsetAfter: 0,
//     spaceBetween: 5,
//     observer:true,
// autoplay: {
// delay: 6000,
// disableOnInteraction: true
// },
// navigation: {
// nextEl: '.swiper-button-next',
// prevEl: '.swiper-button-prev',
// },
// breakpoints: {
// 1024: {
// slidesPerView: 17
// },
// 900: {
// slidesPerView: 8
// },
// 700: {
// slidesPerView: 6
// },
// 600: {
// slidesPerView: 5
// },
// 400: {
// slidesPerView: 5
// }
// },
// };

  constructor() { }

  ngOnInit(): void {
  }

}
