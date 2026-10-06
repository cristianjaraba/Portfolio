import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  userform = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required]
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i)
      ]
    }),
    message: new FormControl('', {
      validators: [Validators.required]
    }),
    privacyPolicy: new FormControl(false, {
      validators: [Validators.requiredTrue]
    })
  });

  namePlaceholder = 'Your name goes here';
  emailPlaceholder = 'youremail@email.com';
  messagePlaceholder = 'Hello Cristian, I am interested in...';

  checkName() {
    this.namePlaceholder = this.userform.controls.firstName.invalid
      ? 'Oops! It seems your name is missing'
      : 'Your name goes here';
  }

  checkEmail() {
    const email = this.userform.controls.email;
    if (email.hasError('required')) {
      this.emailPlaceholder = 'Hoppla! Your email is required';
    } else if (email.hasError('pattern')) {
      this.emailPlaceholder = 'Hoppla! This email is not valid';
      email.setValue('');
    } else {
      this.emailPlaceholder = 'youremail@email.com';
    }
  }

  checkMessage() {
    this.messagePlaceholder = this.userform.controls.message.invalid
      ? 'What do you need to develop?'
      : 'Hello Cristian, I am interested in...';
  }

  formSubmit() {
    if (this.userform.invalid) {
      this.userform.markAllAsTouched();
      this.checkName();
      this.checkEmail();
      this.checkMessage();
      return;
    }
    console.log(this.userform.value);
    this.userform.reset();
  }
}
