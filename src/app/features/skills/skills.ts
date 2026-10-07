import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Skill } from '../../core/interfaces/skill';

/** Skills section rendering one badge per technology. */
@Component({
  imports: [TranslatePipe],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {

  /** Badges of the section, in display order. */
  skills: Skill[] = [
    { id: 'HTML', labelKey: 'SKILLS.ITEMS.HTML' },
    { id: 'CSS', labelKey: 'SKILLS.ITEMS.CSS' },
    { id: 'JavaScript', labelKey: 'SKILLS.ITEMS.JAVASCRIPT' },
    { id: 'REST-API', labelKey: 'SKILLS.ITEMS.REST_API' },
    { id: 'TypeScript', labelKey: 'SKILLS.ITEMS.TYPESCRIPT' },
    { id: 'Angular', labelKey: 'SKILLS.ITEMS.ANGULAR' },
    { id: 'Git', labelKey: 'SKILLS.ITEMS.GIT' },
    { id: 'Material Design', labelKey: 'SKILLS.ITEMS.MATERIAL_DESIGN' },
    { id: 'Scrum', labelKey: 'SKILLS.ITEMS.SCRUM' },
    { id: 'Growth mindset', labelKey: 'SKILLS.ITEMS.GROWTH_MINDSET' }
  ];

  /** Id of the badge that reveals the list of technologies still to learn. */
  readonly learningId = 'Growth mindset';

}
