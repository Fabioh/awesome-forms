import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm = new FormGroup({});

  contactModel = new Contact();

  fields: FormlyFieldConfig[];

  constructor() { }

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
