import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';

/** Legal notice page linked from the footer and the contact form. */
@Component({
  imports: [Header],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {}
