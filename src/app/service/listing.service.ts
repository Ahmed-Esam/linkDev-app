import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IArticle } from '../interface/Articles';

@Injectable({
  providedIn: 'root'
})
export class ListingService {


  constructor(private http: HttpClient) { }
  getNewsListing(){
    return  this.http.get('https://api.npoint.io/e2534d5412765bf36702')
  }
}
