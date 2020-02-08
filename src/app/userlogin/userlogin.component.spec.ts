import {TestBed, ComponentFixture} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserloginComponent} from './userlogin.component';

describe("userlogintest", ()=>{
    let component : UserloginComponent;
    let fixture : ComponentFixture<UserloginComponent>;
    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations : [UserloginComponent],
            imports : [FormsModule, ReactiveFormsModule]
        }).compileComponents()

        fixture = TestBed.createComponent(UserloginComponent);
        component = fixture.componentInstance;
    })

    it("logintest", ()=>{

        expect(component).toBeDefined();
    });

    it("is form valid when empty", ()=>{
        let name = component.loginForm.controls["username"];
        name.setValue("abdul");
        let passwords =  component.loginForm.controls["password"];
        passwords.setValue("eeeboys12345");
        expect(component.loginForm.valid).toBeTruthy();
    });
})