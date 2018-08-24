import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TudoComponent } from './tudo.component';

describe('TudoComponent', () => {
  let component: TudoComponent;
  let fixture: ComponentFixture<TudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
