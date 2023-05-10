import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendaraddPage } from './calendaradd.page';

describe('CalendaraddPage', () => {
  let component: CalendaraddPage;
  let fixture: ComponentFixture<CalendaraddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalendaraddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
