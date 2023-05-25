import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isSubmitted = false;
  cityName: any;

  registrationForm: FormGroup;

    constructor(fb: FormBuilder)
    {
        this.registrationForm = fb.group({
          cityName: ["", Validators.required]
        });
    }

  // City Names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  


  // Choose city using select dropdown
  changeCity(e: any) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get cityNames(): any {
    return this.registrationForm.get('cityName');
  }

  /*########### Template Driven Form ###########*/
  onSubmit(): any {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }

  }
}
