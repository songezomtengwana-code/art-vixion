import { Component, OnInit } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  constructor(private articles_service: ArticlesService) {}
  
  ngOnInit(): void {
    this.articles_service.get_articles();
  }

  get articles():ArticleModel[] { return this.articles_service.articles }
}
