import { Component } from '@angular/core';

let instanceCount = 0;

@Component({
  imports: [],
  selector: 'app-personal-logo',
  styleUrl: './personal-logo.scss',
  templateUrl: './personal-logo.html',
})
export class PersonalLogo {

  // The monogram masks the C where the J crosses it, so every instance
  // needs its own mask id to keep the document ids unique.
  readonly maskId = `personal-logo-mask-${instanceCount++}`;
  readonly maskRef = `url(#${this.maskId})`;
}
