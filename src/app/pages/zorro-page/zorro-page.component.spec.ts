import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroPageComponent } from './zorro-page.component';

describe('ZorroPageComponent', () => {
  let component: ZorroPageComponent;
  let fixture: ComponentFixture<ZorroPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorroPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
