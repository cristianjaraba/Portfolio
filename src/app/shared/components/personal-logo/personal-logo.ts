import { Component } from '@angular/core';

/** Counter used to keep the generated mask ids unique across instances. */
let instanceCount = 0;

/**
 * Interlocked CJ monogram used in the header and the footer.
 *
 * The monogram masks the C where the J crosses it, so every instance needs
 * its own mask id to keep the document ids unique.
 */
@Component({
  imports: [],
  selector: 'app-personal-logo',
  styleUrl: './personal-logo.scss',
  templateUrl: './personal-logo.html',
})
export class PersonalLogo {

  /** Id of the mask element of this instance. */
  readonly maskId = `personal-logo-mask-${instanceCount++}`;

  /** Reference to {@link maskId} in the form expected by the mask attribute. */
  readonly maskRef = `url(#${this.maskId})`;
}
