import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contactForm = new FormGroup({});

  contactModel = new Contact();

  fields: FormlyFieldConfig[];

  ngOnInit() {
    this.fields = this.contactModel.formFields();
  }

  contactFormInvalid(): boolean {
    return this.contactForm.invalid;
  }

  submit(model: Contact) {
    console.log(model);
  }
}
