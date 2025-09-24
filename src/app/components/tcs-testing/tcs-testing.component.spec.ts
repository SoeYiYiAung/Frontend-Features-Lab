import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcsTestingComponent } from './tcs-testing.component';

describe('TcsTestingComponent', () => {
  let component: TcsTestingComponent;
  let fixture: ComponentFixture<TcsTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TcsTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TcsTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
