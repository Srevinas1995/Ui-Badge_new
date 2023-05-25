import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent {
  isSubmitted = false;
  cityName: any;

  registrationForm: FormGroup;

    constructor(fb: FormBuilder)
    {
        this.registrationForm = fb.group({
          cityName: ["", Validators.required]
        });
    }

  City: any = ['palakkad', 'Thrissur', 'Kannur', 'vadakkencherry','Pallasana','cochin']
  


  changeCity(e: any) {
    this.cityName.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get cityNames(): any {
    return this.registrationForm.get('cityName');
  }

  onSubmit(): any {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }

  }
}
