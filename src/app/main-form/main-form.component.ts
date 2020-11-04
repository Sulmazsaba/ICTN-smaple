import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonTypeModel} from './person-type.model';
import {RegistrationNoValidators} from '../common/validators/registration-no-validators';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  form: FormGroup;
  personType: PersonTypeModel = PersonTypeModel.legal;
  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.form = new FormGroup({
      companyType: new FormControl(),
      companyName : new FormControl(),
      registrationNo: new FormControl('',
        [
          Validators.pattern('^[0-9]*$'),
          RegistrationNoValidators.shouldBeUnique
        ]),
      registrationDate: new FormControl(),
      personType: new FormControl(),
      email: new FormControl('', Validators.email ),
      postalCode: new FormControl('', {
        validators: [
          Validators.maxLength(10),
          Validators.minLength(10)]}
        ) ,
      phoneNo: new FormControl(),
      address: new FormControl(),
      firstMobileNo: new FormControl('', {
        validators: [
          Validators.pattern('^(0)9[01239]\\d{8}$'),
        ]
      }),
      secondMobileNo: new FormControl('', {
        validators: [
          Validators.pattern('^(0)9[01239]\\d{8}$'),
        ]
      })
    });
  }

  changePersonType(id: string) {
    if (id === 'legal') {
    this.personType = PersonTypeModel.legal;
    } else if (id === 'real') {
      this.personType = PersonTypeModel.real;
    }
  }

  get PersonTypeModel() {
    return  PersonTypeModel;
  }

  get postalCode() {
    return this.form.get('postalCode');
  }


}
