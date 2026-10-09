import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionExamples } from './change-detection-examples';

describe('ChangeDetectionExamples', () => {
  let component: ChangeDetectionExamples;
  let fixture: ComponentFixture<ChangeDetectionExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionExamples],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionExamples);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
