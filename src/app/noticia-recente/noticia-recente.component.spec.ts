import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaRecenteComponent } from './noticia-recente.component';

describe('NoticiaRecenteComponent', () => {
  let component: NoticiaRecenteComponent;
  let fixture: ComponentFixture<NoticiaRecenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaRecenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaRecenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
