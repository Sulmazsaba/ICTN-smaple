import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-legal-person-form',
  templateUrl: './legal-person-form.component.html',
  styleUrls: ['./legal-person-form.component.css']
})
export class LegalPersonFormComponent implements OnInit {
@Input() form: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
  }

}
