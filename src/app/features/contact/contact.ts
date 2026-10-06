import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

/**
 * Contact section with the reactive contact form.
 *
 * Validation feedback is given through the placeholders instead of extra
 * error labels, so each control has a check method that swaps its placeholder
 * for a hint while the value is invalid.
 */
@Component({
  imports: [ReactiveFormsModule,
    RouterLink
  ],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  /** Contact form; the privacy policy checkbox has to be accepted to submit. */
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

  /** Placeholder of the name field, replaced by a hint while it is invalid. */
  namePlaceholder = 'Your name goes here';

  /** Placeholder of the email field, replaced by a hint while it is invalid. */
  emailPlaceholder = 'youremail@email.com';

  /** Placeholder of the message field, replaced by a hint while it is invalid. */
  messagePlaceholder = 'Hello Cristian, I am interested in...';

  /** Shows a hint in the name placeholder while the name is missing. */
  checkName() {
    this.namePlaceholder = this.userform.controls.firstName.invalid
      ? 'Oops! It seems your name is missing'
      : 'Your name goes here';
  }

  /**
   * Shows a hint in the email placeholder for a missing or malformed address.
   *
   * A malformed address is cleared so the hint stays readable in the field.
   */
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

  /** Shows a hint in the message placeholder while the message is missing. */
  checkMessage() {
    this.messagePlaceholder = this.userform.controls.message.invalid
      ? 'What do you need to develop?'
      : 'Hello Cristian, I am interested in...';
  }

  /**
   * Handles the form submit.
   *
   * An invalid form is marked as touched and every placeholder hint is
   * refreshed; a valid form is reset.
   */
  formSubmit() {
    if (this.userform.invalid) {
      this.userform.markAllAsTouched();
      this.checkName();
      this.checkEmail();
      this.checkMessage();
      return;
    }
    this.userform.reset();
  }
}
