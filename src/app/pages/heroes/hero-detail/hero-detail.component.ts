import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router,ParamMap } from "@angular/router";
import { Location } from "@angular/common";

import { switchMap } from 'rxjs/operators';

import { HeroService } from "../hero.service";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.less"]
})
export class HeroDetailComponent implements OnInit {
  public hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')))
    // );
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
