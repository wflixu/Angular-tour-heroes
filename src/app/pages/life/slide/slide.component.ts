/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ContentChildren,
  QueryList,
  ComponentRef,
  ContentChild,
  ChangeDetectorRef,
  HostListener,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideComponent implements OnInit {
  @Input() curIdx: number;

  @Output() pageChange: EventEmitter<any>= new EventEmitter<any>();

  @ViewChild('listWraper', { static: false }) listWraperRef: ElementRef;
  @ContentChildren(BoxComponent, { descendants: false }) boxsComRef: QueryList<
    BoxComponent
  >;
  public pageList: Array<number> = [];

  public curPage = 1;

  public left: string = '0px';

  public total = 0;

  public totalPage = 1;
  public pageSize: number;

  public boxWidth: number;

  public boxSpan: number;

  constructor(hostRef: ElementRef, private cdr: ChangeDetectorRef) {}
  @HostListener('window:resize', ['$event'])
  handleKeyDown(event: Event) {
     this.calcPaging();
  }

  ngOnInit(): void {}

  public goPage(page: number): void {
    this.curPage = page;
    this.pageChange.emit({
      curPage:this.curPage
    })
    this.left =
      0 -
      (this.curPage - 1) * this.pageSize * (this.boxWidth + this.boxSpan) +
      'px';

    console.log(this.left);
    this.cdr.markForCheck();

  }

  ngAfterContentInit(): void {}

  ngAfterViewInit(): void {
    this.calcPaging();
    this.cdr.detectChanges();
  }
  ngOnChanges(changes: SimpleChanges): void {
     let curIdxChange = changes['curIdx'];
     if(!curIdxChange.firstChange){
       this.showCurBox(curIdxChange.currentValue);
     }

  }

  public calcPaging(): void {
    const wraperStyle = getComputedStyle(this.listWraperRef.nativeElement);
    const wraperWidth = parseFloat(wraperStyle.width);
    const boxStyle = getComputedStyle(this.boxsComRef.first.nativeElement);
    this.boxWidth = parseFloat(boxStyle.width);
    this.boxSpan = parseFloat(boxStyle.marginRight);
    this.pageSize =
      (wraperWidth > (this.boxWidth + this.boxSpan))
        ? Math.floor(wraperWidth / (this.boxWidth + this.boxSpan))
        : 1;
    this.total = this.boxsComRef.length > 0 ? this.boxsComRef.length : 1;
    this.totalPage = Math.ceil(this.total / this.pageSize);
    this.generatePages();
  }

  private generatePages(): void {
    console.log(this.totalPage);
    this.pageList = [];
    for (let index = 0; index < this.totalPage; index++) {
      this.pageList.push(index + 1);
    }
  }

  private showCurBox(idx:number){
     let max = (this.pageSize*this.curPage);
     let min = (this.curPage-1)*this.pageSize;

     if(idx<min || idx>max){
       this.goPage(Math.floor((idx+1)/this.pageSize)||1);
     }
  }
}
