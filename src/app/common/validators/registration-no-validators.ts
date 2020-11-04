import {AbstractControl, ValidationErrors} from '@angular/forms';

export class RegistrationNoValidators {
   static shouldBeUnique(control: AbstractControl): ValidationErrors|null {
   return null;
   }
}
