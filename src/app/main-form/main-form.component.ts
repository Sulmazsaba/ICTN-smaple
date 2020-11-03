import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  form: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.form = new FormGroup({
      personType: new FormControl(),
      companyName : new FormControl('',
        [Validators.required,
          Validators.maxLength(10)]),
      companyType: new FormControl(),
      registrationNo: new FormControl('',
        [Validators.pattern('^[0-9]*$'),
        Validators.maxLength(10),
          Validators.minLength(10)
        ]),
      registrationDate: new FormControl(),
      email: new FormControl('',
        [Validators.email,
        Validators.maxLength(50)]
        ),
      postalCode: new FormControl('',
        [Validators.maxLength(11),
        Validators.pattern('^[0-9]*$')
        ]) ,
      phoneNo: new FormControl('',
        Validators.pattern('^[0-9]*$')),
      address: new FormControl('',
        Validators.maxLength(400)
        ),
      firstMobileNo: new FormControl(),
      secondMobileNo: new FormControl()
    });
  }
}
