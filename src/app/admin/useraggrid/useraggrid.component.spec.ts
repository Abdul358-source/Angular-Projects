import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraggridComponent } from './useraggrid.component';

describe('UseraggridComponent', () => {
  let component: UseraggridComponent;
  let fixture: ComponentFixture<UseraggridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraggridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
