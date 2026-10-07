import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';
import { Imprint } from './imprint';

describe('Imprint', () => {
  let component: Imprint;
  let fixture: ComponentFixture<Imprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imprint],
      providers: [provideTranslateService(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Imprint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
