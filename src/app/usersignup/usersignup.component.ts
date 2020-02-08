import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder} from '@angular/forms';
import {COuntriesService} from '../countries.service';
import {Country} from '../country';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  
  signUpForm : FormGroup;
  genders = ["male", "female"];
  countries:Country[] = []

  constructor(private countriesService : COuntriesService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.countries = this.countriesService.getCountries();

    this.signUpForm = this.formBuilder.group({
      personName : this.formBuilder.group({
      /*--- firstName : this.formBuilder.control(null), is optional -----*/
      firstName : [null, [Validators.required, Validators.minLength(5)]],
      lastName : [null, [Validators.required, Validators.minLength(5)]],
      }),
      email : [null, [Validators.required, Validators.minLength(5)]],
      mobile : [null, [Validators.required, Validators.minLength(5)]],
      password : [null, [Validators.required, Validators.minLength(5)]],
      confirmpassword : [null, [Validators.required, Validators.minLength(5)]],
      gender : [null, [Validators.required, Validators.minLength(2)]],
      CountryId : [null, [Validators.required, Validators.minLength(2)]],
      skills : this.formBuilder.array([])

    });
  }
  onSubmitClick(){
    this.signUpForm["submitted"] = true;
    console.log(this.signUpForm);
    /*this.signUpForm.setValue({
      firstName :  "Abdul",
      lastName : "Rahman",
      email : "abdulrahmanraziq548@gmail.com",
      password : "eeeboys12345",
      confirmpassword: "eeeboys12345",
      gender: "male",
      CountryId : 1
    });*/
    
  }
  onAddClick(){
    var formGroup = new FormGroup({
      skillName : new FormControl(null),
      level : new FormControl(null),
    });
    (<FormArray>this.signUpForm.get("skills")).push
    (formGroup);
  }
  
  OnRemoveClick(index:number){
    (<FormArray>this.signUpForm.get("skills")).removeAt(index);
  }  

}
