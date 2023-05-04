import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyplacesComponent } from './myplaces.component';

describe('MyplacesComponent', () => {
  let component: MyplacesComponent;
  let fixture: ComponentFixture<MyplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyplacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
