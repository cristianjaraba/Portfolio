import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { ProjectDialog } from './project-dialog';

describe('ProjectDialog', () => {
  let component: ProjectDialog;
  let fixture: ComponentFixture<ProjectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDialog],
      providers: [provideTranslateService()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
