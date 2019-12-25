import {
  Component, OnInit, OnDestroy, OnChanges, AfterContentInit
  , AfterContentChecked, AfterViewInit
  , AfterViewChecked,
  Renderer2,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-heroes-tour',
  templateUrl: './heroes-tour.component.html',
  styleUrls: ['./heroes-tour.component.less']
})
export class HeroesTourComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit
  , AfterContentChecked, AfterViewInit
  , AfterViewChecked {
  public name: string = "init";
  public myContext:any = {$implicit: 'World', localSk: 'Svet'};
  constructor(private renderer: Renderer2,private elRef: ElementRef) {
    this.renderer.setProperty(this.elRef.nativeElement, 'author', 'semlinker');
   }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
  ngAfterContentInit(){
    // this.name = "ngAfterContentInit";
    this.renderer.setStyle(this.elRef.nativeElement,'color','red');
    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked(){
    this.renderer.setStyle(this.elRef.nativeElement,'color','blue');
    // this.name = "ngAfterContentChecked";
    console.log('ngAfterContentChecked');

  }

  ngAfterViewInit(){
    // this.name = "ngAfterViewInit";
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    // this.name = "ngAfterViewInit";
    console.log('ngAfterViewChecked');

  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }


}
