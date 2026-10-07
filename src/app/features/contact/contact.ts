import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
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
    RouterLink,
    TranslatePipe
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

  /** Placeholder key of the name field, swapped for a hint while invalid. */
  namePlaceholder = 'CONTACT.PLACEHOLDER.NAME';

  /** Placeholder key of the email field, swapped for a hint while invalid. */
  emailPlaceholder = 'CONTACT.PLACEHOLDER.EMAIL';

  /** Placeholder key of the message field, swapped for a hint while invalid. */
  messagePlaceholder = 'CONTACT.PLACEHOLDER.MESSAGE';

  /** Shows a hint in the name placeholder while the name is missing. */
  checkName() {
    this.namePlaceholder = this.userform.controls.firstName.invalid
      ? 'CONTACT.HINT.NAME'
      : 'CONTACT.PLACEHOLDER.NAME';
  }

  /**
   * Shows a hint in the email placeholder for a missing or malformed address.
   *
   * A malformed address is cleared so the hint stays readable in the field.
   */
  checkEmail() {
    const email = this.userform.controls.email;
    if (email.hasError('required')) {
      this.emailPlaceholder = 'CONTACT.HINT.EMAIL_REQUIRED';
    } else if (email.hasError('pattern')) {
      this.emailPlaceholder = 'CONTACT.HINT.EMAIL_INVALID';
      email.setValue('');
    } else {
      this.emailPlaceholder = 'CONTACT.PLACEHOLDER.EMAIL';
    }
  }

  /** Shows a hint in the message placeholder while the message is missing. */
  checkMessage() {
    this.messagePlaceholder = this.userform.controls.message.invalid
      ? 'CONTACT.HINT.MESSAGE'
      : 'CONTACT.PLACEHOLDER.MESSAGE';
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
