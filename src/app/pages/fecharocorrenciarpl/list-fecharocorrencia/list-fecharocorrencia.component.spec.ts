import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFecharocorrenciaComponent } from './list-fecharocorrencia.component';

describe('ListFecharocorrenciaComponent', () => {
  let component: ListFecharocorrenciaComponent;
  let fixture: ComponentFixture<ListFecharocorrenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFecharocorrenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFecharocorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
