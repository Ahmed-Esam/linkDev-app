import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../service/listing.service';
import { IArticle } from '../../interface/Articles';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  isShare:boolean = true;
  news_listing:any;
  apiNews:any;
  data:any;
  category = Array<{}>();
  test!:IArticle;
  constructor(private Newslisting: ListingService) { }


  toggleShare(){
    this.isShare = !this.isShare;
  }

  getDatalisting(){
    return this.news_listing = this.Newslisting.getNewsListing().subscribe((res) => {
      this.apiNews = res;
       this.data = this.apiNews.articles;
    })
  }

  ngOnInit(): void {
    this.getDatalisting()
  }

}



