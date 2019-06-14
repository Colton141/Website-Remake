import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLisComponent } from './task-lis.component';

describe('TaskLisComponent', () => {
  let component: TaskLisComponent;
  let fixture: ComponentFixture<TaskLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
