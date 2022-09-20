import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindQuestionComponent } from './find-question.component';

describe('FindQuestionComponent', () => {
  let component: FindQuestionComponent;
  let fixture: ComponentFixture<FindQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
