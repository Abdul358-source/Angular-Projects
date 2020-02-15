import { UsersignupComponent } from "./usersignup.component";
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


fdescribe('REACTIVEFORMTEST', () => {
let component : UsersignupComponent;
let fixture : ComponentFixture<UsersignupComponent>;

beforeEach(async(()=> {
  TestBed.configureTestingModule({
    declarations : [UsersignupComponent],
    imports : [
      ReactiveFormsModule,
      FormsModule,
      
    ]
  }).compileComponents();

}));

beforeEach(()=>{
  fixture = TestBed.createComponent(UsersignupComponent);
  component = fixture.componentInstance;
  component.ngOnInit();
  fixture.detectChanges();

});

it('should create', () => {
  expect(component).toBeTruthy();
});

it ('form invalid when empty', ()=>{
  expect(component.signUpForm.valid).toBeFalsy();
});

it ('Reactive form validity', ()=>{
  let name = component.signUpForm.controls['firstName'];
  expect(name.valid).toBeFalsy();

  name.setValue("abdulrahman");
  expect(name.hasError('required')).toBeTruthy();

  name.setValue("abdulrahman");
  expect(name.hasError('minLength')).toBeTruthy();

});
});