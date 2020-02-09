import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { Observable } from 'rxjs';
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.less'],

})
export class FormPageComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit() {
  }

}
