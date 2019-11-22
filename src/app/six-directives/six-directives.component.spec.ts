import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixDirectivesComponent } from './six-directives.component';

describe('SixDirectivesComponent', () => {
  let component: SixDirectivesComponent;
  let fixture: ComponentFixture<SixDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
