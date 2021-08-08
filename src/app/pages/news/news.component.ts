import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/service/listing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  News:any;
  apiNews:any;
  data:any;
  isShare:boolean = true;
  filteredString: string = '';


  constructor(private Newslisting: ListingService,private router: Router) { }

  getNews(){
    return this.News = this.Newslisting.getNewsListing().subscribe(res => {
       this.apiNews = res;
       this.data = this.apiNews.articles;
       console.log(this.data)
    })
  }

  toggleShare(){
    this.isShare = !this.isShare;
  }

  idTest:any;
  idTestEEESsda:any;
  NewsDetails:any;
  itemDetalis = Array<{}>();

  getID(id:any){
    console.log(id)
    return this.idTest = this.Newslisting.getNewsListing().subscribe(res => {
      this.idTestEEESsda = res;
      this.NewsDetails = this.idTestEEESsda.articles;

    })
  }
  ngOnInit(): void {
    this.getNews()

  }

}
