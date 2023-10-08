import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/env/environments';
import { ArticleModel } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public articles_container?: any

  constructor(private http: HttpClient) { }

  get_articles() {
    this.http.get(environments.articles_uri).subscribe((response) => {
      this.articles_container = response

      if (this.articles_container = response) {
        console.log('articles server is running')
      }
    })
  }

  get articles() { return this.articles_container }

}
