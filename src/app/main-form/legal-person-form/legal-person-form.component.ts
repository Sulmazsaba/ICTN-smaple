import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import {CompanyService} from '../../services/company.service';
import {AppError} from '../../common/app-error';
import {NotFoundError} from '../../common/not-found-error';

@Component({
  selector: 'app-legal-person-form',
  templateUrl: './legal-person-form.component.html',
  styleUrls: ['./legal-person-form.component.css']
})
export class LegalPersonFormComponent implements OnInit {
@Input() form: FormGroup;
companyTypes: any[];
  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    this.fillCompanyTypes();
  }

  private fillCompanyTypes() {
    this.companyService.getCompanyTypes().subscribe((res) => {
      this.companyTypes = res;
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert('نوع شرکت یافت نشد.');
      } else {
        alert('در دریافت نوع شرکت خطا رخ داده است.');
      }
    });
  }
}
