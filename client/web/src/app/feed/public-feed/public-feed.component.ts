import { Component, OnInit } from '@angular/core';
import { FeedService } from '../services/feed.service';


@Component({
  selector: 'app-public-feed',
  templateUrl: './public-feed.component.html',
  styleUrls: ['./public-feed.component.css']
})
export class PublicFeedComponent implements OnInit {
  posts = [];

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {

    this.getEnquiryPosts();
  }

  getEnquiryPosts() {
    this.feedService.getEnquiryPosts(20, 0, "NEW")
        .subscribe( newPosts => {
          newPosts.forEach(post => this.posts.unshift(post));
        }
      );
  }
}
