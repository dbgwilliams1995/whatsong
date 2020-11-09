import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiRoutes } from 'src/app/api/api-routes';
import { environment } from 'src/environments/environment';
import { EnquiryPost } from '../interfaces/enquiry-post';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { 
  }

  getEnquiryPosts(limit: number, offset: number, sortBy: string): Observable<EnquiryPost[]>{
    return this.http.get<EnquiryPost[]>(apiRoutes.getEnquiryPosts(limit, offset, sortBy));
  }
  
}
