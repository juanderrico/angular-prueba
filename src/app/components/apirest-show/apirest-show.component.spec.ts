import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIRestShowComponent } from './apirest-show.component';

describe('APIRestShowComponent', () => {
  let component: APIRestShowComponent;
  let fixture: ComponentFixture<APIRestShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIRestShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APIRestShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
