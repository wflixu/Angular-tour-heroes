import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComComponent } from './web-com.component';

describe('WebComComponent', () => {
  let component: WebComComponent;
  let fixture: ComponentFixture<WebComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
