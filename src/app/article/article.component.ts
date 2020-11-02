import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: Article = new Article();
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const key = params.key;
      this.articleService.getArticle(key).subscribe((article) => {
        if (undefined === article) {
          return;
        }
        this.article = article;
        console.log('<=== this.article: ===>', this.article);
      });
    });
  }
}
