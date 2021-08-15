import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/service/listing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  isShare:boolean = true;
  getlocalStorage:any;
  detailsNews:any;
  newsCategorylisting:any;
  getcategoryName:any;

  constructor(private Newslisting: ListingService,private router: Router,private route: ActivatedRoute) {}



  toggleShare(){
    this.isShare = !this.isShare;
  }

  getNews(){
    this.getlocalStorage = localStorage.getItem("news");
    this.detailsNews = JSON.parse(this.getlocalStorage  || '{}')
  }

  getCategory(){
    return this.Newslisting.getCategoryListing().subscribe((res:any) => {
      this.newsCategorylisting = res.sourceCategory;
      this.newsCategorylisting.forEach((ele:any) => {
        if (ele.id == this.detailsNews.sourceID ) {
          localStorage.setItem("Category", ele.name);
          this.getcategoryName = localStorage.getItem("Category");
        }
      });


    })
  }



  ngOnInit(): void {
    this.getNews()
    this.getCategory()

  }

}
