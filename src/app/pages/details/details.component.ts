import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/service/listing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private Newslisting: ListingService,private router: Router,private route: ActivatedRoute) { }

  getNews(){

  }



  ngOnInit(): void {
    this.getNews()

  }

}
