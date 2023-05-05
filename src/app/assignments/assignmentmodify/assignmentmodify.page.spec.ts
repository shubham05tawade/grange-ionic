import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignmentmodifyPage } from './assignmentmodify.page';

describe('AssignmentmodifyPage', () => {
  let component: AssignmentmodifyPage;
  let fixture: ComponentFixture<AssignmentmodifyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AssignmentmodifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
