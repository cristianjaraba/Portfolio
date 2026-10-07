import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/** About me section with the short introduction and the personal highlights. */
@Component({
  imports: [TranslatePipe],
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {}
