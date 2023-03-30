import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoepianComponent } from './coepian.component';

describe('CoepianComponent', () => {
  let component: CoepianComponent;
  let fixture: ComponentFixture<CoepianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoepianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoepianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
