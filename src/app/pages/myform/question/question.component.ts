import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less']
})
export class QuestionComponent {
  @Input() question: QuestionBase<string>;

  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
