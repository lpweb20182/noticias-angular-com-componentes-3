import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasNoticiasComponent } from './todas-noticias.component';

describe('TodasNoticiasComponent', () => {
  let component: TodasNoticiasComponent;
  let fixture: ComponentFixture<TodasNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodasNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodasNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
