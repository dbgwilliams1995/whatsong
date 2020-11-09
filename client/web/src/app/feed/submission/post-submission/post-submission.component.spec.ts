import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSubmissionComponent } from './post-submission.component';

describe('PostSubmissionComponent', () => {
  let component: PostSubmissionComponent;
  let fixture: ComponentFixture<PostSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
