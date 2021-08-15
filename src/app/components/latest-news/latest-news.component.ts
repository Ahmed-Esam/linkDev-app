import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../service/listing.service';
import { IArticle } from '../../interface/Articles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  isShare:boolean = false;
  news_listing:any;
  apiNews:any;
  data:any;
  category = Array<{}>();
  constructor(private Newslisting: ListingService,private router: Router) { }


  toggleShare(valOpen:any){
    this.isShare = !this.isShare;
    console.log(valOpen.target.nextElementSibling)
    if (this.isShare) {
      valOpen.target.nextElementSibling.classList.add("OpenButtom")
    }else{

    }
  }

  getDatalisting(){
    return this.news_listing = this.Newslisting.getNewsListing().subscribe((res) => {
      this.apiNews = res;
       this.data = this.apiNews.articles;
    })
  }

  OneNews:any;
  getDet(id:number){

    this.data.forEach((ele:any) => {
      if (ele.id === id) {
        this.OneNews = ele;
        const myJSON = JSON.stringify(this.OneNews);
        localStorage.setItem("news", myJSON);
        this.router.navigateByUrl('details');
      }
    });
  }
  ngOnInit(): void {
    this.getDatalisting()
  }

}



