import { FormlyFieldConfig } from '@ngx-formly/core';

export class Contact {
  name: string;
  phoneNumber: string;
  email: string;

  formFields(): FormlyFieldConfig[] {
    return [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Name',
          placeholder: 'Name',
          required: true,
        },
        validation: {
          messages:  {
            required: 'You need to provide a name!'
          }
        }
      },
      {
        key: 'phoneNumber',
        type: 'input',
        templateOptions: {
          type: 'tel',
          label: 'Phone number',
          placeholder: 'Phone number',
          required: true,
        },
        validation: {
          messages:  {
            required: 'You need to provide a phone number!'
          }
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Email',
          required: true,
        },
        validation: {
          messages:  {
            required: 'You need to provide a email address!'
          }
        }
      }
    ] as FormlyFieldConfig[];
  }
}
