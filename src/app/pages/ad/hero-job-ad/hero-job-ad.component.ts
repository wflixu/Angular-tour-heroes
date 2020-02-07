import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from '../model';

@Component({
  selector: 'app-hero-job-ad',
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `,
  styleUrls: ['./hero-job-ad.component.less']
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}
