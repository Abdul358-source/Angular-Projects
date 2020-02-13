import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprojectdetailsComponent } from './userprojectdetails.component';

describe('UserprojectdetailsComponent', () => {
  let component: UserprojectdetailsComponent;
  let fixture: ComponentFixture<UserprojectdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprojectdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprojectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
