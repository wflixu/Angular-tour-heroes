import { Component, OnInit } from '@angular/core';
import { AdItem } from '../model';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.less']
})
export class AdPageComponent implements OnInit {

  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
