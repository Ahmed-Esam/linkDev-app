import { IArticle } from './../../interface/Articles';
import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/service/listing.service';
import {Router} from '@angular/router';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  News:any;
  apiNews:any;
  data:any[] = [];
  isShare:boolean = true;
  filteredString: any;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  page = 1;
  pageSize:number = 12;

  constructor(private Newslisting: ListingService,private router: Router,private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
   }

   onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
  getNews(){
    return this.News = this.Newslisting.getNewsListing().subscribe(res => {
       this.apiNews = res;
       this.data = this.apiNews.articles;
    })
  }

  toggleShare(){
    this.isShare = !this.isShare;
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
  CategoryList:any;
  getCategory(){
    return this.Newslisting.getCategoryListing().subscribe(res => {
      this.CategoryList = res
      this.CategoryList = this.CategoryList.sourceCategory
    })
  }

  dropdownVal:string = 'Toggle dropdown';
  localData:any;
  Update:any[] = [];
  changeAction(valNAme:any,valId:number){
    this.dropdownVal = valNAme;
    console.log(valId)
    return this.News = this.Newslisting.getNewsListing().subscribe(res => {
      this.apiNews = res;
      this.data = this.apiNews.articles;

      this.data.forEach((element,index) => {
        if (element.sourceID == valId) {
          this.Update.push(element)
        }
      });
      this.data = this.Update
      this.Update =[]
   })
  }

  ngOnInit(): void {
    this.getNews()
    this.getCategory()

  }

}
