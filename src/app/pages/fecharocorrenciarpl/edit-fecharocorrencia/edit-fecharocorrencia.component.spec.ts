import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFecharocorrenciaComponent } from './edit-fecharocorrencia.component';

describe('EditFecharocorrenciaComponent', () => {
  let component: EditFecharocorrenciaComponent;
  let fixture: ComponentFixture<EditFecharocorrenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFecharocorrenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFecharocorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
